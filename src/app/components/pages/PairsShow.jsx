import React from 'react'
import ReactDOM from 'react-dom'
import FontAbout from '../organisms/FontAbout'

export default class PairsShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { fonts, pairs, currentPairId } = this.props
    let fontList = []
    let fontElements = []
    let pairHeader = ''
    let fontStyle = ''

    pairs.forEach((pair, i) => {
      if (pair.id === currentPairId) {
        fontList = pair.fonts
        pairHeader = pair.heading
        fontStyle = pair.folder
      }
    })
    // this.setState({
    //   firstFontName: fontList[0],
    //   secondFontName: fontList[1]
    // })
    //
    // console.log(this.state.firstFontName, this.state.secondFontName)

    Object.keys(fonts).forEach((key, i) => {
      console.log(key === fontList[0], key === fontList[1])
      if (key === fontList[0] || key === fontList[1]) {
        fontElements.push(<FontAbout font={fonts[key]} key={i} />)
      }
    })

    console.log(fontList)

    return (
      <div className="pairContainer">
        <div className="pairHeader" style={{ fontFamily: fontStyle }}>
          {pairHeader}
        </div>
        <div className="pairCover"></div>
        {fontElements}
        <div className="copyright">
          Information from<a href="https://fonts.google.com/">Google Fonts</a>
        </div>
      </div>
    )
  }
}
