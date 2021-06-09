import React from 'react'
import ReactDOM from 'react-dom'

export default class A_DesignerImage extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { image } = this.props
    return <img className="A_DesignerImage" src={image} />
  }
}
