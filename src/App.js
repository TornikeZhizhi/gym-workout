import {createBrowserRouter , RouterProvider} from "react-router-dom";
import './App.css';
import "./App.scss";
import HeaderTogglerContext from "./Contexts/HeaderTogglerContext";
import Root from "./PageRoot/Root";
import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";





const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
    // errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/trainers", element: <Trainers/>},
  
    ]
  }
  
])


function App() {
  return (
      <HeaderTogglerContext>
        <RouterProvider router={router}/>
      </HeaderTogglerContext>   
  );
}

export default App;
