import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;

  console.log(products);
  return <div>Product List</div>;
};

export default Products;
