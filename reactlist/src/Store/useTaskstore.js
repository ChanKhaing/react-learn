import { create } from 'zustand';
const useTaskstore = create((set) => ({
  tasks: [
    { id: 1, task: "Complete JavaScript assignment", isDone: false },
    { id: 2, task: "Prepare for meeting with client", isDone: false },
    { id: 3, task: "Update project documentation", isDone: true },
    { id: 4, task: "Review code for new feature", isDone: false },
    { id: 5, task: "Plan team-building activity", isDone: true },
  ],
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  removeTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((el) => el.id !== id) })),
   doneTask: (id) => set((state) => ({
    tasks: state.tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))}))
  
}));

export default useTaskstore;