import React from "react"
import { Col, Row } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"

const EventCardList = ({ events }) => {
  return (
    <Row
      as="ul"
      xs={1}
      lg={2}
      xl={2}
      xxl={3}
      className="list-unstyled justify-content-center"
    >
      {events.map((event) => (
        <Col key={event.id} as="li" className="justify-content-center mt-4">
          <EventCard event={event} />
        </Col>
      ))}
    </Row>
  )
}

EventCardList.defaultProps = {
  events: [],
}

export default EventCardList
