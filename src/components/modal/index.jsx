import React, { useContext, useEffect } from 'react'
import { Box, ModalContainer, ModalSubContainer } from './style'
import { ModalContext } from '../../context/modalContext'
import TaskForm from '../taskForm'

function Modal() {

    const { open, handleModalOpen, taskToEdit } = useContext(ModalContext)

    const display = open ? 'block' : 'none'
    useEffect(() => {
        console.log('----display---->', display, open)
    }, [open])

    function handleClose(e) {
        e?.stopPropagation()
        handleModalOpen()
    }

    return (
        <ModalContainer display={display} onClick={handleClose}>
            <Box customProps={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ModalSubContainer
                    onClick={(e) => e.stopPropagation()}
                >
                    <TaskForm taskToEdit={taskToEdit} onClose={handleClose}></TaskForm>
                </ModalSubContainer>
            </Box>
        </ModalContainer>
    )
}

export default Modal