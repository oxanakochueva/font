import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import FontPairCard from '../organisms/FontPairCard'

export default class Star extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    // console.log('click')
    this.props.handleClick(e)
  }

  render() {
    let { handleClick, value, name } = this.props
    return <div onClick={this.handleClick} className="star"></div>
  }
}
