import React from 'react'
import ReactDOM from 'react-dom'

export default class A_PairCardPairName extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { name } = this.props
    return <div className="A_PairCardPairName">{name}</div>
  }
}
