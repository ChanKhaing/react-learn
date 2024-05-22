import React from 'react'

const App = () => {
  return (
      <>
          <div>App Invoice Test</div>
         <div className="flex gap-3 border rounded-lg p-5">
  <div className="basis-5/12">
    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a product</label>
    <select id="productSelect" name="productSelect" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"><option value={1}>apple</option><option value={2}>orange</option><option value={3}>Mango</option><option value={4}>Banana</option></select>
  </div>
  <div className="basis-5/12">
    <label htmlFor="inputQuantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
    <input type="number" id="inputQuantity" name="inputQuantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <button type="submit" className="text-white bg-blue-700 basis-2/12 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    Buy
  </button>
</div>

      </>
      
  )
}

export default App