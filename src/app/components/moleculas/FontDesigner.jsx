import React from 'react'
import ReactDOM from 'react-dom'

export default class FontDesigner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { folder, pairs } = this.props
    const { name, company, description, userpic, fontFamily } = this.props

    return (
      <div className="aboutDesigner">
        <div className="designer">
          <img className="designerPic" src={userpic}></img>
          <div className="designerInfo">
            <div
              className="designerName"
              style={{ fontFamily: fontFamily[0], fontWeight: 600 }}
            >
              {name}
            </div>
            <div
              className="designerCompany"
              style={{ fontFamily: fontFamily[1] }}
            >
              {company}
            </div>
          </div>
        </div>
        <div
          className="designerDescription"
          // dangerouslySetInnerHTML={this.createMarkup(font)}
          style={{ fontFamily: fontFamily[1] }}
        >
          {description}
        </div>
      </div>
    )
  }
}
