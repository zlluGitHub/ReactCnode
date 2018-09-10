import React, { Component } from 'react';
import './article.css';
import MomentComponent from '../TopicList/MomentComponent';
import ArticleComment from '../ArticleCommet/ArticleComment';
class Article extends Component {
    componentDidMount = () => {
        const { match, getArticle } = this.props;
        getArticle(match.params.id);
    };
    collectArticle = event => {
        const value = event.target.value;

        const { collectArticle, article, cancleCollectArticle } = this.props;
        if (article.is_collect) {
            cancleCollectArticle(article.id)
        } else {
            if (sessionStorage.token) {
                collectArticle(article.id);
                event.target.value = value === "收藏" ? "取消收藏" : "收藏";
            } else {
                alert("请登录后收藏！")
            }
        }
    }
    render() {

        const { replyAction, article, replyUps ,addReply} = this.props
        
        const articleContent = article !== {} ? (
            <div>
                <div className="topic_header">
                    <span className="topic_full_title">
                        <span className="put_top">置顶</span>
                        {article.title}
                    </span>

                    <div className="titlebot">
                        <ul>
                            <li>发布于<MomentComponent time={article.create_at} /></li>
                            <li>作者{article.author ? article.author.loginname : "未知"}</li>
                            <li>{article.visit_count}次浏览</li>
                            <li>最后一次编辑是<MomentComponent time={article.last_reply_at} /></li>
                            <li>来自{article.tab === "share" ? "分享" : "问答"}</li>
                        </ul>
                        <input className="collect_btn" type="submit" onClick={this.collectArticle} value={article.is_collect ? "取消收藏" : "收藏"} />
                    </div>
                </div>
                <div className="articlecontent" dangerouslySetInnerHTML={{
                    __html: article.content
                }} />
                <ArticleComment replies={article.replies} articleId={article.id} replyUps={replyUps} replyAction={replyAction} addReply={addReply}/>
            </div>
        ) : (
                <div>努力加载中,请稍后。。。</div>
            )
        return (
            <div className="articlePanel">

                {articleContent}
            </div>
        );
    }
}

export default Article;