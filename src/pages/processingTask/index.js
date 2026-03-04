import React, {useContext} from 'react';
import { TaskContext } from '../../context/taskContext';
import { ModalContext } from '../../context/modalContext';
import TaskCard from '../../components/taskCard';

function ProcessingTask() {
  const { progressingTask } = useContext(TaskContext)

  const {handleTaskToEdit} = useContext(ModalContext)

  function onEdit(data){
    handleTaskToEdit(data)
  }

  return (
     <div>
      {
       progressingTask?.length 
       ?progressingTask?.map((value)=><TaskCard task={value} onEdit={onEdit}/>)
       :<div>No Task</div>
      }
     </div>
  );
}

export default ProcessingTask;
