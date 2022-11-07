export const currencyFormatter = value => {
  return new Intl.NumberFormat("CRC").format(value)
}
