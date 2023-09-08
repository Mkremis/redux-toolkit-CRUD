import { useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const TasksList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks);
  const handleDelete =(id)=>dispatch(deleteTask(id))

  return ( 
    <section>
       <header className='mb-3'>
    <nav className='flex justify-between items-center p-3 text-2xl font-bold'>
      <div>
         <Link to='/'>Taks List</Link>
      </div>
    <div>
         <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>Create Task</Link>
      </div>
    </nav>
  </header>
      <h2>TODO LIST - <span>{tasks.length}</span></h2> 

      <div className='grid grid-cols-3 gap-4'>
         {tasks.length > 0 &&
            tasks.map((task) => (
              <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
                <header className='flex justify-between gap-x-10'>
                  <h3>{task.title}</h3>
                  <div className='flex gap-x-3'>
                      <Link to={`/edit-task/${task.id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>Edit</Link>
                  <button onClick={()=>handleDelete(task.id)} className='bg-red-500 px-2 py-1 text-xs rounded-md'>Delete</button>
                  </div>
                </header>
                
                <p>{task.description}</p>
                <p>{task.completed ?'Yes' :'No'}</p>
                 
   </div>))}
      </div>

      
    </section>
  );
};

export default TasksList;
