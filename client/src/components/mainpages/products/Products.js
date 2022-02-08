import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/ProductItem';

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;

  console.log(products);
  return (
    <div className='products'>
      {products.map((product) => {
        return <ProductItem key={product._id} />;
      })}
    </div>
  );
};

export default Products;
