import React from 'react'
import ReactDOM from 'react-dom'

import A_Text from '../01_Atoms/A_Text'
import A_PairCover from '../01_Atoms/A_PairCover'
import O_FontInfo from '../03_Organisms/O_FontInfo'

export default class S_Pair extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { pair, actions, defaultValues } = this.props
    const { families } = pair
    const { id, heading } = pair.info

    const fontInfoElements = pair.fonts.map(fontInfo => {
      return <O_FontInfo pair={pair} font={fontInfo} key={fontInfo.font.id} />
    })

    return (
      <div className="S_Pair">
        <A_Text type="h1" text={heading} fontFamily={families[0]} />

        <A_PairCover
          type="pageCover"
          image={require(`../../assets/images/pairs/articles/4x/${id}.png`)}
        />

        {fontInfoElements}

        {
          // <div className="pairContainer">
          //   <div
          //     className="pairHeader"
          //     style={{ fontFamily: fontFamilyOfPairs[0], fontWeight: 600 }}
          //   >
          //     {pairHeader}
          //   </div>
          //   <img
          //     className="pairCover"
          //     src={require(`../../assets/images/pairs/articles/4x/${currentPairId}.png`)}
          //   />
          //   <FontDescription
          //     font={fontElements.firstFont.font}
          //     paragraphs={fontElements.firstFont.fontParagraphs}
          //     designers={fontElements.firstFont.fontDesigners}
          //     fontFamily={fontFamilyOfPairs}
          //   />
          //   <FontDescription
          //     font={fontElements.secondFont.font}
          //     paragraphs={fontElements.secondFont.fontParagraphs}
          //     designers={fontElements.secondFont.fontDesigners}
          //     fontFamily={fontFamilyOfPairs}
          //   />
          //   <div className="otherPairings">
          //     <h2 style={{ fontFamily: fontFamilyOfPairs[0], fontWeight: 600 }}>
          //       Other pairings
          //     </h2>
          //     <FontPairRecomendation
          //       pairs={pairs}
          //       actions={actions}
          //       defaultValues={defaultValues}
          //     />
          //   </div>
          //   <div className="copyright">
          //     Information from{' '}
          //     <a href="https://fonts.google.com/">Google Fonts</a>
          //   </div>
          // </div>
        }
      </div>
    )
  }
}
