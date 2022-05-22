import React from "react"
import { graphql } from "gatsby"
import Seo from "../../shared/components/Seo/seo"
import Info from "../../templates/Info"

const Privacy = ({ data }) => {

  const seoData = data.strapiPrivacyPage.seoData
  const pageMarkdown = data.strapiPrivacyPage.markdown.data.markdown

  return (
    <>
      <Seo title={seoData.title} description={seoData.description} />
      <Info markdown={pageMarkdown} />
    </>
  )
}

export default Privacy

export const privacyQuery = graphql`
  query privacyPageData {
    strapiPrivacyPage {
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
