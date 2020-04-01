import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   return <div>Опять, привет сосед!</div>
// }

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    )
  }
  render() {
    return (
      <div>
        Широта: {this.state.lat}
        <p>Error: {this.state.errorMessage}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
