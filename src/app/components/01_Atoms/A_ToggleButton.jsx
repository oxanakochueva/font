import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

export default class A_ToggleButton extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, toggle, handleClick } = this.props

    const classes = classnames({
      A_ToggleButton: true,
      toggle: toggle,
      [`${type}`]: true
    })

    return <div className={classes} onClick={handleClick} />
  }
}
