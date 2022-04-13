
//This simple hook will extract product data related
//to sides, sauces, sizes, etc if applicable.

export function useGetProductDefaults(product) {
  let side='', mainIng=''
  if (product.mains.length !== 0) {
    mainIng = product.mains[0].name
  }

  if (product.sides.length !== 0) {
    side = product.sides[0].name
  }


  return [side, mainIng]
}
