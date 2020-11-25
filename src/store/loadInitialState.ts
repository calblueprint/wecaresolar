import { db } from '../index';
import store from './reducers';
import { refreshResources } from './resourcesSlice';
import { refreshLessons } from './lessonsSlice';
import { onFetchResult } from './metadataSlice';
import { ActionCreator } from 'redux';

export enum FetchStatus {
  SuccessFromServer = 0,
  SuccessFromCache,
  Failure,
}

const loadCollection = async (
  collectionName: string,
  updateActionCreator: ActionCreator<any>,
  postprocess=(doc) => doc,
): Promise<FetchStatus> => {
  try {
    const querySnapshot = await db.collection(collectionName).get();
    const docs = {};
    querySnapshot.forEach(doc => {
      console.log(doc.id, "=>", doc.data());
      docs[doc.id] = postprocess(doc.data());
    });
    store.dispatch(updateActionCreator(docs));
    return querySnapshot.metadata.fromCache ? FetchStatus.SuccessFromCache : FetchStatus.SuccessFromServer;
  } catch (err) {
    console.log("[loadInitialState] Fetch FAILURE:", err);
    return FetchStatus.Failure;
  }
};

export const loadInitialState = async () => {
  const loadedResources: FetchStatus = await loadCollection("resources", refreshResources);

  // Lessons should not be loaded unless resources were loaded successfully
  // (otherwise they might refer to resource IDs that don't exist locally)
  const loadedLessons: FetchStatus = (loadedResources === FetchStatus.Failure ? FetchStatus.Failure :
    await loadCollection("lessons", refreshLessons, (lesson) => {
      // Convert resource IDs on each lesson to their string representations
      // before storing in Redux.
      return {
        ...lesson,
        resourceIDs: lesson.resourceIDs.map(resourceID => resourceID.id),
      }
    }));

  // Overall status is the *most pessimistic possible status* from all of the attempted requests.
  // For example, if 4 requests succeeded from server but 1 was retrieved from cache, overallStatus is "SuccessFromCache".
  // If even one of the requests failed, overallStatus is "Failure".
  const overallStatus: FetchStatus = Math.min(loadedResources, loadedLessons)
  store.dispatch(onFetchResult(overallStatus));

  console.log(`Loaded resources: ${loadedResources}`);
  console.log(`Loaded lessons: ${loadedLessons}`);
  console.log(`Overall fetch status: ${overallStatus}`);
};
