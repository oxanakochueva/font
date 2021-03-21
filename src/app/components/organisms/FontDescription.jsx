import React from 'react'
import ReactDOM from 'react-dom'
import FontDesigner from '../moleculas/FontDesigner'

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
    const designers = font.texts.en.designers

    let fontDesignersInfo = []

    designers.forEach((designer, i) => {
      console.log(designer)
      fontDesignersInfo.push(
        <FontDesigner
          name={designer.name}
          company={designer.company}
          description={designer.descriptionHTML}
          userpic={designer.userpic}
          fontFamily={fontFamily}
          key={i}
        />
      )
    })

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
        {fontDesignersInfo}
      </div>
    )
  }
}
