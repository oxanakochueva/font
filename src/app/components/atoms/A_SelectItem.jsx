import React from 'react'
import ReactDOM from 'react-dom'

import App from '../App'

export default class SelectItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { selectContent } = this.props
    this.props.handleClick(selectContent)
  }

  render() {
    const { selectContent } = this.props
    return (
      <li className="selectItem" onClick={this.handleClick}>
        {selectContent.selectTypeList}
      </li>
    )
  }
}
