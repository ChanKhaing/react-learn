// eslint-disable-next-line no-unused-vars
import React from 'react'
import emptySvg from "./assets/empty.svg";


const EmptyList = () => {
  return (
    <div className="empty-stage py-5 hidden last:flex justify-center flex-col items-center gap-3">
      <img width={100} src={emptySvg} />
      <p>There is no List</p>
    </div>
  );
}

export default EmptyList