import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './products/Products';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';

const Pages = () => {
  return (
    <Routes>
      <Route path='/' component={Products} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/cart' component={<Cart />} />
    </Routes>
  );
};

export default Pages;
