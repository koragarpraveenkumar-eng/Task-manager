import React, {createContext, useState} from 'react'

export const ModalContext = createContext()

export default function ModalProvider({children}){
    const [open, setOpen] = useState(false)
    let values = {
        open,
        handleModalOpen:handleModalOpen
    }
    function handleModalOpen(){
        setOpen((prev)=>!prev)
    }
return(
    <ModalContext.Provider value={values}>
        {children}
    </ModalContext.Provider>
)
}