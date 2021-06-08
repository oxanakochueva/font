import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

export default class A_PairCover extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, image } = this.props

    const classes = classnames({
      A_PairCover: true,
      [`${type}`]: true
    })

    return <img className={classes} src={image} />
  }
}
