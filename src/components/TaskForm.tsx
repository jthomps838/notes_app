import React, { useState, useEffect } from "react";
import { Task } from "../types/task";

interface TaskFormProps {
  task?: Task;
  onSave: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  task = {
    id: "",
    title: "",
    description: "",
    dueDate: "",
    isComplete: false,
  },
  onSave,
}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
  }, [task.title, task.description, task.dueDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...task,
      title,
      description,
      dueDate,
    });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form
      className='min-w-full mx-auto px-8 pt-6 pb-8 mt-8'
      onSubmit={handleSubmit}
    >
      <div className='mb-4'>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700'
        >
          Title
        </label>
        <input
          id='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter title'
          required
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='description'
          className='block text-sm font-medium text-gray-700'
        >
          Description
        </label>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter description'
          required
          rows={4}
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='dueDate'
          className='block text-sm font-medium text-gray-700'
        >
          Due Date
        </label>
        <input
          id='dueDate'
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      <div className='flex justify-end'>
        <button
          type='submit'
          className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
