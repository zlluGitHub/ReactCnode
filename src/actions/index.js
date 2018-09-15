import axios from 'axios'
import { GET_TOPICS, CHANGE_TAB, CHANGE_PAGE, GET_ARTICLE_ID, USER_DATA, GET_ARTICLE, REPLY_UPS_ID,ADD_REPLY ,ADD_TOPICS,GET_USERDATA} from '../constants/actionTypes'
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
export const getUserTopics = loginname => dispatch => {
  const uri = `${URI}/user/${loginname}`;
  axios.get(uri).then(res => {  
    dispatch({
      type: GET_USERDATA,
      userData: { userData: res.data.data, status: true }
    })
  });
}
export const addTopics = (title,tab,content) => dispatch => {
  const uri = `${URI}/topics`;
  axios.post(uri, { accesstoken: sessionStorage.token, title: title,tab:tab,content:content }).then(res => {
    dispatch({
      type: ADD_TOPICS,
      addTopic: res.data
    })
  });
}
export const cancleCollectArticle = articleId => dispatch => {
  const uri = `${URI}/topic_collect/de_collect`;
  axios.post(uri, { accesstoken: sessionStorage.token, topic_id: articleId }).then(res => {
    dispatch({
      type: GET_ARTICLE_ID,
      collectArticleId: res.data
    })
  });
}

export const replyUps = reliyUpsId => dispatch => {
  const uri = `${URI}/reply/${reliyUpsId}/ups`;
  sessionStorage.token?
  axios.post(uri, { accesstoken: sessionStorage.token }).then(res => {
    dispatch({
      type: REPLY_UPS_ID,
      replyAction: res.data
    })
  }):alert("请登录后点赞！")
}
export const addReply = (content,replyId) => dispatch => {
  const uri = `${URI}/topic/${replyId}/replies`;
  sessionStorage.token?
  axios.post(uri, { accesstoken: sessionStorage.token ,content:content,reply_id:replyId}).then(res => {
    console.log(res);
    dispatch({
      type: ADD_REPLY,
      replyAction: res.data
    })
  }):alert("请登录后评论！");
};