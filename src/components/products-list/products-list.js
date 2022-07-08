import React from "react";
import ProductListItem from "../products-list-item";
import Spiner from "../spiner"
import './products-list.css'
import { ProductsState } from "../context";

const ProductList = React.memo(({filter, search}) => {

  const {list} = ProductsState()
  const {loading} = ProductsState()
  const {hasError} = ProductsState()

  const visibleItems = (filter, list) => {
    switch(filter) {
      case `men's clothing`:
        const menItems = list.filter(item => item.category === filter)
        return menItems
      case `women's clothing`:
        const womenItems = list.filter(item => item.category === filter)
        return womenItems
      case `electronics`:
        const elecItems = list.filter(item => item.category === filter)
        return elecItems
      case `jewelery`:
        const jewItems = list.filter(item => item.category === filter)
        return jewItems  
      default:
        return list
    }
  }

  const searchInput = (visibleItems, search) => {
    if(search.length === 0) {
        return visibleItems
    } 
    return visibleItems.filter((item) => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
    }) 
  }


  if(hasError) {
    return <h2>Error</h2>
  } 

  if(loading) {
    return <Spiner/>
  }

  return (
    <div className="product__list">
      {
       searchInput(visibleItems(filter,list), search).map((product) => {
          return (
            <ProductListItem key = {product.id} product = {product} />
          )
        })
      }
    </div>
  )
})

export default ProductList