import React from "react";
import { Table, Button } from "flowbite-react";
import Container from "./Container";
import List from "./List";
// import { HiMiniPlus } from "react-icons/hi2";
// import { HiMiniMinus } from "react-icons/hi2";

const CheckoutFormList = ({ items }) => {
  return (
    <Container>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell className=" text-end">Price</Table.HeadCell>
            <Table.HeadCell className=" text-end">Quantity</Table.HeadCell>
            <Table.HeadCell className=" text-end">Cost</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {items.map((item) => (
            <List
              // updateItemQuantity={updateItemQuantity}
              // removeItem={removeItem}
              key={item.id}
              item={item}
            />
          ))}

            {items.length === 0 && (
              <Table.Row>
                <Table.Cell
                  colSpan={5}
                  className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center"
                >
                  There is no record
                </Table.Cell>
              </Table.Row>)}
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
};

export default CheckoutFormList;
