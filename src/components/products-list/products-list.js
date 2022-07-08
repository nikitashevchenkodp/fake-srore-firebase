import React, { useState } from "react";
import ProductListItem from "../products-list-item";
import Spiner from "../spiner"
import './products-list.css'
import { ProductsState } from "../context";


const ProductList = React.memo(({filter, search}) => {

  const {list} = ProductsState()
  const {loading} = ProductsState()
  const {hasError} = ProductsState()

  const [pagination, setPagination] = useState(8)
  const [endItems, setEndItems] = useState(false)

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

  const items = searchInput(visibleItems(filter,list), search)
  console.log(items);

  const loadMore = () => {
    setPagination((pagination) => pagination + 8)
  }

  if(hasError) {
    return <h2>Error</h2>
  } 

  const change = () => {
    
  }

  const visible = (items.length - pagination <= 0 || items.length < 8 )

  if(loading) {
    return <Spiner/>
  }

  if(!items.length) {
    return <div style = {{margin: '100px auto', fontSize: "24px" }}>Try to find something else..."{search}"</div>
  }

  return (
    <>
      <div className="product__list">
        {
        items.slice(0, pagination).map((product) => {
            return (
              <ProductListItem key = {product.id} product = {product} />
            )
          })
        }
      </div>
      {!visible && <button className="pagination" onClick={loadMore}>Load More..</button>}
    </>
  )
})

export default ProductList