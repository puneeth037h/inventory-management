import logo from './logo.svg';
import './App.css';
import './components/Home/Home.js';
import { BrowserRouter } from 'react-router-dom';
import CustomeRouters from './components/Home/CustomRoutes/CustomRoutes.js';
import Nav from './components/Nav/Nav.js';
import ScrollToTop from './components/Scrolltotop/Scrolltotop.js';
function App() {
  return (
    
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        <div className='navbar'>
          <Nav></Nav>
        </div>
        <CustomeRouters></CustomeRouters>
      </div>
      </BrowserRouter>
    
    
  );
}

export default App;
