import React from "react"

class Keypad extends React.Component {
  render() {
    return (
      <input type="password" onKeyUp={this.enteringPassword}/>
    )
  }

  enteringPassword = () => {
    console.log("Entering password...");
  }
}

export default Keypad;
