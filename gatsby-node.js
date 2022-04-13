const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query productSlugs {
      allStrapiProduct {
        nodes {
          slug
        }
      }
    }
  `)

  data.allStrapiProduct.nodes.forEach(node => {
    actions.createPage({
      path: "/menu/" + node.slug,
      component: path.resolve("./src/templates/Product.js"),
      context: { slug: node.slug },
    })
  })
}
