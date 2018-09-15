import { ADD_REPLY ,ADD_TOPICS} from '../constants/actionTypes';
const initialState = {
  success: false,
};
const replyState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPLY:
      return { ...state, ...action.replyAction }
    case ADD_TOPICS:
    return { ...state, ...action.addTopic }
    default:
      return state
  }
}
export default replyState;
