import React from "react"

class EyesOnMe extends React.Component {
  render() {
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}></button>
    )
  }

  focusEvent = () => {
    console.log("Good!")
  }

  blurEvent = () => {
    console.log("Hey! Eyes on me!")
  }
}

export default EyesOnMe;
