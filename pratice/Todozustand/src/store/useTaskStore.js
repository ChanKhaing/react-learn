import { create } from "zustand";


const useTaskStore = create((set) => {
    return {
      tasks: [
        {
          id: 1,
          job: "focus on your code",
          isDone: false,
        },
        {
          id: 2,
          job: "reduce your time to use phone",
          isDone: true,
        },
        {
          id: 3,
          job: "Finish project report",
          isDone: false,
        },
      ],
      deletetask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((el) => el.id != id) })),
      createtask: (newtask) =>
        set((state) => ({ tasks: [...state.tasks, newtask] })),
      edittask: (id, editjob) =>    set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id == id
              ? { ...task, job: editjob  }
              : task
          ),
        })),
      //       edittask: (id, editjob) => set((state) => ({
      //   tasks: state.tasks.map((task) =>
      //     task.id === id
      //       ? { ...task, job: editjob } // Properly update the task job
      //       : task // Return unchanged task
      //   ),
      // }))
      //   edittask : (id,editjob) => set((state) => ({tasks: state.tasks.map((el) => el.id === id ? )}) )
    }; 
})

export default useTaskStore