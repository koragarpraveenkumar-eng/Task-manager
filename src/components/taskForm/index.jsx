// src/components/TaskForm.jsx
import { useState, useEffect, useContext } from 'react';
import {
  ActionsRow,
  ErrorText,
  FieldControl,
  FieldLabel,
  FieldRow,
  Form,
  Label,
  PrimaryButton,
  SecondaryButton,
  Select,
  TextArea,
  TextInput,
} from './style';
import { TaskContext } from '../../context/taskContext';
import {ModalContext} from '../../context/modalContext'

const TaskForm = ({ taskToEdit, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'Pending',
        dueDate: '',
    });
    const [errors, setErrors] = useState({});
    
    const {handleAddTask, handleUpdateTask} = useContext(TaskContext)
    const {clearTaskToEdit } = useContext(ModalContext)

  useEffect(() => {
    if (taskToEdit) {
      setFormData(taskToEdit);
    }
  }, [taskToEdit]);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const clearFormData = () =>{
    setFormData({
        title: '',
        description: '',
        status: 'Pending',
        dueDate: '',
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    if (taskToEdit) {
        handleUpdateTask(taskToEdit, formData);
        clearTaskToEdit()
    } else {
        console.log('------>', formData)
        handleAddTask(formData);
    }
    clearFormData()
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldRow>
        <FieldLabel>
          Title *
        </FieldLabel>
        <FieldControl>
        <TextInput
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          hasError={Boolean(errors.title)}
          placeholder="Enter task title"
        />
        </FieldControl>
      </FieldRow>
        {errors.title && <ErrorText>{errors.title}</ErrorText>}

      <FieldRow>
        <FieldLabel>
          Description
        </FieldLabel>
        <FieldControl>
        <TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          placeholder="Enter task description"
        />
        </FieldControl>
      </FieldRow>

      <FieldRow>
        <FieldLabel>
          Status
        </FieldLabel>
        <FieldControl>
        <Select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        </FieldControl>
      </FieldRow>


      <FieldRow>
        <FieldLabel>
          Due Date *
        </FieldLabel>
        <FieldControl>
        <TextInput
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          hasError={Boolean(errors.dueDate)}
        />
        </FieldControl>
      </FieldRow>
        {errors.dueDate && <ErrorText>{errors.dueDate}</ErrorText>}

      <ActionsRow>
        <SecondaryButton
          type="button"
          onClick={onClose}
        >
          Cancel
        </SecondaryButton>
        <PrimaryButton
          type="submit"
        >
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </PrimaryButton>
      </ActionsRow>
    </Form>
  );
};

export default TaskForm;