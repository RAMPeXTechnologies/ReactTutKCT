import React from "react"
class StateManagement extends React.Component{
    constructor(){
    super()
      this.state = {os : "Mac"}
    }
    mac = () => this.setState({os: "Mac"})
    win = () => this.setState({os: "Windows"})
    lin = () => this.setState({os: "Linux"})
    render(){
      return(
        <div>
          <h1>I am Using {this.state.os} Operating System in {this.props.laptop} machine</h1>
          <button type='button' onClick={this.win}>Change to Windows</button>
          <button type='button' onClick={this.lin}>Change to Linux</button>
          <button type='button' onClick={this.mac}>Change to Mac</button>
          <br></br><br></br>
        </div>
      )
    }
  }

  export default StateManagement;