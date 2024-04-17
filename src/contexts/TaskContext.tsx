import { format } from "date-fns";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { ITask } from "../types/Task";

interface TaskContextType {
  tasks: ITask[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
  editTask: (id: string, title: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (title: string) => {
    const newTask: ITask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      completed: false,
      date: format(new Date(), "dd/MM/yy"),
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id: string, title: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleTaskCompletion, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks precisa ser usado dentro do TaskProvider");
  }
  return context;
};
