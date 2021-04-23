import React, { useState } from "react"
import Axios from "axios"
import "./_field.scss"

const SubscribeForm = props => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [msg, setmsg] = useState("")

  const [disable, setDisable] = useState(false)

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setDisable(true)
      let response

      if (validateEmail(email)) {
        response = await Axios.post(`/.netlify/functions/addUser`, {
          name: name,
          email: email,
        })
      }

      if (response.data) {
        localStorage.setItem("subscribe", true)
        props.onSuccess("Welcome! You are subscribe to the list")
        setName("")
        setEmail("")
        props.onClose()
      } else {
        props.onFail("Something went wrong")
      }

      setDisable(false)
    } catch (e) {
      props.onFail("Refresh the page and try Again...")
      setDisable(false)
    }
  }

  return (
    <>
      <form className="field" onSubmit={handleSubmit}>
        <div className="field--gap">
          <label
            className="headline headline__sml field__label"
            htmlFor="name"
            required
          >
            Name
          </label>

          <input
            onChange={e => setName(e.target.value)}
            name="name"
            className="headline headline__text field__input"
            type="text"
            placeholder="Enter your name here..."
            autoComplete="on"
          />
        </div>

        <div className="field--gap">
          <label
            className="headline headline__sml field__label"
            htmlFor="email"
            required
          >
            Email
          </label>

          <input
            onChange={e => setEmail(e.target.value)}
            name="email"
            className="headline headline__text field__input"
            type="email"
            placeholder="example@email.com"
            autoComplete="on"
          />
        </div>

        <button
          className={"btn btn__curv"}
          onClick={handleSubmit}
          disabled={disable ? true : false}
        >
          <span className="headline headline__text headline--white headline--uppercase">
            <b>
              <i>Let me in →</i>
            </b>
          </span>
        </button>
      </form>
    </>
  )
}

export default SubscribeForm
