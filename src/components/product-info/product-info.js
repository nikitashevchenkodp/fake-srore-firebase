import React from 'react'
import ProductBuy from '../product-buy/product-buy'
import './product-info.css'

const ProductInfo = ({product}) => {





  return (
    <div className='product__info'>
      <div className='product__info__title'>
        <h3>{product.title}</h3>
      </div>
      <div className='product__info__inner'>
        <div className='product__info__image'>
          <img src={product.image} alt = {product.title} />
        </div>
        <div className='product__info__text'>
          <div className='product__info__description'>
            <p>{product.description}</p>
          </div>
          <ProductBuy product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo