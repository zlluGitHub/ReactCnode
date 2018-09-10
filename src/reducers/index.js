import tab from './tab';
import topics from './topics';
import userData from './userData';
import article from './article';
import replyAction from './replyUps';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  tab,
  topics,
  userData,
  article,
  replyAction
});
export default rootReducer