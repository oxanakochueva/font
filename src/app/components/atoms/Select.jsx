import React from 'react'
import ReactDOM from 'react-dom'

//import SelectItem from './SelectItem'
import App from '../App'

export default class Select extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { selectContents } = this.props
    console.log({ selectContents })
    let selectContentType = selectContents.map((selectContent, i) => (
      <div key={i} className="selectType">
        {selectContent.selectType} <div className="chevron"></div>
      </div>
    ))

    let nav = []
    nav.push(selectContentType)

    return <div className="select">{nav}</div>
  }
}
