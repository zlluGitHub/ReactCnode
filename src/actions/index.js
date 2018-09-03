import axios from 'axios'
import { GET_TOPICS, CHANGE_TAB, CHANGE_PAGE, GET_ARTICLE_ID, USER_DATA, GET_ARTICLE, REPLY_UPS_ID } from '../constants/actionTypes'
import { URI, TOKEN } from '../constants/url'

export const getTopics = tab => dispatch => {
  const uri = tab ? `${URI}/topics/?tab=${tab}` : `${URI}/topics`
  axios.get(uri).then(res => {
    dispatch({
      type: GET_TOPICS,
      topics: res.data.data
    })
  });
}
export const changeTab = tab => ({
  type: CHANGE_TAB,
  tab
})
export const changePages = (tab, pageNumber) => dispatch => {
  const uri = pageNumber !== 1 ? `${URI}/topics/?tab=${tab}&page=${pageNumber}` : `${URI}/topics`;
  axios.get(uri).then(res => {
    dispatch({
      type: CHANGE_PAGE,
      topics: res.data.data
    });
  });

}
export const getUserData = (login) => dispatch => {
  if (login === 'login') {
    axios.post(`${URI}/accesstoken`, { accesstoken: TOKEN }).then(res => {
      console.log(res);

      dispatch({
        type: USER_DATA,
        userData: { userData: res.data, status: true }
      });
      sessionStorage.token = TOKEN;
    });
  } else {
    dispatch({
      type: USER_DATA,
      userData: { userData: null, status: false }
    });
    sessionStorage.removeItem('token')
  }
}
// export const getArticle = articleId => dispatch => {
//   const uri = articleId ? `${URI}/topic/${articleId}` : `${URI}/topic`
//   axios.get(uri).then(res => {

//     dispatch({
//       type: GET_ARTICLE,
//       article: res.data.data
//     })
//   });
// }

export const getArticle = articleId => dispatch => {
  const uri = `${URI}/topic/${articleId}?accesstoken=${sessionStorage.token}`;
  axios.get(uri).then(res => {
    dispatch({
      type: GET_ARTICLE,
      getCollectArticle: res.data.data
    })
  });
}
export const collectArticle = articleId => dispatch => {
  const uri = `${URI}/topic_collect/collect`;
  axios.post(uri, { accesstoken: sessionStorage.token, topic_id: articleId }).then(res => {
    dispatch({
      type: GET_ARTICLE_ID,
      collectArticleId: res.data
    })
  });
}
export const cancleCollectArticle = articleId => dispatch => {
  const uri = `${URI}/topic_collect/de_collect`;
  axios.post(uri, { accesstoken: sessionStorage.token, topic_id: articleId }).then(res => {
    console.log(res);

    dispatch({
      type: GET_ARTICLE_ID,
      collectArticleId: res.data
    })
  });
}

export const replyUps = reliyUpsId => dispatch => {
  const uri = `${URI}/reply/${reliyUpsId}/ups`;
  axios.post(uri, { accesstoken: sessionStorage.token }).then(res => {
    console.log(res.data);

    dispatch({
      type: REPLY_UPS_ID,
      replyAction: res.data
    })
  });
}