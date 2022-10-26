import React from "react"
import { graphql } from "gatsby"
import Seo from "../shared/components/Seo/seo"
import HeroContainer from "../shared/components/HeroContainer/HeroContainer"
import HeroCaption from "../shared/components/HeroContainer/HeroCaption/HeroCaption"
import Divider from "../shared/components/Divider/Divider"
import Events from "../features/events/components/Events/Events"

const EventsPage = ({ data }) => {

  const seoData = data.strapiEventsPage.seoData
  const heroImage =
    data.strapiEventsPage.heroImage.localFile.childImageSharp.gatsbyImageData

  return (
    <>
      <Seo title={seoData.title} description={seoData.description} />
      <HeroContainer image={heroImage}>
        <HeroCaption
          title={seoData.title}
          text={seoData.description}
          btnText="Explorar"
        />
      </HeroContainer>
      <Divider />
      <Events/>
    </>
  )
}

export default EventsPage

export const query = graphql`
  query eventsPage {
    strapiEventsPage {
      seoData {
        title
        description
      }
      heroImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 50)
          }
        }
      }
    }
  }
`