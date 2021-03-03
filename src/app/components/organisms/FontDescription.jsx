import React from 'react'
import ReactDOM from 'react-dom'

export default class FontDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  createMarkup(font) {
    return { __html: font.texts.en.description }
  }
  createMarkup(designer) {
    return { __html: designer.texts.en.designer.description }
  }

  render() {
    const { font } = this.props

    return (
      <div className="fontInfo">
        <h1 className="fontName" style={{ fontFamily: font.heading }}>
          {font.heading}
        </h1>
        <div
          className="aboutFont"
          dangerouslySetInnerHTML={this.createMarkup(font)}
        ></div>
        <h2>Designer</h2>
        <div className="aboutDesigner">
          <div className="designer">
            <img
              className="designerPic"
              src={font.texts.en.designer.userpic}
            ></img>
            <div className="designerInfo">
              <div className="designerName">{font.texts.en.designer.name}</div>
              <div className="designerCompany">
                {font.texts.en.designer.company}
              </div>
            </div>
          </div>
          <div
            className="designerDescription"
            dangerouslySetInnerHTML={this.createMarkup(font)}
          ></div>
        </div>
      </div>
    )
  }
}
