import { create } from "zustand";


 const useStore = create((set) => ({
   records: [],
   addRecord: (record) => {
     set((state) => ({ records: [...state.records, record] }));
   },
 }));

 export default useStore