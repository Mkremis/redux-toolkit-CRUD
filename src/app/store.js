import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice';
import {toast} from 'sonner'

const notification = store=>next=>action=>{
  next(action)
  const tasks = store.getState().tasks
  localStorage.setItem('tasks', JSON.stringify(tasks))
  const { type, payload } = action;
  const message = type === 'tasks/deleteTask' ?payload :payload.title;
  toast.message(`${type} : ${message}`)
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware:[notification]
});
