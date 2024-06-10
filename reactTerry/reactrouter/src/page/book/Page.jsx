import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {

          const data = useParams();
          console.log(data);
    return (

        <div>Page { data.id }</div>
  )
}

export default Page