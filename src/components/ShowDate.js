import React from 'react';

function ShowDate() {
  const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  return (
    <span>{getCurrentDate()}</span>
  );
}

export default ShowDate;
