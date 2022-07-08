import React from "react";
import { useSelector } from "react-redux";
import { ProductsState } from "../../context";
import ProductListItem from "../../products-list-item/product-list-item";
import './favorite-page.css'

const FavoritePage = () => {
  const { firebaseFavorite} = ProductsState()


  const visibleItems = firebaseFavorite?.map((product) => {
    return (
      <ProductListItem key = {product.id} product = {product} />
    )
  })
  
  return (
    <div className="favorite__page">
      {visibleItems}
    </div>
  )
}

export default FavoritePage