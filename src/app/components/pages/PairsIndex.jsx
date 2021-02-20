import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
//import FontPairName from './FontPairName'

export default class PairsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.changeImg = React.createRef()

    this.state = {}
  }

  render() {
    let card = this.props.pair

    return <div className="cardBlock">{card}</div>
  }
}
