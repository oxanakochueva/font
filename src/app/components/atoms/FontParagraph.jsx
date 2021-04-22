import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

export default class fontParagraph extends React.Component {
  constructor(props) {
    super(props)
  }

  createMarkup(paragraph) {
    return { __html: paragraph.body_html }
  }

  render() {
    let { paragraph } = this.props
    return <p dangerouslySetInnerHTML={this.createMarkup(paragraph)}></p>
  }
}
