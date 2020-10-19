
import React from 'react';
import {Link} from 'react-router-dom';

const ArticleListResuable=({articles})=>(
   <React.Fragment>
   <div>
       <h1>Articles</h1>
      {articles.map((article,key)=>
      (
          <Link className="article-list-item" key={key} to={`/ArticlePage/${article.name}`}>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0,150)}...</p>
          </Link>
      ))}
   </div>
   </React.Fragment>
);

export default  ArticleListResuable;