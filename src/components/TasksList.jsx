import { useSelector } from 'react-redux';
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Title,
  Badge,
} from '@tremor/react';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log('TaskList', tasks);
  return (
    <Card>
      <div className="flex">
        <Title>TODO LIST</Title>
        <Badge color="blue" className="ml-1">
          {tasks.length}
        </Badge>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Completed</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.length > 0 &&
            tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.completed}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TasksList;
