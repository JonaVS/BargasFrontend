const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query productSlugs {
      allStrapiProducto {
        nodes {
          slug
        }
      }
    }
  `)

  data.allStrapiProducto.nodes.forEach(node => {
    actions.createPage({
      path: "/menu/" + node.slug,
      component: path.resolve("./src/templates/Product.js"),
      context: { slug: node.slug },
    })
  })
}
