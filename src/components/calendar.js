import React from "react"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #FFF;
`

function Calendar() {
  return (
    <Section id="events">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=engineersmeanbusiness%40gmail.com&ctz=America%2FDenver"
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="EBC Calendar"
      ></iframe>
    </Section>
  )
}

export default Calendar
