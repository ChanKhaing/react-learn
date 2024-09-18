import { create } from 'zustand'
// import useCounterstore from './useCounterstore';

// const useCounterstore = create(function (set) {
//     return {
//         count: 3,
//         resetCount: function () {
//             return set({ count: 0 })
//         },
//         increaseCount: function () { 
//             return set(function (state) {
//                 return {count: state.count + 1}
//             })
//         },
//         decreaseCount: function () {
//             return set(function (state) {
//                 return {count: state.count -1 }
//             })
//         }
//     }
    
//     }
// );

const useCounter = create((set) => ({
  count: 5,
  resetCount: (amout) => set({ count: amout }),
  addCount: () => set((state) => ({ count: state.count + 1}) ),
  // decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));
export default useCounter