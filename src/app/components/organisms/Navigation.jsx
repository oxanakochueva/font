import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Search from '../atoms/A_Search'
import Select from '../atoms/A_Select'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { selectContents } = this.props
    return (
      <div className="navigation">
        <Search onChange={this.handleChange} />
        <Select selectContents={selectContents} />
      </div>
    )
  }
}
