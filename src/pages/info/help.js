import React from "react"
import { graphql } from "gatsby"
import Seo from "../../shared/components/Seo/seo"
import Info from "../../templates/Info"

const Help = ({ data }) => {

  const seoData = data.strapiOrderingHelpPage.seoData
  const pageMarkdown = data.strapiOrderingHelpPage.markdown.data.markdown

  return (
    <>
      <Seo title={seoData.title} description={seoData.description} />
      <Info markdown={pageMarkdown} />
    </>
  )
}

export default Help

export const helpQuery = graphql`
  query helpPageData {
    strapiOrderingHelpPage {
      seoData {
        title
        description
      }
      markdown {
        data {
          markdown
        }
      }
    }
  }
`
