import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Search from '../atoms/Search'
import Select from '../atoms/Select'

export default class PagePageNavigation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { selectContents } = this.props
    return (
      <div className="PageNavigation">
        <Search onChange={this.handleChange} />
        <Select selectContents={selectContents} />
      </div>
    )
  }
}
