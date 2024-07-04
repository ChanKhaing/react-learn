// import React, { useEffect, useState } from 'react'

// const Content = () => {

//  const [count, setCount] = useState(0);
//         console.log("update", count);

//     useEffect(() => {
//         //Effect body 
//         const fetchapi = async () => {
//             const req = await fetch("https://jsonplaceholder.typicode.com/todos/1"  );

//             const data = await req.json();
//             console.log(data);
        
//         }
//         fetchapi();


//         console.log("Effect body mount")
//         // console.log(`update ${count}`)
        
//         //
//         return () => {
//             console.log("Effect body unmounted");
//         }
        
//     },[count])

//   return (
//     <>
//       <div className="p-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold mb-2">Visible Content</h2>
//         <p>This content can be hidden or shown by clicking the button above.</p>

//         <div className="flex items-center">
//           <button
//             onClick={() => setCount(count - 1)}
//             className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
//           >
//             -
//           </button>
//           <span className="mx-4 text-2xl">{count}</span>
//           <button
//             onClick={() => setCount(count + 1)}
//             className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Content