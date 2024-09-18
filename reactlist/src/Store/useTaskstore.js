import { create } from 'zustand';
const useTaskstore = create((set) => ({
  tasks: [
    { id: 1, task: "Complete JavaScript assignment", isDone: false },
    { id: 2, task: "Prepare for meeting with client", isDone: false },
    { id: 3, task: "Update project documentation", isDone: true },
    { id: 4, task: "Review code for new feature", isDone: false },
    { id: 5, task: "Plan team-building activity", isDone: true },
    ],
    addTask: () => set((state) => ({ tasks: [...state.tasks] })),
    removeTask: () => {}
}));

export default useTaskstore;