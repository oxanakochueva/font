import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import FontCard from './FontCard'

export default class PairsShow extends React.Component {
  constructor(props) {
    super(props)

    this.changeImg = React.createRef()

    this.state = {}
  }

  render() {
    let pair = this.props.pair

    return <FontCard pair={pair} />
  }
}
