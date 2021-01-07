import { combineReducers } from 'redux';
import contents from './contents';

const rootReducer = combineReducers({
  contents,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;