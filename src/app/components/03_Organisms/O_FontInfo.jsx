import React from 'react'
import ReactDOM from 'react-dom'

import A_Text from '../01_Atoms/A_Text'
import O_Designers from './O_Designers'

export default class O_FontInfo extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { pair, font } = this.props
    const { families } = pair
    const { fontParagraphs } = font
    const { heading } = font.font
    const fontDescriptionElements = []

    fontParagraphs.forEach((text, i) => {
      fontDescriptionElements.push(
        <A_Text
          type="p"
          text={text.bodyHTML}
          fontFamily={families[1]}
          key={i}
        />
      )
    })

    return (
      <div className="O_FontInfo">
        <div className="W_FontDescription">
          <A_Text type="h2" text={heading} fontFamily={families[0]} />
          <div className="C_FontDescriptionText">{fontDescriptionElements}</div>
        </div>

        <O_Designers pair={pair} font={font} />
      </div>
    )
  }
}
