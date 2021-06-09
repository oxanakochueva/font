import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

export default class A_IconButton extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, handleClick } = this.props

    const classes = classnames({
      A_IconButton: true,
      [`${type}`]: true
    })

    return <div className={classes} onClick={handleClick} />
  }
}
