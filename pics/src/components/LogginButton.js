import React from 'react'

class LoggingButton extends React.Component {
  state = { term: '' }
  // Такой синтаксис гарантирует, что `this` привязан к handleClick.
  // Предупреждение: это экспериментальный синтаксис
  handleClick = (e) => {
    e.preventDefault()
    console.log('По кнопке кликнули.')
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <button
        // onSubmit={this.handleClick}
        type="submit"
        className="ui large inverted violet button"
        onClick={(e) => this.setState({ term: e.target.value })}
      >
        Искать
      </button>
    )
  }
}

export default LoggingButton
