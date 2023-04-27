
// import Header from "./components/Header/Header";
// import User from "./components/User/User";
// import Social from "./components/Social/Social";
// import Description from "./components/Description/Description";
// import Galary from "./components/Galary/Galary";
// import Collected from "./components/Collected/Collected";
// // import { BrowserRouter, Route } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import {router} from "./pages/router"
import Creator from "./pages/Creator";
import  Searc  from "./pages/Searc";
import { Routes,Route } from "react-router-dom";

const App = () => {

  return ( 
      <div>
        <Routes>
          <Route path="/" element={<Creator/>}/>
          <Route path="/search" element ={<Searc/>}/>
        </Routes>
        
    </div>

   );
}
 
export default App;

