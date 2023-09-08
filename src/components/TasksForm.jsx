import { useState } from 'react';
import { addTask } from '../features/tasks/taskSlice';
import { useDispatch } from 'react-redux';

const TasksForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        name="title"
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TasksForm;
