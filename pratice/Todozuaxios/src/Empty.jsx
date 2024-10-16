import React from 'react'
import emptysvg from "./assets/empty.svg";


const Empty = () => {
  return (
    <>
      <div className="empty-stage py-5 hidden last:flex justify-center flex-col items-center gap-3">
      <img width={100} src={emptysvg}  />
      <p>There is no List</p>
    </div>
    </>
  );
}

export default Empty