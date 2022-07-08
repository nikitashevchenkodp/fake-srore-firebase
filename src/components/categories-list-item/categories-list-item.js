import React, { memo } from "react";
import './categories-list-item.css'


const CategoriesListItem = ({onSet,child}) => {

  return (
    <li className="cat__list__item" onClick = {() => onSet(child)} >{child}</li>
  )
}

export default CategoriesListItem