
import { Link,Outlet } from "react-router-dom";
import './Nav.css'
function Nav(){
    return(
            <div className="nav">
                <h1>Inventory Management</h1>    
                <button>Home</button>
                <button>Categories</button>
                <button>Products</button>
                <button>Seller</button>
                <button>Distributer</button>
                <button>Customer</button>
                <button>Orders</button>
                <Outlet></Outlet>
            </div>
    );
}

export default Nav;
