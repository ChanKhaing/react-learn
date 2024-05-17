import React from 'react'

const Heading = (props) => {
  return (
    <div>
          <h1 className="text-3xl font-bold mb-5 font-heading">{props.text}</h1>
    </div>
  );
}

export default Heading