import { Route,Routes } from "react-router-dom";
import Home from "../Home";
import Categories from "../../Categories/Categories";
import Orders from "../../Orders/orders";
import Products from "../../Products/Products";
function CustomeRouters(){
    return(
    <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/categories" element={<Categories></Categories>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        
    </Routes>
    );
}

export default CustomeRouters;