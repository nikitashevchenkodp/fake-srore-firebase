import React from "react";
import './modal-window.css'

const ModalWindow = ({active, setActive, children}) => {

  const style = active ? "modal__window active" : "modal__window"
  const contentStyle = active ? "modal__window__content active" : "modal__window__content"

  return (
    <div className={style} onClick={() => setActive(false)}>
      <div className={contentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow