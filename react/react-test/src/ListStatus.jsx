// eslint-disable-next-line no-unused-vars
import React from 'react'

const ListStatus = () => {
  return (
    <div className="flex justify-between items-center mb-5">
      <p className="font-heading">Your Lists</p>
      <p className="bg-zinc-700 text-zinc-50 text-xs px-3 py-2 rounded-full">
        Done (<span id="doneCount">0</span>/<span id="totalCount">0</span>)
      </p>
    </div>
  );
}

export default ListStatus