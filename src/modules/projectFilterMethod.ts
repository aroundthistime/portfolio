import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const PROJECT_FILTER_METHODS = ['all', 'personal', 'team'];

export type ProjectFilterMethodType = typeof PROJECT_FILTER_METHODS[number];

const filterMethodSlice = createSlice({
  name: 'projectFilterMethod',
  initialState: 'all',
  reducers: {
    changeFilterMethod(state, action: PayloadAction<ProjectFilterMethodType>) {
      return action.payload;
    },
  },
});

export const {changeFilterMethod} = filterMethodSlice.actions;

export default filterMethodSlice.reducer;
