
//This simple hook will extract product data related
//to sides, sauces, sizes, etc if applicable.

export function useGetProductDefaults(product) {
  let side='', mainIng=''
  if (product.ing_principales.length !== 0) {
    mainIng = product.ing_principales[0].nombre
  }

  if (product.acompanamientos.length !== 0) {
    side = product.acompanamientos[0].nombre
  }


  return [side, mainIng]
}
