import React from 'react';

function Loading({ show, children }) {
  return (
    <div>
      {show ? children : "Loading..."}
    </div>
  );
}

export default Loading;
