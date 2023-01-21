import React, { useEffect, useState } from "react"
import agent from "../../../../strapiApi/agent"
import { toastDispatcher, ToastType } from "../../../../helpers/toastDispatcher"
import { errorMessageBuilder, ErrorContext } from "../../../../helpers/errorMessageBuilder"
import { Container } from "react-bootstrap"
import EventCardList from "./EventCardList/EventCardList"
import NoContentMessage from "../../../../shared/components/NoContentMessage/NoContentMessage"
import EventSectionPlaceholder from "./EventSectionPlaceholder/EventSectionPlaceholder"

const  Events = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const getEventsData = async () => {
      try {
        const result = await agent.event.getEvents()
        setEvents(result.data)
      } catch (error) {
        toastDispatcher(
          ToastType.ERROR,
          errorMessageBuilder(ErrorContext.EVENTS, error)
        )
      }
      setIsLoading(false)
    }
    getEventsData()
  }, [])

  if (isLoading) return <EventSectionPlaceholder/> 

  return (
    <Container>
      {events.length ? (
        <EventCardList events={events} />
      ) : (
        <NoContentMessage />
      )}
    </Container>
  )
}

export default Events
