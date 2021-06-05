import React from 'react'
import ReactDOM from 'react-dom'

export default class A_FolderName extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { name } = this.props

    return (
      <div className="A_FolderName" style={{ fontFamily: name }}>
        {name}
      </div>
    )
  }
}
