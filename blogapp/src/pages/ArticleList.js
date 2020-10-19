
import React from 'react';
import articleList from '../ArticleContent';
import ArticleListResuable from '../Components/ArticleListResuable';

const ArticleList=()=>(
   <React.Fragment>
   <div>
     <ArticleListResuable articles={articleList}></ArticleListResuable>
   </div>
   </React.Fragment>
);

export default  ArticleList;