import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlice';
import {toast} from 'sonner'

const notification = store=>next=>action=>{
  next(action)
  const { type, payload } = action;
  toast.message(`${type} : ${payload}`)
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware:[notification]
});
