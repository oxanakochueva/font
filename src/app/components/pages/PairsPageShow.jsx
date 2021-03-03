import React from 'react'
import ReactDOM from 'react-dom'
import FontDescription from '../organisms/FontDescription'
import Button from '../atoms/Button'

export default class PairsPageShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  exportPageToFigma = () => {
    const { currentPairId, exportPageToFigma } = this.props
    exportPageToFigma(currentPairId)
  }

  render() {
    const {
      fonts,
      pairs,
      currentPairId,
      exportPageToFigma,
      openPairsPageIndex
    } = this.props
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
        fontElements.push(<FontDescription font={fonts[key]} key={i} />)
      }
    })

    console.log(fontList)

    // <Button
    //   backToPairsPage={backToPairsPage}
    //   exportPageToFigma={exportPageToFigma}
    // />
    // <Button buttonAction={this.backToPairsPage} buttonName="Back" />

    return (
      <>
        <div className="buttonsSet">
          <div className="buttonsLeft">
            <Button
              buttonAction={openPairsPageIndex}
              buttonName="Back"
              leftIcon="chevronLeft"
              rightIcon=""
            />
          </div>
          <div className="buttonsRight">
            <Button
              buttonAction={this.exportPageToFigma}
              buttonName="Export to artboard"
              leftIcon=""
              rightIcon="exportIcon"
            />
          </div>
        </div>
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
      </>
    )
  }
}
