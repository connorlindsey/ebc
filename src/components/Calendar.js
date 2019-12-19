import React from "react"
import { Heading } from "rebass"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff;

  iframe {
    max-width: 1000px;
    margin: 0 auto;
  }
`

function Calendar() {
  return (
    <Section id="events">
      <Heading marginBottom={30} fontSize={[5, 6, 6]}>
        Events
      </Heading>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=engineersmeanbusiness%40gmail.com&ctz=America%2FDenver"
        height="600"
        width="100%"
        frameBorder="0"
        scrolling="no"
        title="EBC Calendar"
      ></iframe>
    </Section>
  )
}

export default Calendar
