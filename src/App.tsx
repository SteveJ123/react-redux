import React from 'react';
import './App.css';
import ProductList from './ProductList';
import  { useDispatch }  from 'react-redux';
import { fetchProducts } from './store/actions';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
        <button onClick={()=>{dispatch(fetchProducts())}}>Fetch Products</button>
      <div className="cardContainer">      
      </div>
    </div>
  );
}

export default App;
