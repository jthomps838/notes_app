import React from "react";
import { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <div className='border rounded-lg p-4 mb-4'>
      <h3 className='text-lg font-semibold mb-2'>{task.title}</h3>
      <p className='text-gray-700 mb-2'>{task.description}</p>
      <p className='text-gray-600 mb-2'>Due Date: {task.dueDate}</p>
      <div className='flex space-x-2 justify-center'>
        <button
          onClick={() => onEdit(task)}
          className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Delete
        </button>
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`${
            task.isComplete
              ? "bg-gray-400 hover:bg-gray-600"
              : "bg-green-500 hover:bg-green-700"
          } text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          {task.isComplete ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
