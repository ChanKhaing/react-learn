import React, { useEffect, useState } from 'react'


const Content = (props) => {
       const [count, setCount] = useState(0);

       const increment = () => setCount(count + 1);
       const decrement = () => setCount(count - 1);
    //    const reset = () => setCount(0);
    console.log(count, "mount");


    useEffect(() => {
        // effect body 
        // console.log("Countmounted")
        // fetch("https://fakestoreapi.com/products/1")
        //   .then((res) => res.json())
      //   .then((json) => console.log(json));
      
      // fetch("https://fakestoreapi.com/products/1")
      //   .then((res) => res.json())
      //   .then( (json) => {
      //     console.log(json);
      //   })


      // const fetch = async function getData() {
      //   return Promise.resolve('data');
      // }
      
      // async function getMoreData(data) {
      //   return Promise.resolve(data + 'more data');
      // }
      
      // async function getAll() {
      //   const data = await getData();
      //   const moreData = await getMoreData(data);
      //   return `All the data: ${data}, ${moreData}`;
      // }
      
      // getAll().then((all) => {
      //   console.log('all the data')
      // })


      fetchdata();
        
        // clean up function 
      return () => {
        console.log("unmounted",count)
      }
    }, [count])

const fetchdata = async () => {
  const res = await fetch("https://fakestoreapi.com/products/1");
  const json = await res.json();
  console.log(json);
};
    
  return (
    <div>
      <div className="p-4 bg-gray-200 border border-gray-300 rounded">
              <p>This is the content to show and hide.</p>

              {/* counter  */}

               <h1 className="text-2xl font-bold text-center">{count}</h1>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={decrement}
            disabled={count === 0}
          >
            Decrement
                  </button>
                  </div>
              
      </div>
    </div>
  );
}

export default Content