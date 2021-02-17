import React from "react";

const Rate = ({ rating, setSearchRate }) => {
  const satrs = (a) => {
    let staysarray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= a) {
        staysarray.push(<span onClick={() => setSearchRate(i)}>⭐ </span>);
      } else {
        staysarray.push(<span onClick={() => setSearchRate(i)}>✰</span>);
      }
    }
    return staysarray;
  };

  return <div>{satrs(rating)}</div>;
};

export default Rate;
