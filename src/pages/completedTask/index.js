import React, {useContext} from 'react';
import { TaskContext } from '../../context/taskContext';
import { ModalContext } from '../../context/modalContext';
import TaskCard from '../../components/taskCard';


function CompletedTask() {
  const { completedTask } = useContext(TaskContext)

  const {handleTaskToEdit} = useContext(ModalContext)

  function onEdit(data){
    handleTaskToEdit(data)
  }

  return (
     <div>
      {
       completedTask?.length 
       ?completedTask?.map((value)=><TaskCard task={value} onEdit={onEdit}/>)
       :<div>No Task</div>
      }
     </div>
  );
}

export default CompletedTask;
