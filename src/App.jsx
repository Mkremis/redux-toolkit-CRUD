import TasksList from './components/TasksList';
import TasksForm from './components/TasksForm';
import { Toaster } from "sonner";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
 <div className='bg-zinc-900 h-screen text-white'> 
   <Toaster richColors />
 
    <BrowserRouter>
   <div className='flex items-center justify-center h-full'>
    <Routes>
      <Route path='/' element={ <TasksList />}/>
      <Route path='/create-task' element={ <TasksForm />}/>
      <Route path='/edit-task/:id' element={ <TasksForm />}/>
    </Routes>  
     </div> 
  </BrowserRouter>
 
  
  </div>

  );
}

export default App;
