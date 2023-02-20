
import React, {Component, createContext, useEffect, useState} from "react";

export const HeaderTogglerTheme = createContext();

const HeaderTogglerContext = (props)=> {

  
 const [menuToggler, setMenuToggler] = useState(false);



 const menuToglerHandler = ()=>{
    setMenuToggler(!menuToggler)

 }
 useEffect(() => {

    document.body.classList.toggle('overflow', menuToggler);
  },[menuToggler])


return(
    <HeaderTogglerTheme.Provider value={{
        menuToggler:menuToggler,
        menuToglerHandler:menuToglerHandler
        }}>
        {props.children}
    </HeaderTogglerTheme.Provider>
    )
    
}
export default HeaderTogglerContext;