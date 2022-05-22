import React from "react"
import { graphql } from "gatsby"
import Seo from "../../shared/components/Seo/seo"
import Info from "../../templates/Info"

const TermsAndConditions = ({ data }) => {

  const pageSeo = data.strapiTermsAndConditionsPage.seoData
  const pageMarkdown = data.strapiTermsAndConditionsPage.markdown.data.markdown

  return (
    <>
      <Seo title={pageSeo.title} description={pageSeo.description}/>
      <Info markdown={pageMarkdown} />
    </>
  )
}

export default TermsAndConditions

export const termsQuery = graphql`
  query TermsPageData {
    strapiTermsAndConditionsPage {
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
