import { Button, Table } from "flowbite-react";

// import { HiMiniMinus } from 'react-icons/hi2';
// import { HiMiniPlus } from 'react-icons/hi2';

import React, { useRef } from 'react';
import { Toast } from 'primereact/toast'; // Import PrimeReact Toast
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons



import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const notify = () => toast("Here is your toast.");

// const App = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>
//   );
// };

const List = ({ item, removeItem, handlequantity }) => {

  const toast = useRef(null);

  const delbtnhandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item.id);
      }
    });
    // if (confirm("Are u sure to delete")) { removeItem(item.id); }
  };

  //  const handlequantity = (id, amount) => {
  //    items.map((item) => {
  //      if (item.id == id) {
  //        const newquantity = item.quantity + amount;
  //        return { ...item, quantity: newquantity };
  //      }
  //      return item;
  //    });
  //  };

  const addbtnhandler = () => {
    handlequantity(item.id, 1);
  };

  const minusbtnhandler = () => {
    if (item.quantity > 1) {
      handlequantity(item.id, -1);
    }
    else {
      // Use PrimeReact's toast to show the error
      toast.current.show({
        severity: 'error', // Type of message
        summary: 'Error', // Title
        detail: 'Quantity must be greater than 1', // Message detail
        life: 1300, // Duration (milliseconds)
        position: 'bottom-left' // Position
      })
      // else {
      //   toast.error("Quantity must be greater than 1", {
      //     duration: 1300,
      //     position: "bottom-left",
      //     reverseOrder: false,
      //   });
      // }
    };

    //  const handleQuantitySub = () => {
    //    if (item.quantity > 1) {
    //      updateItemQuantity(item.id, -1);
    //    } else {
    //      toast.error("Quantity must grater than 1", {
    //        duration: 1000,
    //        position: "bottom-left",
    //      });
    //    }
    //  };

    // const notify = () => toast("Here is your toast.");

    // console.log("u click del btn")

    return (
      <>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whcitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.product.title}
          </Table.Cell>
          <Table.Cell className=" text-end"> ${item.product.price}</Table.Cell>

          <Table.Cell className=" text-end">
            <div className=" flex justify-end items-center gap-2">
              <Button onClick={minusbtnhandler} size="xs" color="gray">
                {/* <HiMiniMinus/> */} -
                {/* <Toaster /> */}
              <Toast ref={toast} />
              </Button>
              <span>{item.quantity}</span>
              <Button onClick={addbtnhandler} size="xs" color="gray">
                {/* <HiMiniPlus /> */} +
              </Button>
            </div>
          </Table.Cell>
          <Table.Cell className=" text-end">${item.cost}</Table.Cell>
          <Table.Cell>
            <Button
              onClick={delbtnhandler}
              color="gray"
              className="font-medium text-cyan-600 active:scale-90 duration-1000 dark:text-cyan-500"
            >
              Remove
            </Button>
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
};

export default List;
