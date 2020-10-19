
import React from 'react';


const CommentList=({ContentList})=>
{
    return(
    <>
    <h3>Comments:</h3>
      {ContentList.map((data,key)=>(
            <div className="comment" key={key}>
            <h4>{data.username}</h4>
            <p>{data.text}</p>
            </div>
      ))}
    </>
    );
};


export default CommentList;