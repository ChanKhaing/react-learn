import { create } from "zustand";



const useCounterStore = create((set) => {
  return {
    count: 10,
   resetCount : () => set({count:0}),
    // increaseCount: function (amount) {
    //   return set(function (state) {
    //     return {
    //       count : state.count + amount
    //     }
    //   })
    // },
    increaseCount: (amount) => set((state) => ({ count: state.count + amount })),
    decreaseCount: () => set((state) => ({count: state.count -5}) )
    
  }
  
})

export default useCounterStore