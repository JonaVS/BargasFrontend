import React from "react"

const ProductFormPlaceholder = () => {
  return (
    <>
      <div className="placeholder-glow">
        <span
          className="placeholder col-4 bg-warning d-block"
          style={{ height: "20px" }}
        ></span>
        <br />
      </div>
      <div className="placeholder-glow mb-4">
        <span className="placeholder col-2 bg-warning d-block"></span>
        <span className="placeholder col-3 bg-warning"></span>
      </div>
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="placeholder-glow mb-4">
          <span className="placeholder col-4 bg-warning d-block"></span>
          <span className="placeholder col-2 bg-warning"></span>
          <span className="placeholder col-2 bg-warning ms-2"></span>
          <span className="placeholder col-2 bg-warning ms-2"></span>
        </div>
      ))}
      <div className="placeholder-glow">
        <span
          className="placeholder col-12 bg-warning d-block"
          style={{ height: "100px" }}
        ></span>
      </div>
    </>
  )
}

export default ProductFormPlaceholder
