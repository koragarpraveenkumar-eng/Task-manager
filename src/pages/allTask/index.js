import React, {useContext, useEffect} from 'react';
import { TaskContext } from '../../context/taskContext';

function AllTask() {
const {allTask} = useContext(TaskContext)

useEffect(()=>{
  console.log('-----allTask--->', allTask)
}, [allTask])

  return (
    <div>
      {
       allTask?.length ? allTask?.map((value)=><div>{value?.title}</div>): <div>No Task</div>
      }
      </div>
  );
}

export default AllTask;
