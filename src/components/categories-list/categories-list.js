import React, { memo, useMemo } from "react";
import CategoriesListItem from "../categories-list-item";
import { ProductsState } from "../context";
import Spiner from "../spiner";
import './categories-list.css'

const CategoriesList = ({onSet}) => {

  const {categories} = ProductsState()
  const {loading} = ProductsState()
  
  
  const items = categories.map((category) => {
    return (
      <CategoriesListItem key = {category} child = {category} onSet = {onSet} />
    )
  })


  return loading ? <Spiner /> : (
    <div className="categories__list">
      <ul className="categories__list__list" >
        <li className = "cat__list__item" onClick={() => onSet('All')}>All</li>
        {items}
      </ul>
    </div>
  )
}

export default memo(CategoriesList)