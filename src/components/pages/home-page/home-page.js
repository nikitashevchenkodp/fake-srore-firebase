import React, { useCallback, useMemo } from "react";
import CategoriesList from "../../categories-list";
import ProductList from "../../products-list";
import { useState, Fragment, memo } from "react";
import './home-page.css'
import { ProductsState } from "../../context";
import Spiner from "../../spiner";

const HomePage = () => {
  const { loading  } = ProductsState()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('ALL')




  return loading ? <Spiner /> : (
    <div className="home__page">
      <CategoriesList onSet = {setFilter} />
      <input className="search" placeholder="Type to search..." value={search} onChange = {(e) => setSearch(e.target.value)} />
      <ProductList filter = {filter} search= {search} />
    </div>
  )
}

export default HomePage

