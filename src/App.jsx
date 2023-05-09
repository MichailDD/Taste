
import Creator from "./pages/Creator";
import  Searc  from "./pages/Searc";
import Artwork from "./pages/Artwork";
import { Routes,Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {

  return ( 
      <div>
        <Routes>
          <Route path="/" element={<Creator/>}/>
          <Route path="/search" element ={<Searc/>}/>
          <Route path="/artwork" element ={<Artwork/>}/>
          <Route path="/main" element ={<MainPage/>}/>
        </Routes>
        
    </div>

   );
}
 
export default App;

