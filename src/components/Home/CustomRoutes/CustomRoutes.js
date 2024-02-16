import { Route,Routes } from "react-router-dom";
import Home from "../Home";
import Categories from "../../Categories/Categories";
function CustomeRouters(){
    return(
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="categories" element={<Categories></Categories>}></Route>
        
    </Routes>
    );
}

export default CustomeRouters;