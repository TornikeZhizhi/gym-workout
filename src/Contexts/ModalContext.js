
import React, {Component, createContext, useEffect, useState} from "react";

export const ModalTheme = createContext();

const ModalContext = (props)=> {

  
 const [modalToggler, setModalToggler] = useState(false);



 const menuToglerHandler = (val)=>{
    setModalToggler(val)
 }






return(
    <ModalTheme.Provider value={{
        menuToglerHandler:menuToglerHandler,
        modalToggler:modalToggler
        }}>
        {props.children}
    </ModalTheme.Provider>
    )
    
}
export default ModalContext;