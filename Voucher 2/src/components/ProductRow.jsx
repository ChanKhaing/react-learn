import React from 'react'
import {
  HiMiniTrash,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import ShowDate from './ShowDate';
import { useSWRConfig } from 'swr';
import ProductSkeleton from './ProductSkeleton';

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
    const { mutate } = useSWRConfig();
    const deletebtn = async () => {
        await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, { method: 'DELETE' });
        mutate(`${import.meta.env.VITE_API_URL}/products`);
    }
    // console.log(product);
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">{id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
        > 
          {product_name}
        </th>
              <td className="px-6 py-4 text-end">{price}</td>
        <td className="px-6 py-4 text-end">
          <ShowDate timestamp={created_at}/>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlinePencil />
            </button>

                      <button
                          onClick={deletebtn}
              type="button"
              className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlineTrash />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ProductRow