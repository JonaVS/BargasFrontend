import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import * as styles from "./imageRenderer.module.css"

const ImageRenderer = ({ url, thumb, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const handleOnLoad = () => {
    setIsLoaded(true)
  }
  return (
    <div
      className={styles.imageContainer}
      ref={ref}
      style={{
        paddingBottom: `${(height / width) * 100}%`,
        width: "100%",
      }}
    >
      {inView && (
        <>
          <img
            className={`${styles.image} ${styles.thumb} ${
              isLoaded ? styles.isLoaded : ""
            }`}
            src={thumb}
            alt=''
          />
          <img
            className={`${styles.image} ${isLoaded ? styles.isLoaded : ""}`}
            src={url}
            onLoad={handleOnLoad}
            alt=''
          />
        </>
      )}
    </div>
  )
}

export default ImageRenderer
