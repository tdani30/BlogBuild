
import React,{useState,useEffect} from 'react';
import articles from '../ArticleContent';
import articleList from '../ArticleContent';
import ArticleListResuable from '../Components/ArticleListResuable';
import CommentList from '../Components/CommentList';
import CommentsSection from '../Components/CommentsSection';
import UpVotesSection from '../Components/UpVotesSection';
import NotFoundPage from './NotFoundPage';

const ArticlePage=({match})=>{

    const name=match.params.name;
    const article=articles.find(t=>t.name==name);
   const [articleInfo,setArticleInfo]=useState({upvotes:0,content:[]});

   useEffect(()=>
   {
    fetch(`/GetDataByName/${name}`)
    .then((response) => {
     return response.json();
    })
    .then((json) => {
        setArticleInfo(json);
    });
   },[name]);

    if(!article) return <NotFoundPage></NotFoundPage>

    var otherArticles=articleList.filter(t=>t.name!==name);
    return (
   <React.Fragment>
   <div>
    <h1>{article.title}</h1>
   <UpVotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}></UpVotesSection>
    {article.content.map((para,key)=>
    (
    <p key={key}>{para}</p>
    ))}
   </div>
   <CommentList ContentList={articleInfo.content}></CommentList>
   <CommentsSection articleName={name} setArticleInfo={setArticleInfo}></CommentsSection>
  <h2>Other Articles</h2>
  <ArticleListResuable articles={otherArticles}></ArticleListResuable>
   </React.Fragment>
    );
};

export default  ArticlePage;