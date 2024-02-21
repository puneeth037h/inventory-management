
import { Link,Outlet } from "react-router-dom";
import './Nav.css'
function Nav(){
    return(
            <div className="nav">
                <h1>Inventory Management</h1>    
                <Link to={'/home'}><button>Home</button></Link>
                <Link to={"/categories"}><button>Categories</button></Link>
                <Link to={"/products"}><button>Products</button></Link>
                <button>Seller</button>
                <button>Distributer</button>
                <button>Customer</button>
                <button>Orders</button>
                <Outlet></Outlet>
            </div>
    );
}

export default Nav;
