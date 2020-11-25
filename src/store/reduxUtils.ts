import { merge } from 'lodash';

export const updateValues = (state, newVals, defaultFields={}) => {
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
