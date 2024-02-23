
import { Link,Outlet } from "react-router-dom";
import './Nav.css'
function Nav(){
    return(
            <div className="nav">
                <h1>Inventory Management</h1>    
                <Link to={'/'} className="links"><button>Home</button></Link>
                <Link to={"/categories"} className="links"><button>Categories</button></Link>
                <Link to={"/products"} className="links"><button>Products</button></Link>
                <Link to={"/seller"} className="links"><button>Seller</button></Link>
                <Link to={"/distributer"} className="links"><button>Distributer</button></Link>
                <Link to={"/customer"} className="links"><button>Customer</button></Link>
                <Link to={"/orders"} className="links"><button>Orders</button></Link>
                <Outlet></Outlet>
            </div>
    );
}

export default Nav;
