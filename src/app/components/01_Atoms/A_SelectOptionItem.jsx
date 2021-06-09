import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

export default class A_SelectOptionItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, active, handleClick } = this.props

    const classes = classnames({
      A_SelectOptionItem: true,
      active: active
    })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
  }
}
