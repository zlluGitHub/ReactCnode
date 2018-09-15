import { GET_TOPICS, CHANGE_PAGE } from '../constants/actionTypes';
const initialState = [];
const topics = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return action.topics
    case CHANGE_PAGE:
      return action.topics
    default:
      return state
  }
}
export default topics
