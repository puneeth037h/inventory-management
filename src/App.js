import logo from './logo.svg';
import './App.css';
import './components/Home/Home.js';
import { BrowserRouter } from 'react-router-dom';
import CustomeRouters from './components/Home/CustomRoutes/CustomRoutes.js';
import { Link,Outlet } from "react-router-dom";
import Nav from './components/Nav/Nav.js';
function App() {
  return (
    <div className="App">
      <div className='navbar'>
       <Nav></Nav>
      </div>
      <BrowserRouter>
        <CustomeRouters></CustomeRouters>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
