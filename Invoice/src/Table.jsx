import React from 'react'

const Table = () => {
  return (
    <div className=' mt-10'>
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        Quantity
      </th>
      <th scope="col" className="px-6 py-3 text-end">
        Cost
      </th>
      <th scope="col" className="px-6 py-3">
        <span className="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
  <tbody id="rowGroup">
    <tr className="bg-white hidden last:table-row border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" colSpan={6} className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
        There is no record
      </th>
    </tr>
  </tbody>
  <tfoot>
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" colSpan={4} className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
        Total
      </th>
      <td className="px-6 py-4 text-end">
        $ <span id="recordTotal">0</span>
      </td>
      <td />
    </tr>
  </tfoot>
</table>

    </div>
  );
}

export default Table