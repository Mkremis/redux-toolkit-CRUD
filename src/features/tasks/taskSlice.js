import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 description',
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { payload } = action;
      const id = crypto.randomUUID();
      return [...state, { id, ...payload }];
      // state.push(payload);
    },
    deleteTask: (state, action) => {
        const updatedState = state.filter((task)=>task.id !== action.payload)
        return updatedState
    },
     updateTask: (state, action) => {
      const { id, title, description, completed } = action.payload;
      const foundTask = state.find(task=>task.id === id)
      if(foundTask){
        foundTask.title = title;
        foundTask.description = description;
        foundTask.completed = completed;
      }
      
    },
  },

  
});

export default taskSlice.reducer;

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
