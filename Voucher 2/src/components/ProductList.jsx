import React from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiMiniTrash,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import ProductEmpty from "./ProductEmpty";
import useSWR from "swr";
import ProductSkeleton from "./ProductSkeleton";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";


const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductList = () => {

    const length = 6;
  const numbers = Array.from({ length }, (_, index) => index + 1);
  
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}/products`, fetcher);

  console.log(import.meta.env.VITE_API_URL);

  return (
    <div>
      <div className=" flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div className="">
          <Link to="/product/add" className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add new Product
            <HiPlus />
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <ProductEmpty />
            {isLoading ?           
              numbers.map((el) => <ProductSkeleton key={el} />) :
              data.length === 0 ? <ProductEmpty /> :
              data.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))
            }
          

            {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
              <td colSpan={5} className="px-6 py-4 text-center">
                There is no Product
              </td>
            </tr> */}

            {/* Skeleton Loader */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
