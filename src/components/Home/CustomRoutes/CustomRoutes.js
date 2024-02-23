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
import UpdateProduct from "../../Update/UpdateProducts";
import UpdateCategories from "../../Update/UpdateCategories";
import UpdateSeller from "../../Update/UpdateSeller";
import UpdateDistributer from "../../Update/UpdateDistributer";
import UpdateCustomer from "../../Update/UpdateCustomer";
import UpdateOrder from "../../Update/UpdateOrders";
function CustomeRouters(){
    return(
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
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
        <Route path="/updateproduct/:productId?" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path="/updatecategories/:categoryId?" element={<UpdateCategories></UpdateCategories>}></Route>
        <Route path="/updateseller/:sellerId?" element={<UpdateSeller></UpdateSeller>}></Route>
        <Route path="/updatedistributer/:distributerId?" element={<UpdateDistributer></UpdateDistributer>}></Route>
        <Route path="/updatecustomer/:customerId?" element={<UpdateCustomer></UpdateCustomer>}></Route>
        <Route path="/updateorders/:orderId?" element={<UpdateOrder></UpdateOrder>}></Route>
    </Routes>
    );
}

export default CustomeRouters;