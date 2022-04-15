const getInitialValues = (productData, isEditMode) => {
  if (isEditMode) {
    const initialValues = {
      quantity: productData.quantity,
      main: productData.main,
      side: productData.side,
      sauce: productData.sauce,
      size: productData.size,
      extraInfo: productData.extraInfo,
      subTotal: productData.subTotal,
    }
    return initialValues
  }

  const { sides, mains, sauces, sizes } = productData
  const initialValues = {
    quantity: 1,
    main: mains.data.length > 0 ? mains.data[0].attributes.name : "",
    side: sides.data.length > 0 ? sides.data[0].attributes.name : "",
    sauce: sauces.data.length > 0 ? sauces.data[0].attributes.name : "",
    size: sizes.data.length > 0 ? sizes.data[0].attributes.name : "",
    extraInfo: "",
    subTotal: productData.price,
  }
  return initialValues
}

const getRadioGroupInfo = (index, context) => {
  let groupInfo = ""
  switch (context) {
    case "getName":
      if (index === 0) groupInfo = "side"
      if (index === 1) groupInfo = "main"
      if (index === 2) groupInfo = "sauce"
      if (index === 3) groupInfo = "size"
      break
    case "getLabel":
      if (index === 0) groupInfo = "Acompañamiento"
      if (index === 1) groupInfo = "Ingrediente principal"
      if (index === 2) groupInfo = "Salsa"
      if (index === 3) groupInfo = "Tamaño"
      break
    default:
      break
  }
  return groupInfo
}

const isCheckedByDefault = (isEditMode, productData, radioItemInfo) => {
  if (isEditMode) {
    const selectedOptions = [
      productData.side,
      productData.main,
      productData.sauce,
      productData.size,
    ]
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i] === radioItemInfo.itemName) {
        return true
      }
    }
  } else {
    if (radioItemInfo.itemIdx === 0) return true
  }
  return false
}

const getSubTotal = (productData, formValues) => {
  let productPrice = productData.price
  if (formValues.size !== "") {
    const selectedSizePrice = productData.sizes.data.find(
      x => x.attributes.name === formValues.size
    ).attributes.price
    if (selectedSizePrice) productPrice = selectedSizePrice
  }
  productPrice = productPrice - (productPrice * productData.discount) / 100
  return productPrice * formValues.quantity
}

export const helper = {
  getInitialValues,
  getRadioGroupInfo,
  isCheckedByDefault,
  getSubTotal,
}
