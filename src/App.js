import {Routes, Route  } from "react-router-dom";
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import './App.css';


const App = () => (
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path="/products/:id" element={<ProductDetails />} />
  </Routes>
)
export default App;
