import React from 'react'
import ReactDOM from 'react-dom'
import FontDesigner from '../moleculas/FontDesigner'
import FontParagraph from '../atoms/FontParagraph'

export default class FontDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  // createMarkup(designer) {
  //   return { __html: designer.texts.en.designer.description }
  // }

  renderParagraphs = () => {
    const { paragraphs } = this.props
    let paragraphElements = []
    paragraphs.forEach((paragraph, i) => {
      paragraphElements.push(<FontParagraph paragraph={paragraph} key={i} />)
    })
    return paragraphElements
  }

  render() {
    const { font, fontFamily, designers } = this.props

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
        <div className="aboutFont" style={{ fontFamily: fontFamily[1] }}>
          {this.renderParagraphs()}
        </div>
        <h2 style={{ fontFamily: fontFamily[0], fontWeight: 600 }}>Designer</h2>
        {fontDesignersInfo}
      </div>
    )
  }
}
