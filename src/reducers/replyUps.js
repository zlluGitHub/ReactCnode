import { REPLY_UPS_ID } from '../constants/actionTypes';
const initialState = {
  success: false,
};
const replyAction = (state = initialState, action) => {
  switch (action.type) {
    case REPLY_UPS_ID:
      return { ...state, ...action.replyAction }
    default:
      return state
  }
}
export default replyAction;
