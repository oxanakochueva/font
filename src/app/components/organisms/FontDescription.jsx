import React from 'react'
import ReactDOM from 'react-dom'

export default class FontDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  createMarkup(font) {
    return { __html: font.texts.en.descriptionHTML }
  }
  // createMarkup(designer) {
  //   return { __html: designer.texts.en.designer.description }
  // }

  render() {
    const { font, fontFamily } = this.props

    console.log(fontFamily)
    return (
      <div className="fontInfo">
        <h1
          className="fontName"
          style={{ fontFamily: fontFamily[0], fontWeight: 600 }}
        >
          {font.heading}
        </h1>
        <div
          className="aboutFont"
          dangerouslySetInnerHTML={this.createMarkup(font)}
          style={{ fontFamily: fontFamily[1] }}
        ></div>
        <h2 style={{ fontFamily: fontFamily[0], fontWeight: 600 }}>Designer</h2>
        <div className="aboutDesigner">
          <div className="designer">
            <img
              className="designerPic"
              src={font.texts.en.designer.userpic}
            ></img>
            <div className="designerInfo">
              <div
                className="designerName"
                style={{ fontFamily: fontFamily[0], fontWeight: 600 }}
              >
                {font.texts.en.designer.name}
              </div>
              <div
                className="designerCompany"
                style={{ fontFamily: fontFamily[1] }}
              >
                {font.texts.en.designer.company}
              </div>
            </div>
          </div>
          <div
            className="designerDescription"
            // dangerouslySetInnerHTML={this.createMarkup(font)}
            style={{ fontFamily: fontFamily[1] }}
          >
            {font.texts.en.designer.descriptionHTML}
          </div>
        </div>
      </div>
    )
  }
}
