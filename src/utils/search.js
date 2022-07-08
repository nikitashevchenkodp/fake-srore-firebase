
export const visibleItems = (filter, list) => {
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