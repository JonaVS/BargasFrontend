import React from "react"
import { Row } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"

const EventCardList = ({ events }) => {
  return (
    <Row
      as="ul"
      xs={1}
      lg={2}
      xl={2}
      xxl={3}
      className="list-unstyled"
    >
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </Row>
  )
}

EventCardList.defaultProps = {
  events: [],
}

export default EventCardList
