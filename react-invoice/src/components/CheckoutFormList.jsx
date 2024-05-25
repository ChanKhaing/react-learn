import React from "react";
import { Table, Button } from "flowbite-react";
import Container from "./Container";
import List from "./List";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";

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
            {
              items.length == 0 ? 
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell colSpan={5} className=" text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 There is no Item record
              </Table.Cell>
                </Table.Row> :
                items.map((item) => <List key={item.id} item={item} />)
            }

          </Table.Body>
        </Table>
      </div>
    </Container>
  );
};

export default CheckoutFormList;
