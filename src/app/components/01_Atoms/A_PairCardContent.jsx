import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

export default class A_PairCardContent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { id } = this.props

    const classes = classnames({
      A_PairCardContent: true,
      [`${id}`]: true
    })

    return <div className={classes}></div>
  }
}
