import React, {createContext, useState} from 'react'

export const ModalContext = createContext()

export default function ModalProvider({children}){
    const [open, setOpen] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState(null)
    let values = {
        open,
        handleModalOpen:handleModalOpen,
        taskToEdit,
        handleTaskToEdit,
        clearTaskToEdit
    }
    function handleModalOpen(){
        console.log('----->')
        setOpen((prev)=>!prev)
    }
    function handleTaskToEdit(data){
        setTaskToEdit(data)
        handleModalOpen()
    }
    
    function clearTaskToEdit(){
        setTaskToEdit(null)
    }
return(
    <ModalContext.Provider value={values}>
        {children}
    </ModalContext.Provider>
)
}