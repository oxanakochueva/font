import React from 'react'
import ReactDOM from 'react-dom'
import FontDescription from '../organisms/FontDescription'
import PageNavigation from '../organisms/PageNavigation'
import FontPairRecomendation from '../organisms/FontPairRecomendation'

export default class PairsPageShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderFont = (font, fontFamily) => {
    const { paragraphs, designers } = this.props

    let fontParagraphs = []
    paragraphs.forEach((paragraph, i) => {
      if (paragraph.font_id === font.id) {
        fontParagraphs.push(paragraph)
      }
    })

    let fontDesigners = []
    font.designers.forEach((id, i) => {
      designers.forEach((designer, i) => {
        if (id === designer.id) {
          fontDesigners.push(designer)
        }
      })
    })

    return (
      <FontDescription
        font={font}
        paragraphs={fontParagraphs}
        designers={fontDesigners}
        fontFamily={fontFamily}
        key={font.id}
      />
    )
  }

  render() {
    const {
      fonts,
      pairs,
      paragraphs,
      designers,
      currentPairId,
      exportPageToFigma,
      openPairsPageIndex,
      pairsInCurrentFolder,
      openPairPage,
      recomendationList
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

    fonts.forEach((font, i) => {
      if (font.id === fontList[0]) {
        fontFamily.push(font.heading)
      }
    })

    fonts.forEach((font, i) => {
      if (font.id === fontList[1]) {
        fontFamily.push(font.heading)
      }
    })

    fonts.forEach((font, i) => {
      if (font.id === fontList[0]) {
        fontElements.push(this.renderFont(font, fontFamily))
      }
    })

    fonts.forEach((font, i) => {
      if (font.id === fontList[1]) {
        fontElements.push(this.renderFont(font, fontFamily))
      }
    })

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

          <img
            className="pairCover"
            src={require(`../../assets/images/pairs/articles/4x/${currentPairId}.png`)}
          />
          {fontElements}
          <div className="otherPairings">
            <h2 style={{ fontFamily: fontFamily[0], fontWeight: 600 }}>
              Other pairings
            </h2>
            <FontPairRecomendation
              pairs={pairs}
              currentPairId={currentPairId}
              openPairPage={openPairPage}
              recomendationList={recomendationList}
            />
          </div>
          <div className="copyright">
            Information from{' '}
            <a href="https://fonts.google.com/">Google Fonts</a>
          </div>
        </div>
      </>
    )
  }
}
