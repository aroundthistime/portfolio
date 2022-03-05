import {combineReducers} from '@reduxjs/toolkit';
import projectFilterMethod from './projectFilterMethod';

const rootReducer = combineReducers({
  projectFilterMethod,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
