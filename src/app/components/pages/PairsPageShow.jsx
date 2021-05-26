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

  render() {
    const {
      fonts,
      pairs,
      paragraphs,
      designers,
      actions,
      defaultValues,
      currentPairInfo,
      fontElements
    } = this.props

    const {
      primaryFontFamily,
      secondaryFontFamily,
      fontList,
      pairHeader
    } = currentPairInfo

    const { openPairsPageIndex, exportPageToFigma, openPairsPageShow } = actions
    const { currentPairId, recomendationList } = defaultValues

    let fontFamilyOfPairs = []
    fontFamilyOfPairs.push(
      fontElements.firstFont.fontFamily,
      fontElements.secondFont.fontFamily
    )

    console.log('hello from show', this.props.currentPairInfo)

    return (
      <>
        <PageNavigation
          actions={actions}
          defaultValues={defaultValues}
          page="show"
        />

        <div className="pairContainer">
          <div
            className="pairHeader"
            style={{ fontFamily: fontFamilyOfPairs[0], fontWeight: 600 }}
          >
            {pairHeader}
          </div>
          <img
            className="pairCover"
            src={require(`../../assets/images/pairs/articles/4x/${currentPairId}.png`)}
          />
          <FontDescription
            font={fontElements.firstFont.font}
            paragraphs={fontElements.firstFont.fontParagraphs}
            designers={fontElements.firstFont.fontDesigners}
            fontFamily={fontFamilyOfPairs}
          />
          <FontDescription
            font={fontElements.secondFont.font}
            paragraphs={fontElements.secondFont.fontParagraphs}
            designers={fontElements.secondFont.fontDesigners}
            fontFamily={fontFamilyOfPairs}
          />
          <div className="otherPairings">
            <h2 style={{ fontFamily: fontFamilyOfPairs[0], fontWeight: 600 }}>
              Other pairings
            </h2>
            <FontPairRecomendation
              pairs={pairs}
              actions={actions}
              defaultValues={defaultValues}
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
