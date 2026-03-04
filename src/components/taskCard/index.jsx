import React, {useContext} from 'react';
import { ActionButton, ButtonGroup, Card, DateWrapper, Description, DueDate, Footer, Header, OverdueText, StatusBadge, Title } from './style';
import { TaskContext } from '../../context/taskContext';

// Component
const TaskCard = ({ task, onEdit }) => {
    const { deleteTask} = useContext(TaskContext)
  
    const isOverdue =
      new Date(task.dueDate) < new Date() &&
      task.status !== 'Completed';
  
    return (
      <Card>
        <Header>
          <Title>{task.title}</Title>
          <StatusBadge status={task.status}>
            {task.status}
          </StatusBadge>
        </Header>
  
        <Description>{task.description}</Description>
  
        <Footer>
          <DateWrapper>
            <DueDate overdue={isOverdue}>
              📅 {task.dueDate}
            </DueDate>
            {isOverdue && <OverdueText>Overdue!</OverdueText>}
          </DateWrapper>
  
          <ButtonGroup>
            <ActionButton variant="edit" onClick={() => onEdit(task)}>
              Edit
            </ActionButton>
            <ActionButton variant="delete" 
            onClick={() => deleteTask(task)}
            >
              Delete
            </ActionButton>
          </ButtonGroup>
        </Footer>
      </Card>
    );
  };
  
  export default TaskCard;