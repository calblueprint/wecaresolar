import { merge } from 'lodash';

export const refreshValues = (state, newVals, defaultFields = {}) => {
  /**
   * Refreshes the values in a specified slice of the Redux store by updating
   * the old state (`state`) with the new one (`newVals`). This means any entries that
   * didn't exist previously get added, any entries that already existed get updated
   * (but not completely overwritten), and any entries that don't exist on `newVals` get removed.
   *
   * THIS FUNCTION SHOULD ONLY BE CALLED INSIDE OF `createSlice`!!!
   * It mutates `state` directly, which only works if Immer is enabled because we
   * typically don't want to mutate the Redux store ourselves.
   *
   * @param state         - The slice of the Redux store to update
   * @param newVals       - The new values to add/update in `state`
   * @param defaultFields - (Optional) Default fields to add to any new entry before putting it in state
   */
  for (const [id, data] of Object.entries<object>(newVals)) {
    if (!(id in state)) {
      state[id] = {
        ...data,
        ...defaultFields
      };
    } else {
      state[id] = merge(state[id], data);
    }
  }

  for (const id of Object.keys(state)) {
    if (!(id in newVals)) {
      delete state[id];
    }
  }
};
