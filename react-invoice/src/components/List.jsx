import { Button, Table } from 'flowbite-react';
import React from 'react'
import { HiMiniMinus } from 'react-icons/hi2';
import { HiMiniPlus } from 'react-icons/hi2';

const List = ({item}) => {
  return (
      <>
          
          
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.product.title}
              </Table.Cell>
              <Table.Cell className=" text-end">{ item.product.price }</Table.Cell>

              <Table.Cell className=" text-end">
                <div className=" flex justify-end items-center gap-2">
                                  <Button size="xs" color="gray">
                                      <HiMiniMinus/>
                  </Button>
                      <span>{item.quantity}</span>
                  <Button size="xs" color="gray">
                    <HiMiniPlus />
                  </Button>
                </div>
              </Table.Cell>
              <Table.Cell className=" text-end">{ item.cost }</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
    </>
  );

}

export default List