import React from 'react'
import ReactDOM from 'react-dom'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { folder, pairs } = this.props
    const { buttonAction, buttonName, leftIcon, rightIcon } = this.props

    return (
      <div className="Button" onClick={buttonAction}>
        <div className={leftIcon}></div>
        {buttonName} <div className={rightIcon}></div>
      </div>
    )
  }
}
