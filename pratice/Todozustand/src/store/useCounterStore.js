import { create } from "zustand";


const useCounterStore = create(
  //     function (set)
  // {
  //     return {
  //         count: 15,
  //         resetcount: function () { return set({ count: 0 }) },
  //         addcount: function (amount) {
  //             return set(function (state) {
  //                 return {
  //                     count: state.count + amount
  //                 }
  //             })
  //         },
  //         // subcount: function () {
  //         //     return set(function (state) {
  //         //         return { count: state.count - 1  }
  //         //     })
  //         // }

  //         subcount: function () {
  //             return set(function (state) {
  //                 return {
  //                     count: state.count - 2
  //                 }
  //             })
  //         }

  //   }
  // }
  (set) => ({
    count: 5,
  

    resetcount: () => set({ count: 0 }),
        addcount: () => set((state) => ({ count: state.count + 4 })),
      subcount : () => set((state) => ({ count : state.count -2}) )
  })
);  

export default useCounterStore