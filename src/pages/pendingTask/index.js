import React,{useContext} from 'react';
import { TaskContext } from '../../context/taskContext';
import TaskCard from '../../components/taskCard';
import { ModalContext } from '../../context/modalContext';
import { Box, PendingTaskcontainer } from './style';

function PendingTask() {
  const { pendingTask } = useContext(TaskContext)

  const {handleTaskToEdit} = useContext(ModalContext)

  function onEdit(data){
    handleTaskToEdit(data)
  }

  return (
     <PendingTaskcontainer>
      {
       pendingTask?.length 
       ?pendingTask?.map((value)=><TaskCard task={value} onEdit={onEdit}/>)
       :<Box>No Task</Box>
      }
     </PendingTaskcontainer>
  );
}

export default PendingTask;
