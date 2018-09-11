import { USER_DATA ,GET_USERDATA} from '../constants/actionTypes'
const userData = (state = { status: false }, action) => {
  // console.log(action.userData);

  switch (action.type) {
    case USER_DATA:
      return action.userData
    case GET_USERDATA:
      return action.userData
    default:
      return state
  }
}
export default userData
