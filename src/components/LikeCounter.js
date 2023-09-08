import React, { useState } from 'react';

function LikeCounter() {
  const [likes, setLikes] = useState(50);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLikeClick = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <div>
      <button onClick={handleLikeClick} disabled={hasLiked}>
        Like
      </button>
      <p>{likes} likes</p>
    </div>
  );
}

export default LikeCounter;
