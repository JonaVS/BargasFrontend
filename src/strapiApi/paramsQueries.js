import qs from "qs"

export const userOrdersQuery = qs.stringify(
  {
    fields: ["username"],
    populate: {
      orders: {
        sort: ["date:desc"],
        populate: {
          orderDetails: {
            populate: { product: { fields: ["name"], populate: ["image"] } },
          },
        },
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
)
