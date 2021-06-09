import React from 'react'
import ReactDOM from 'react-dom'

export default class A_PairCardFooterTabButton extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { name } = this.props
    return <div className="A_PairCardFooterTabButton">{name}</div>
  }
}
