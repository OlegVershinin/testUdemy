import React from 'react'

const Spinner = props => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui dig text loader">{props.message}</div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Загрузка...',
}

export default Spinner
