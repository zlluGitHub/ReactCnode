import { USER_DATA ,} from '../constants/actionTypes'
const userData = (state = { status: false }, action) => {
  // console.log(action.userData);

  switch (action.type) {
    case USER_DATA:
      return action.userData
    default:
      return state
  }
}
export default userData
