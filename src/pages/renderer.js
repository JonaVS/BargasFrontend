import React from "react"
import agent from "../API/agent"
import LoginForm from "../features/auth/components/LoginForm/LoginForm"

const renderPage = () => {

  const handleSubmit = async () => {
    console.log("Ins")
    const body = {
      username: "Bob",
      email: "bob@test.com",
      password: "testpass",
    }

    try {
      const response = await agent.user.register(body)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAuthSubmit = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ4MjMwMzA0LCJleHAiOjE2NTA4MjIzMDR9.9hOYMvTqIzP2O6QHc11SjD_Ff4Ekyrq7aTcqusb27LA`,
        },
      }
      const response = await agent.user.get(config)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {/* <h1>Lazy Load Images</h1>
      <section>
        {imageData.map(data => (
          <ImageRenderer
            key={data.id}
            url={data.url}
            thumb={data.thumbnail}
            width={data.width}
            height={data.height}
          />
        ))}
      </section> */}
      {/* <div style={{ margin: "500px 0px 0px 0px" }}>
        <button onClick={handleSubmit}>REGISTER ENDPOINT TEST</button>
        <button onClick={handleAuthSubmit}>AUTHENTICATED REQUEST</button>
      </div> */}
      <LoginForm/>
    </div>
  )
}

export default renderPage
