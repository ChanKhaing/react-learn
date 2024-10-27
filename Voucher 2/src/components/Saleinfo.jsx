import React from 'react'
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import useStore from '../store/userecordStore';
import SaleForm from './SaleForm';
import VoucherTable from './VoucherTable';

const Saleinfo = () => {
  
    const fetcher = (url) => fetch(url).then((res) => res.json());
         const { addRecord, records } = useStore();

   const {
     register,
     handleSubmit,
       watch,
     reset,
     formState: { errors },
   } = useForm();
    
    const addproduct = (data) => {
       const currentProduct = JSON.parse(data.product);
       const currentProductId = currentProduct.id;
      
        console.log(currentProduct);
        console.log(currentProductId);
                 addRecord({
                   id: Date.now(),
                   product: currentProduct,
                   quantity: data.quantity,
                   cost: currentProduct.price * data.quantity,
                   created_at: new Date().toISOString(),
                 });
          
        
    //    const isExited = records.find(
    //      ({ product: { id } }) => currentProductId === id
    //    );
    //    // console.log(isExited);
    //    if (isExited) {
    //      changeQuantity(isExited.id, data.quantity);
    //    } else {
    //     //  add record 
    //    }

        reset();
        
    }
    const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}/products`, fetcher);



    function generateInvoiceNumber() {
      const prefix = "INV-";
      const date = new Date();

      // Format date as YYYYMMDD
      const formattedDate = date.toISOString().split("T")[0].replace(/-/g, "");

      // Generate a random number (e.g., between 10000 and 99999)
      const randomNum = Math.floor(10000 + Math.random() * 90000);

      return `${prefix}${formattedDate}-${randomNum}`;
    }

    // Usage
    // const invoiceNumber = generateInvoiceNumber();
    // console.log(invoiceNumber);


    

  return (
    <div className=" grid grid-cols-4 gap-5">
      <div className=" bg-white p-5 rounded-lg border mb-5 col-span-3 ">
        <SaleForm />
        <VoucherTable />
      </div>

      {/* voucher info  */}
      {/* <div className="col-span-1">
        <div className="grid grid-cols-1 gap-5 mb-10">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Voucher ID
            </label>
            <input
              type="text"
              name="voucher_id"
              className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="INV-20241025-16520"
            />
          </div>

          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Customer Name
            </label>
            <input
              type="text"
              name="customer_name"
              className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Customer Email
            </label>
            <input
              type="text"
              name="customer_email"
              className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sale Date
            </label>
            <input
              type="date"
              name="sale_date"
              className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="2024-10-25"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Saleinfo;