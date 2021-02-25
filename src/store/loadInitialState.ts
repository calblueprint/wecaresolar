import { db } from '../index';
import { store } from './reducers';
import { refreshResources } from './resourcesSlice';
import { refreshLessons } from './lessonsSlice';
import { refreshTopics } from './topicsSlice';
import { onFetchResult } from './metadataSlice';
import { ActionCreator } from 'redux';

export enum FetchStatus {
  SuccessFromServer = 'SUCCESS_FROM_SERVER',
  SuccessFromCache = 'SUCCESS_FROM_CACHE',
  Failure = 'FAILURE'
}

const fetchStatusToNum: Record<FetchStatus, number> = {
  [FetchStatus.SuccessFromServer]: 0,
  [FetchStatus.SuccessFromCache]: 1,
  [FetchStatus.Failure]: 2
};

const numToFetchStatus: Record<number, FetchStatus> = {
  0: FetchStatus.SuccessFromServer,
  1: FetchStatus.SuccessFromCache,
  2: FetchStatus.Failure
};

/**
 * Helper function to retrieve all the contents of a collection in Cloud Firestore.
 *
 * @param collectionName        - The name of the collection in Cloud Firestore
 * @param updateActionCreator   - Action creator for the desired Redux action to dispatch once data is received
 * @param postprocess           - (Optional) Postprocessing function for each individual document in the collection
 *
 * @returns A FetchStatus value indicating whether the request succeeded (from the server or cache) or failed.
 */
const loadCollection = async (
  collectionName: string,
  updateActionCreator: ActionCreator<any>,
  postprocess = doc => doc
): Promise<FetchStatus> => {
  try {
    const querySnapshot = await db.collection(collectionName).get();
    const docs = {};
    querySnapshot.forEach(doc => {
      docs[doc.id] = postprocess(doc.data());
    });
    store.dispatch(updateActionCreator(docs));
    return querySnapshot.metadata.fromCache
      ? FetchStatus.SuccessFromCache
      : FetchStatus.SuccessFromServer;
  } catch (err) {
    console.log('[loadInitialState] Fetch FAILURE:', err);
    return FetchStatus.Failure;
  }
};

/**
 * Loads the initial state from Cloud Firestore and stores it into Redux.
 *
 * Currently, this includes:
 * - Lessons (TODO change to Playlists!!!!! pls)
 * - Resources
 *
 * @returns A FetchStatus value indicating whether the request succeeded (from the server or cache) or failed.
 * IMPORTANT: Since we're loading multiple things here, this is the most pessimistic value – e.g. if all
 * but one of the requests succeeds, we still have to consider it a failure.
 */
export const loadInitialState = async (): Promise<FetchStatus> => {
  const loadedResources: FetchStatus = await loadCollection('resources', refreshResources, resource => {
    return {
      ...resource,
      tags: resource.tags.map(tag => tag.id)
    }
  });

  // Lessons should not be loaded unless resources were loaded successfully
  // (otherwise they might refer to resource IDs that don't exist locally)
  const loadedLessons: FetchStatus =
    loadedResources === FetchStatus.Failure
      ? FetchStatus.Failure
      : await loadCollection('lessons', refreshLessons, lesson => {
          // Convert resource IDs on each lesson to their string representations
          // before storing in Redux.
          return {
            ...lesson,
            resourceIDs: lesson.resourceIDs.map(resourceID => resourceID.id)
          };
        });

  const loadedTopics: FetchStatus = await loadCollection(
    'topics',
    refreshTopics
  );

  // Overall status is the *most pessimistic possible status* from all of the attempted requests.
  // For example, if 4 requests succeeded from server but 1 was retrieved from cache, overallStatus is "SuccessFromCache".
  // If even one of the requests failed, overallStatus is "Failure".

  const statusNums: number[] = [
    loadedResources,
    loadedLessons,
    loadedTopics
  ].map(status => fetchStatusToNum[status]);
  const overallStatus: FetchStatus = numToFetchStatus[Math.min(...statusNums)];

  store.dispatch(onFetchResult(overallStatus));

  console.log(`Loaded resources: ${loadedResources}`);
  console.log(`Loaded lessons: ${loadedLessons}`);
  console.log(`Loaded topics: ${loadedTopics}`);
  console.log(`Overall fetch status: ${overallStatus}`);

  return overallStatus;
};