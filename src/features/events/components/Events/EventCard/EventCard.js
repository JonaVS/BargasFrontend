import React, { useState } from "react"
import { BsFillCalendarFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import EventDetailsModal from "../EventDetailsModal/EventDetailsModal"
import * as styles from "./eventCard.module.css"

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false)
  
  const handleShowDetailsModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
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
              <button
                className={styles.detailsBtn}
                onClick={handleShowDetailsModal}
              >
                Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
      <EventDetailsModal show={showModal} close={handleShowDetailsModal} event={event} />
    </>
  )
}

export default EventCard
