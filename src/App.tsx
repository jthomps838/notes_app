import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Task } from "./types/task";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
    setEditingTask(null);
  };

  const editTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <div className='min-w-full mx-auto'>
      <h1 className='text-4xl font-bold mb-8'>Task Tracker</h1>
      {editingTask ? (
        <TaskForm task={editingTask} onSave={editTask} />
      ) : (
        <TaskForm onSave={addTask} />
      )}
      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
