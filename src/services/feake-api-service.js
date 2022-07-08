
export const getAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')

  if(!res.ok) {
    throw new Error('Somethig goes wrong..')
  }

  return res.json()

}

export const getCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  
  if(!res.ok) {
    throw new Error('Somethig goes wrong..')
  }

  return res.json()
}