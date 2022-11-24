import React, { useState } from "react"
import { Col } from "react-bootstrap"
import { motion } from "framer-motion"
import { BsFillCalendarFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import Button, { ButtonTypeAnimation } from "../../../../../shared/components/Button/Button"
import EventDetailsModal from "../EventDetailsModal/EventDetailsModal"
import * as styles from "./eventCard.module.css"

//START--Framer motion variants--START
const card = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
}
//END--Framer motion variants--END

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false)

  const handleShowDetailsModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Col
        as={motion.li}
        variants={card}
        initial="hidden"
        whileInView="show"
        viewport={{ fallback: true, once: true, amount: 0.3 }}
        className={styles.cardWrapper}
      >
        <div className={styles.eventCard}>
          <img
            className={styles.eventImg}
            src={event.attributes.image.data.attributes.formats.small.url}
            alt={event.attributes.title}
          />
          <div className={styles.cardInfo}>
            <div className={styles.innerWrapper}>
              <h2>{event.attributes.title}</h2>
              <div className={styles.infoWrapper}>
                <div className={styles.eventInfo}>
                  <p>
                    <BsFillCalendarFill className={styles.icon} size={20} />
                    {new Date(event.attributes.startDate).toLocaleDateString()}
                  </p>
                  <p>
                    <MdLocationOn className={styles.icon} size={20} />
                    Bargas restaurante
                  </p>
                </div>
                <Button
                  whileHover={ButtonTypeAnimation.MainHover}
                  className={styles.detailsBtn}
                  onClick={handleShowDetailsModal}
                >
                  Detalles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <EventDetailsModal
        show={showModal}
        close={handleShowDetailsModal}
        event={event}
      />
    </>
  )
}

export default EventCard
