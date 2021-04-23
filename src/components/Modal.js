import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./_modal.scss";

const Modal = props => {

  const [pop, setPop] = useState(false);

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {

    const clrtime = setTimeout(() => {
      setPop(true)
    }, (props.timer || 0));

    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      clearTimeout(clrtime)
    };
  }, []);

  return (
    <CSSTransition
      in={pop && props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>

        <div onClick={props.onClose}
             className="modal__close-x"></div>
        
        <h4 className="headline headline__medium">
          <b>{props.title}</b>
        </h4>

        <mark className="headline headline__text
                         headline--inblock headline--b-margin-medium">
          {props.body}
        </mark>
          
        <div className="modal__body">{props.children}</div>

        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
