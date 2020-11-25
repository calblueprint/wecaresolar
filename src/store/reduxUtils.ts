import { merge } from 'lodash';

export const refreshValues = (state, newVals, defaultFields={}) => {
  /**
   * Refreshes the values in a specified slice of the Redux store by deep merging
   * the old state (`state`) and the new one (`newVals`). This means any entries that
   * didn't exist previously get added, and entries that already existed get updated
   * (but not completely overwritten).
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
        ...defaultFields,
      }
    }
    else {
      state[id] = merge(state[id], data);
    }
  }
}
