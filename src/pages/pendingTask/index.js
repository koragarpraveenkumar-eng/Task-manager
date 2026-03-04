import React,{useContext} from 'react';
import { TaskContext } from '../../context/taskContext';
import TaskCard from '../../components/taskCard';
// import SummaryCard from '../../components/summaryCard'
import { ModalContext } from '../../context/modalContext';

function PendingTask() {
  const { pendingTask } = useContext(TaskContext)

  const {handleTaskToEdit} = useContext(ModalContext)

  function onEdit(data){
    handleTaskToEdit(data)
  }

  return (
     <div>
      {
       pendingTask?.length 
       ?pendingTask?.map((value)=><TaskCard task={value} onEdit={onEdit}/>)
       :<div>No Task</div>
      }
     </div>
  );
}

export default PendingTask;
