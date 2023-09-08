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
    deleteTask: (state, action) => {},
  },
});

export default taskSlice.reducer;

export const { addTask } = taskSlice.actions;
