import React, { useState, useEffect, useRef } from "react"
import "./_testimonial.scss"
import "./_flex.scss"

const Testimonial = props => {

  const testimonials = props.testimonial

  return (
    <>
    <h2 className="headline headline--b-margin-medium">
      What people says?
    </h2>
    <div className="flex">

    {testimonials.map(item => (
      <figure className="testimonial">
        <div className="author">
            <h5>
              <b>{item.name}</b>
            </h5>
            <span><i>{item.designation}</i></span>
        </div>

        <blockquote className="headline headline__sml headline--dull">
          {item.says}
        </blockquote>
      
      </figure>
    ))}
    
      </div>
    </>
  )
}

export default Testimonial
