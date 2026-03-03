import React, { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export default function TaskContextProvider({ children }) {
  const [completedTask, setCompletedTask] = useState([])
  const [pendingTask, setPendingTask] = useState([]);
  const [processingTask, setProcessing] = useState([]);
  const [allTask, setAllTask] = useState([])

  useEffect(()=>{
    setAllTask(()=>[...completedTask, ...pendingTask, ...processingTask])
  },[completedTask,pendingTask,processingTask])
  
  const values = {
    completedTask,
    pendingTask,
    processingTask,
    allTask,
    handleAddTask
  };

  function handleAddTask(type, task){
    const data = {
      id: (Math.random()),
      ...task
    }

    switch(type){
      case 'Pending': setPendingTask((prev)=>[...prev, data]);
      return;
      case 'Completed': setCompletedTask((prev)=>[...prev, data]);
      return;
      case 'In Progress': setProcessing((prev)=>[...prev, data]);
      return;
      default : return
    }
  }
  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
}