import React, { Component } from 'react';
import './ArticleComment.css';
import { Link } from 'react-router-dom';
import MomentComponent from '../TopicList/MomentComponent';
import EditorComponent from '../EditorComponent/EditorComponent';
class ArticleComment extends Component {
    state = {
        replyId: 1,
        upsNum: 0
    }
    componentDidMount = () => {
        const {getArticle,articleId ,replyState} = this.props; 
        console.log("1111111111");
        
        if(replyState.success){
            if(articleId){   
                getArticle(articleId);
            }
        }    
    };
    onReplyUps = (reliyUpsId) => {
        this.props.replyUps(reliyUpsId);
        const { replies, replyAction } = this.props;
        const found = replies.find(function (element) {
            return element.id === reliyUpsId;
        });
        const { ups, is_uped } = found;
        if(sessionStorage.token){
            const upsNum = is_uped ? ups.length - 1 : replyAction.action === "up" ? ups.length : ups.length + 1;
            this.setState({
                replyId: reliyUpsId,
                upsNum: upsNum
            });
        };
        
    };
    render() {
        const { replies ,addReply,getArticle,articleId,replyState} = this.props; 
        if(replyState.success){
            if(articleId){   
                getArticle(articleId);
            };
        };    
        const { replyId, upsNum } = this.state;
        const showReplies = replies ? replies.map((data, index) => <li key={data.id}>
            <div className="reply_item">
                <Link to="/"><img src={data.author ? data.author.avatar_url : ""} alt={data.author ? data.author.loginname : "未知"} /></Link>
                <div className="author">
                    <div className="user_info">
                        <Link to="/">{data.author ? data.author.loginname : "未知"}</Link>
                        <Link to="/">{`${index}楼•`}
                            <MomentComponent time={data.create_at} /></Link>
                    </div>
                    <div className="user_active">
                        <i className={data.ups.length > 0 ? "active" : ""} onClick={() => this.onReplyUps(data.id)}></i>
                        <span>{data.id === replyId ? upsNum : data.ups.length}</span>
                        <i></i>
                    </div>
                </div>
            </div>
            <div className="articlecontent" dangerouslySetInnerHTML={{
                __html: data.content
            }} />
        </li>
        ) : (
            <div>
                评论内容为空！
            </div>
            )
        return (
            <div >
                <div className="reply"></div>
                <div className="panel">
                    <div className="header">
                        <span><strong>{replies ? replies.length : 0}</strong> 回复</span>
                    </div>
                    <ul>
                        {showReplies}
                    </ul>
                </div>
                <div className="reply"></div>
                <div className="panel">
                    <div className="header">
                        <span>添加回复</span>
                    </div>
                    <EditorComponent replyState={replyState} getArticle={getArticle} addReply={addReply} articleId={articleId}/>
                </div>

            </div>
        );
    }
}

export default ArticleComment;