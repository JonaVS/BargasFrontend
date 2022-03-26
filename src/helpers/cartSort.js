export const cartSort = (cart, order) => {
  let sortedCart = cart
  if (order === "1") {
    sortedCart = sortBySub(cart)
  } else if (order === "2") {
    sortedCart = sortByPrice(cart)
  } else if (order === "3") {
    sortedCart = sortByQuantity(cart)
  }
  return sortedCart
}

//HELPER FUNCTIONS
const sortBySub = arr => {
  arr.sort(function (b, a) {
    if (a.subTotal > b.subTotal) {
      return 1
    }
    if (a.subTotal < b.subTotal) {
      return -1
    }
    // a must be equal to b
    return 0
  })

  return arr
}

const sortByPrice = arr => {
  arr.sort(function (b, a) {
    if (a.price > b.price) {
      return 1
    }
    if (a.price < b.price) {
      return -1
    }
    // a must be equal to b
    return 0
  })

  return arr
}

const sortByQuantity = arr => {
  arr.sort(function (b, a) {
    if (a.quantity > b.quanity) {
      return 1
    }
    if (a.quantity < b.quantity) {
      return -1
    }
    // a must be equal to b
    return 0
  })

  return arr
}
