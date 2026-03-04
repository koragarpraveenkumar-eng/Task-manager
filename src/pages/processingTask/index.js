import React, {useContext} from 'react';
import { TaskContext } from '../../context/taskContext';
import { ModalContext } from '../../context/modalContext';
import TaskCard from '../../components/taskCard';
import { Box, CompletedTaskContainer } from './style';

function ProcessingTask() {
  const { progressingTask } = useContext(TaskContext)

  const {handleTaskToEdit} = useContext(ModalContext)

  function onEdit(data){
    handleTaskToEdit(data)
  }

  return (
     <CompletedTaskContainer>
      {
       progressingTask?.length 
       ?progressingTask?.map((value)=><TaskCard task={value} onEdit={onEdit}/>)
       :<Box>No Task</Box>
      }
     </CompletedTaskContainer>
  );
}

export default ProcessingTask;
