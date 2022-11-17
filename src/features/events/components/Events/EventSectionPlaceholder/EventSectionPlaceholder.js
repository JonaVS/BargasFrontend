import React from "react"

const EventSectionPlaceholder = () => {
  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap">
      {Array.from({ length: 3 }).map((_, idx) => (
      <div key={idx} className="placeholder-glow p-3" style={{backgroundColor: "#1B1B1B", width: "450px" }}>
        <span
          className="placeholder w-100 bg-warning d-block"
          style={{ height: "250px" }}
        ></span>
        <div className="placeholder-wave mt-4">
          <span className="placeholder w-100 bg-warning d-block"></span>
          <span className="placeholder w-75 bg-warning"></span>
          <span className="placeholder w-50 bg-warning"></span>
        </div>
      </div>
      ))}
    </div>
  )
}

export default EventSectionPlaceholder
