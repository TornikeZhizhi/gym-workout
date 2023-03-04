import {createBrowserRouter , RouterProvider} from "react-router-dom";
import './App.css';
import HeaderTogglerContext from "./Contexts/HeaderTogglerContext";
import Root from "./PageRoot/Root";
import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";
import About from "./Pages/About";
import Prices from "./Pages/Prices";
import TrainersInner from "./Pages/TrainersInner";
import ModalContext from "./Contexts/ModalContext";





const router = createBrowserRouter([
  {path:"/",
    element:<Root/>,
    // errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/trainers", element: <Trainers/>},
      {path:"/trainers/:id", element: <TrainersInner/>},
      {path:"/about-us", element: <About/>},
      {path:"/prices", element: <Prices/>},
  
    ]
  }
  
])


function App() {
  return (

    <ModalContext>
      <HeaderTogglerContext>
        <RouterProvider router={router}/>
      </HeaderTogglerContext>   
    </ModalContext>
  );
}

export default App;
