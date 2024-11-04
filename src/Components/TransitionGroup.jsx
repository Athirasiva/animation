import React, { useState } from "react";
import './CssAnimation.css'
import { CSSTransition } from "react-transition-group";

function TransitionGroup() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      <CSSTransition
        in={isVisible}
        timeout={300}
        className="fade"
        unmountOnExit
      >
        <div>This is a fade transition!</div>
        </CSSTransition>
    </div>
  );
}

export default TransitionGroup;
