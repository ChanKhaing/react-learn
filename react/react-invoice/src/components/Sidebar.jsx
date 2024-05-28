// import React, { useContext } from "react";
// import { DrawerCon } from "../context/DrawerContext";
// import MainHeading from "./MainHeading";
// import SubHeading from "./SubHeading";
// import { Button } from "flowbite-react";
// import CreateProductForm from "./CreateProductForm";

// const Sidebar = ({ products }) => {
//   const { sidebar, sidebarhandler } = useContext(DrawerCon);
//   return (
//     <div
//       className={`top-0 fixed right-0 w-[350px] bg-slate-300 h-screen duration-500 ${
//         !sidebar && "translate-x-full"
//       }`}
//     >
//       <div className="flex justify-between p-3 mb-5">
//         <div>
//           <MainHeading>Your Product</MainHeading>
//           <SubHeading>Manage Product</SubHeading>
//         </div>
//         <Button
//           size="sm"
//           color="gray"
//           onClick={sidebarhandler}
//           className="  px-2 flex justify-center items-center active:scale-90 "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className=" size-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18 18 6M6 6l12 12"
//             />
//           </svg>
//         </Button>
//       </div>
//       {/* <div key={id} className=" flex justify-between items-center border p-3 mb-3 rounded">
// //             <p>
// //               {title} <span className=" font-mono">({stock})</span>
// //             </p>
// //             <p className=" font-mono">{price}</p>
// //           </div> */}
//       <div>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="flex justify-between bg-slate-400 item-center border p-3 mb-5"
//           >
//             <p>
//               {" "}
//               {product.title} ({product.stock})
//             </p>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </div>
//       <CreateProductForm />
//     </div>
//   );
// };

// export default Sidebar;

// //   <div key={id} className=" flex justify-between items-center border p-3 mb-3 rounded">
// // //             <p>
// // //               {title} <span className=" font-mono">({stock})</span>
// // //             </p>
// // //             <p className=" font-mono">{price}</p>
// // //           </div>
