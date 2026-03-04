import React, {useContext, useEffect, useState} from 'react';
import { TaskContext } from '../../context/taskContext';
import TaskCard from '../../components/taskCard';
import SummaryCard from '../../components/summaryCard'
import Button from '../../components/button'
import { ModalContext } from '../../context/modalContext';
import {ResponsiveGrid, StyledSelect, FilterContainer} from './style'
import { buttonStyle } from '../../constants/styleConstants'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function AllTask() {
const [task, setTask] = useState([])
const [statusFilter, setStatusFilter] = useState('')
const [sortByDate, setSortByDate] = useState('asc')

const {allTask, completedTask, pendingTask, progressingTask} = useContext(TaskContext)
const {handleTaskToEdit} = useContext(ModalContext)

useEffect(()=>{
  setTask(()=>allTask.filter((value)=>value.status.includes(statusFilter))
  .sort((a,b)=>{
    if(sortByDate == 'desc'){
      return new Date(b.dueDate) - new Date(a.dueDate)
    }else{
     return new Date(a.dueDate) - new Date(b.dueDate)
    }
  }))
}, [allTask, statusFilter, sortByDate])


  function onEdit(data){
    handleTaskToEdit(data)
  }

  function handleSort(){
    setSortByDate((prev)=> prev == 'asc' ? 'desc' : 'asc')
  }

  return (
    <div>
      <ResponsiveGrid>
          <SummaryCard title={'Total'} count={allTask.length || 0}/>
          <SummaryCard title={'Pending'} count={pendingTask.length || 0}/>
          <SummaryCard title={'Progressing'} count={progressingTask.length || 0}/>
          <SummaryCard title={'Completed'} count={completedTask.length || 0}/>
      </ResponsiveGrid>
      <FilterContainer>
        <StyledSelect id="status" name="status" onChange={(e)=>setStatusFilter(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </StyledSelect>
        <Button 
        onClick={handleSort} 
        customProps={{...buttonStyle, padding:'12px', display:'flex'}} 
        disabled={!task.length}
        >
        Sort by date {sortByDate == 'asc' ? <ArrowDownwardIcon/> :<ArrowUpwardIcon/>}
          </Button>
      </FilterContainer>
      <div style={{marginTop:"10px", 
        display:'flex',
        flexDirection:'column',
        gap:'10px'
      }}>
        {
       task?.length 
       ?task?.map((value)=><TaskCard 
          task={value} 
          onEdit={onEdit} 
          // customProps={{marginTop:'8px'}}
       />)
       :<div>No Task</div>
      }
      </div>
      </div>
  );
}

export default AllTask;
