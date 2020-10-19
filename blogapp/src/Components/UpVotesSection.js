
import React from 'react';

const UpVotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/UpdateVoteDataByName/${articleName}`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    };
    return (
        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}>Add Upvote</button>
            <p>This post has been upvoted {upvotes} times</p>
        </div>
    );
}

export default UpVotesSection;