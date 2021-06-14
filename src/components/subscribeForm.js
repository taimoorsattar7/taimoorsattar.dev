import React, { useState, useEffect, useRef } from "react"
import Axios from "axios"
import "./_field.scss"

const SubscribeForm = props => {
  const [name, setName] = useState()

  const nameRef = useRef(null)
  const emailRef = useRef(null)

  const [disable, setDisable] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setDisable(true)
    let status = await props.onSubmit({
      name: nameRef.current.value,
      email: emailRef.current.value,
    })
    setDisable(false)
  }

  if (props.show == false) {
    return <></>
  }

  return (
    <>
      <form className="field" onSubmit={handleSubmit}>
        <div className="field--gap">
          <label
            className="headline headline__sml headline--white field__label"
            htmlFor="name"
            required
          >
            Name
          </label>

          <input
            ref={nameRef}
            name="name"
            className="headline headline__text field__input"
            type="text"
            placeholder="Enter your name here..."
            autoComplete="on"
          />
        </div>

        <div className="field--gap">
          <label
            className="headline headline__sml headline--white field__label"
            htmlFor="email"
            required
          >
            Email
          </label>

          <input
            ref={emailRef}
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
