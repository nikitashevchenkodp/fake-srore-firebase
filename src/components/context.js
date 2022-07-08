import { getAuth } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { createContext, memo, useContext, useEffect, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db } from '../firebase'
import { getAllProducts, getCategories } from '../services/feake-api-service'


const Products = createContext()

const ProductsContext = ({children}) => {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [firebaseCart, setFirebaseCart] = useState([])
  const [firebaseFavorite, setFirebaseFavorite] = useState([])
  const [categories, setCategoties] = useState([])

  const auth = getAuth()
  const [user] = useAuthState(auth)

  useEffect(() => {

    fetchProducts()
    fetchCategories()
  },[])

  useEffect(() => {
    if(user) {
      const coinRef = doc(db, user.uid, "cart");
      const unsubscribe = onSnapshot(coinRef, coins => {
        if(coins.exists()) {
          setFirebaseCart(coins.data().products)
        } else {
          console.log("No items in te watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    } 
  }, [user]);

  useEffect(() => {
    if(user) {
      const coinRef = doc(db, user.uid, "favorites");
      const unsubscribe = onSnapshot(coinRef, favorites => {
        if(favorites.exists()) {
          setFirebaseFavorite(favorites.data().items)
        } else {
          console.log("No items in the favorites");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);


  const fetchProducts = async () => {
    setLoading(true)
    getAllProducts().then(data => {
      setList(data)
      setLoading(false)
    })
      .catch(() => setHasError(true))

  }

  const fetchCategories = () => {
    setLoading(true)
    getCategories().then(data => {
      setCategoties(data)
      setLoading(false)
    })
      .catch(()=> setHasError(true))
 
  }
  



  return (
    <Products.Provider value={{list, loading, hasError, firebaseCart, firebaseFavorite, categories}}>
      {children}
    </Products.Provider>
  )
}

export default ProductsContext

export const ProductsState = () => {
  return useContext(Products)
}