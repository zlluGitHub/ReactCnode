import { GET_ARTICLE } from '../constants/actionTypes'
const article = (state = {}, action) => {
    switch (action.type) {
        case GET_ARTICLE:
            return action.getCollectArticle
        default:
            return state
    }
}
export default article
