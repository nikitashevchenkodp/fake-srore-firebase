import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './firebase'
import ProductsContext from './components/context';



ReactDOM.render(
      <ProductsContext>
        <App />
      </ProductsContext>, 
      document.getElementById('root') );