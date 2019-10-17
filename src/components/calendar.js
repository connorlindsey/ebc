import React from "react"

function Calendar() {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=engineersmeanbusiness%40gmail.com&ctz=America%2FDenver"
        style={{border: 0}}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        title="EBC Calendar"
      ></iframe>
    </div>
  )
}

export default Calendar
