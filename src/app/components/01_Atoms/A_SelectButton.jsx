import React from 'react'
import ReactDOM from 'react-dom'

export default class A_SelectButton extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text } = this.props
    return <div className="A_SelectButton">{text}</div>
  }
}
