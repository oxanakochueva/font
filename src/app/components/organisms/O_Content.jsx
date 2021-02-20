import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
//import FontPairName from './FontPairName'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.createMarkup = this.createMarkup.bind(this)
  }

  createMarkup(font) {
    return { __html: font.texts.en.description }
  }
  render() {
    let fonts = this.props.fonts

    // for (let value of Object.keys(fonts)) {
    //   console.log(value)
    //
    // }
    // Object.keys(fonts)

    let articleObject = Object.values(fonts).map((font, i) => (
      <div key={i} className="fontInfo" id={font.heading}>
        <h1 className="fontName">{font.heading}</h1>
        <div
          className="aboutFont"
          dangerouslySetInnerHTML={this.createMarkup(font)}
        ></div>
        <h2>Designer</h2>
        <div className="aboutDesigner">
          <img
            className="designerPic"
            src={font.texts.en.designer.userpic}
          ></img>
          <div>
            <div className="designerName">{font.texts.en.designer.name}</div>
            <div className="designerCompany">
              {font.texts.en.designer.company}
            </div>
          </div>
          <div className="designerDescription">
            {font.texts.en.designer.description}
          </div>
        </div>
      </div>
    ))

    let articles = []
    articles.push(articleObject)
    console.log(articles)
    return articles
  }
}
