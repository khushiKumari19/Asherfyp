import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Container/Home/Home';
import MarketPlace from './Container/MarketPlace/MarketPlace';
import SellToken from './Container/SellToken/SellToken';
import CarDetails from './Container/CarDetails/CarDetails';
import Blog from './Container/blog/blog';
import CartPage from './Container/CartPage/CartPage';
import Signup from './Container/Signup/Signup';
import Signin from './Container/Signin/Signin';
import Metamask from './Container/Metamask/WalletCard'
import Dashboard from './Container/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/marketplace' element={<MarketPlace/>}/>
        <Route path="/selltoken" element={<SellToken/>}/>
        <Route path="/car-detail/:carId" element={<CarDetails/>}/>
        <Route path='/blog' element ={<Blog/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/cart" element={<CartPage/>}/>      
          <Route path='/metamask' element ={<Metamask/>}/>


      </Routes>
    </div>
  );
}

export default App;
