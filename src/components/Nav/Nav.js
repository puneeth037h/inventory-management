
import { Link,Outlet } from "react-router-dom";
import home from "../icons/home (1).png"
import categoryicon from "../icons/menu.png"
import product from "../icons/grocery-store.png"
import seller from "../icons/seller (1).png"
import distributericon from "../icons/delivery-van.png"
import customericon from "../icons/user.png"
import ordersicon from "../icons/booking (3).png"
import './Nav.css'
function Nav(){
    return(
            <div className="nav">
                <h1>Inventory Management</h1>    
                <Link to={'/'} className="links"><img src={home} alt="" className="icon" /><button>Home</button></Link>
                <br/>
                <Link to={"/categories"} className="links"><img src={categoryicon} alt="" className="icon" /><button>Categories</button></Link>
                <br/>
                <Link to={"/products"} className="links"><img src={product} alt="" className="icon" /><button>Products</button></Link>
                <br/>
                <Link to={"/seller"} className="links"><img src={seller} alt="" className="sicon" /><button>Seller</button></Link>
                <br/>
                <Link to={"/distributer"} className="links"><img src={distributericon} alt="" className="sicon" /><button>Distributer</button></Link>
                <br/>
                <Link to={"/customer"} className="links"><img src={customericon} alt="" className="icon" /><button>Customer</button></Link>
                <br/>
                <Link to={"/orders"} className="links"><img src={ordersicon} alt="" className="sicon" /><button>Orders</button></Link>
                <Outlet></Outlet>
            </div>
    );
}

export default Nav;
