import logo from './logo.svg';
import './App.css';
import './components/Home/Home.js';
import { BrowserRouter } from 'react-router-dom';
import CustomeRouters from './components/Home/CustomRoutes/CustomRoutes.js';
import { Link,Outlet } from "react-router-dom";
import Nav from './components/Nav/Nav.js';
import Categories from './components/Categories/Categories.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar'>
          <Nav></Nav>
        </div>
        <CustomeRouters></CustomeRouters>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
