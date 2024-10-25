import { Button, Table } from "flowbite-react"; // Importing necessary components
import React, { useRef } from "react";
import { Toast } from "primereact/toast"; // Import PrimeReact Toast
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import Swal from "sweetalert2"; // SweetAlert for confirmation dialog

const List = ({ item, removeItem, handlequantity }) => {
  const toast = useRef(null); // Creating a ref for the Toast

  const delbtnhandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item.id);
      }
    });
  };

  const addbtnhandler = () => {
    handlequantity(item.id, 1);
  };

  const minusbtnhandler = () => {
    if (item.quantity > 1) {
      handlequantity(item.id, -1);
    } else {
      // Use PrimeReact's toast to show the error
      toast.current.show({
        severity: "error", // Type of message
        // summary: "Error", // Title
        detail: "Quantity must be greater than 1", // Message detail
        life: 1300, // Duration (milliseconds)
        position: "bottom-left", // Position
         style: {
          color: "red", // Text color
          backgroundColor: "white", // Background color (optional)
        },
      
      });
    }
  };

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {item.product.title}
        </Table.Cell>
        <Table.Cell className="text-end">${item.product.price}</Table.Cell>
        <Table.Cell className="text-end">
          <div className="flex justify-end items-center gap-2">
            <Toast ref={toast} /> {/* Render the Toast component here */}
            <Button onClick={minusbtnhandler} size="xs" color="gray">
              -
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={addbtnhandler} size="xs" color="gray">
              +
            </Button>
          </div>
        </Table.Cell>
        <Table.Cell className="text-end">${item.cost}</Table.Cell>
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
};

// Ensure that this export statement is at the top level
export default List;
