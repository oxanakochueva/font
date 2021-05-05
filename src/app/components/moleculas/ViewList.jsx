import React from 'react'
import ReactDOM from 'react-dom'

export default class ViewList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { viewType, changeDefaultView, pairs } = this.props
    return (
      <div
        className="selectViewItem"
        onClick={() => changeDefaultView(viewType, pairs)}
      >
        {viewType[0].toUpperCase() + viewType.substring(1)}
      </div>
    )
  }
}
