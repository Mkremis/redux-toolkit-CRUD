import { useEffect, useState } from 'react';
import { addTask, updateTask } from '../features/tasks/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


const TasksForm = () => {
  const {id} = useParams()
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const [checked, setChecked] =useState(false);

  useEffect(()=>{
    if(id) {
     const currentTask = tasks.find(task=>task.id === id)
     setTask({...currentTask})
     setChecked(currentTask.completed)
    }
  },[id, tasks])

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    id ?dispatch(updateTask({...task, completed:checked})) :dispatch(addTask({...task, completed:checked})) ;
    navigate('/')
  };
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className='block text-xs font-bold mb-2'>Task:</label>
      <input type="text" placeholder="Task Title" name="title" id='title' value={task.title} onChange={handleChange} className="w-full p-2 rounded-md bg-zinc-600 mb-2"/>
      <label htmlFor="description" className='block text-xs font-bold mb-2'>Description:</label>
      <textarea name="description" placeholder="Task Description" id='description' value={task.description} onChange={handleChange} className="w-full p-2 rounded-md bg-zinc-600 mb-2"/>
      <label htmlFor='completed' className='flex text-xs font-bold items-center gap-x-3 mb-2'>Completed: 
      <input type="checkbox" name='completed' id='completed' checked={checked} onChange={()=>setChecked(!checked)}/>
      </label>
      <button type="submit" className='bg-indigo-600 px-4 py-1 rounded-sm'>Save</button>
    </form>
  );
};

export default TasksForm;
