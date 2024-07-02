import React from "react";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
