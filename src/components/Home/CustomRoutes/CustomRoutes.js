import { Route,Routes } from "react-router-dom";
import Home from "../Home";
import Categories from "../../Categories/Categories";
import Orders from "../../Orders/orders";
import Products from "../../Products/Products";
import Seller from "../../Seller/Seller";
import Distributer from "../../Distributer/Distributer";
import Customer from "../../Customer/Customer";
import InsertCategories from "../../Inserts/InsertCategories";
import InsertSeller from "../../Inserts/InsertSeller";
import InsertDistributer from "../../Inserts/InsertDistributer";
import InsertCustomer from "../../Inserts/InsertCustomer";
import InsertProduct from "../../Inserts/InsertProduct";
import InsertOrder from "../../Inserts/InsertOrder";
function CustomeRouters(){
    return(
    <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/categories" element={<Categories></Categories>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/seller" element={<Seller></Seller>}></Route>
        <Route path="/distributer" element={<Distributer></Distributer>}></Route>
        <Route path="/customer" element={<Customer></Customer>}></Route>
        <Route path="/insertcategories" element={<InsertCategories></InsertCategories>}></Route>
        <Route path="/insertseller" element={<InsertSeller></InsertSeller>}></Route>
        <Route path="/insertdistributer" element={<InsertDistributer></InsertDistributer>}></Route>
        <Route path="/insertcustomer" element={<InsertCustomer></InsertCustomer>}></Route>
        <Route path="/insertproduct" element={<InsertProduct></InsertProduct>}></Route>
        <Route path="/insertorder" element={<InsertOrder></InsertOrder>}></Route>
    </Routes>
    );
}

export default CustomeRouters;