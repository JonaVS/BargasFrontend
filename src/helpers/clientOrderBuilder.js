export const clientOrderBuilder = (cartItems, orderFormData) => {
  const orderGeneralInfo = {
    paymentType: orderFormData.paymentType,
    electronicInvoice: orderFormData.acceptedInvoice,
    clientName: orderFormData.clientName,
    clientEmail: orderFormData.email,
    clientId: orderFormData.idNumber,
    phone: orderFormData.idNumber,
    province: orderFormData.province,
    address: orderFormData.address,
  }

  const clientCart = []

  cartItems.forEach(cartItem => {
    clientCart.push({
      productId: cartItem.id,
      quantity: cartItem.quantity,
      extraInfo: cartItem.extraInfo,
      side: cartItem.side,
      main: cartItem.main,
      sauce: cartItem.sauce,
      size: cartItem.size,
    })
  })

  return { orderGeneralInfo, clientCart }
}
