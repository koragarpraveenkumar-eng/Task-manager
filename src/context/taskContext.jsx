import React, { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export default function TaskContextProvider({ children }) {
  const [completedTask, setCompletedTask] = useState([])
  const [pendingTask, setPendingTask] = useState([]);
  const [progressingTask, setProgressing] = useState([]);
  const [allTask, setAllTask] = useState([])

  useEffect(()=>{
    setAllTask(()=>[...completedTask, ...pendingTask, ...progressingTask])
  },[completedTask,pendingTask,progressingTask])
  
  const values = {
    completedTask,
    pendingTask,
    progressingTask,
    allTask,
    handleAddTask,
    deleteTask,
    handleUpdateTask
  };

  function handleAddTask(task){
    const data = {
      id: (Math.random()),
      ...task
    }

    switch(task.status){
      case 'Pending': setPendingTask((prev)=>[...prev, data]);
      return;
      case 'Completed': setCompletedTask((prev)=>[...prev, data]);
      return;
      case 'In Progress': setProgressing((prev)=>[...prev, data]);
      return;
      default : return
    }
  }

  function deleteTask(data){
    switch(data.status){
      case 'Pending' : setPendingTask(prev=>remove(data.id, prev));
      break;
      case 'In Progress' : setProgressing((prev)=>remove(data.id, prev));
      break;
      case 'Completed' : setCompletedTask((prev)=>remove(data.id, prev))
    }
  }

  function handleUpdateTask(editToTask, formData){
    if(editToTask.status === formData.status){
      switch(editToTask.status){
        case 'Pending' : setPendingTask(prev=>prev.map((value)=>{
          if(value.id == editToTask.id){
            return {
              ...value.id,
              ...formData
            }
          }
        }));
        break;
        case 'In Progress' : setProgressing(prev=>prev.map((value)=>{
          if(value.id == editToTask.id){
            return {
              ...value.id,
              ...formData
            }
          }
        }));
        break;
        case 'Completed' : setCompletedTask(prev=>prev.map((value)=>{
          if(value.id == editToTask.id){
            return {
              ...value.id,
              ...formData
            }
          }
        }));
      }
    }else{
      handleAddTask(formData)
      deleteTask(editToTask)
    }

  }

  function remove(id, array){
    return array.filter((value)=> value.id != id)
  }
  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
}