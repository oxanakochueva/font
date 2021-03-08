import React from 'react'
import ReactDOM from 'react-dom'
import FontDescription from '../organisms/FontDescription'
import PageNavigation from '../organisms/PageNavigation'

export default class PairsPageShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      fonts,
      pairs,
      currentPairId,
      exportPageToFigma,
      openPairsPageIndex,
      pairsInCurrentFolder
    } = this.props
    let fontList = []
    let fontElements = []
    let pairHeader = ''
    let fontStyle = ''
    let fontFamily = []

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
        fontFamily.push(fonts[key].heading)
        fontElements.push(
          <FontDescription font={fonts[key]} fontFamily={fontFamily} key={i} />
        )
      }
    })

    console.log(pairsInCurrentFolder)

    ////рабочие кнопки
    // <div className="buttonsSet">
    //   <div className="buttonsLeft">
    //     <Button
    //       buttonAction={openPairsPageIndex}
    //       buttonName="Back"
    //       leftIcon="chevronLeft"
    //       rightIcon=""
    //     />
    //   </div>
    //   <div className="buttonsRight">
    //     <Button
    //       buttonAction={this.exportPageToFigma}
    //       buttonName="Export to artboard"
    //       leftIcon=""
    //       rightIcon="exportIcon"
    //     />
    //   </div>
    // </div>
    //

    return (
      <>
        <PageNavigation
          openPairsPageIndex={openPairsPageIndex}
          exportPageToFigma={exportPageToFigma}
          currentPairId={currentPairId}
          page="show"
        />

        <div className="pairContainer">
          <div
            className="pairHeader"
            style={{ fontFamily: fontFamily[0], fontWeight: 600 }}
          >
            {pairHeader}
          </div>
          <div className="pairCover"></div>
          {fontElements}
          <div className="copyright">
            Information from{' '}
            <a href="https://fonts.google.com/">Google Fonts</a>
          </div>
        </div>
      </>
    )
  }
}
