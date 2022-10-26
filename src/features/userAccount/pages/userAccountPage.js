import React from "react"
import { Container } from "react-bootstrap"
import SectionHeader from "../../../shared/components/SectionHeader/SectionHeader"
import SectionDescriptor from "../../../shared/components/SectionDescriptor/SectionDescriptor"
import UserAccountPanel from "../components/UserAccountPanel/UserAccountPanel"
import * as styles from "./userAccountPage.module.css"

const UserAccountPage = () => {
  return (
    <Container fluid="lg">
      <SectionHeader>
        <SectionDescriptor
          title="Mi cuenta"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className={styles.descriptor}
        />
      </SectionHeader>
      <UserAccountPanel/>
    </Container>
  )
}

export default UserAccountPage
