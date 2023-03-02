
import React, {Component, createContext, useEffect, useState} from "react";

export const HeaderTogglerTheme = createContext();

const HeaderTogglerContext = (props)=> {

  
 const [menuToggler, setMenuToggler] = useState(false);



 const menuToglerHandler = ()=>{
    setMenuToggler(!menuToggler)
 }


 const menuClose = ()=>{
  setMenuToggler(false)
 }

 useEffect(() => {

    document.body.classList.toggle('overflow', menuToggler);
  },[menuToggler])


return(
    <HeaderTogglerTheme.Provider value={{
        menuToggler:menuToggler,
        menuToglerHandler:menuToglerHandler,
        menuClose:menuClose
        }}>
        {props.children}
    </HeaderTogglerTheme.Provider>
    )
    
}
export default HeaderTogglerContext;