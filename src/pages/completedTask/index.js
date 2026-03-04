import React, {useContext} from 'react';
import { TaskContext } from '../../context/taskContext';
import { ModalContext } from '../../context/modalContext';
import TaskCard from '../../components/taskCard';
import { Box } from './style';


function CompletedTask() {
  const { completedTask } = useContext(TaskContext)

  const {handleTaskToEdit} = useContext(ModalContext)

  function onEdit(data){
    handleTaskToEdit(data)
  }

  return (
     <Box>
      {
       completedTask?.length 
       ?completedTask?.map((value)=><TaskCard task={value} onEdit={onEdit}/>)
       :<Box>No Task</Box>
      }
     </Box>
  );
}

export default CompletedTask;
