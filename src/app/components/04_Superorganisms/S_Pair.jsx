import React from 'react'
import ReactDOM from 'react-dom'

import A_Text from '../01_Atoms/A_Text'
import A_PairCover from '../01_Atoms/A_PairCover'
import O_FontInfo from '../03_Organisms/O_FontInfo'
import O_RecomendedPairs from '../03_Organisms/O_RecomendedPairs'

export default class S_Pair extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { pair, defaultValues, actions } = this.props
    const { families } = pair
    const { id, heading, cover } = pair.info

    const copyrightNotice =
      'Information from <a href="https://fonts.google.com" target="_blank">Google Fonts</a>'

    const fontInfoElements = pair.fonts.map(fontInfo => {
      return <O_FontInfo pair={pair} font={fontInfo} key={fontInfo.font.id} />
    })

    return (
      <div className="S_Pair">
        <A_Text type="h1" text={heading} fontFamily={families[0]} />
        <A_PairCover type="pageCover" image={cover} />

        {fontInfoElements}

        <O_RecomendedPairs defaultValues={defaultValues} actions={actions} />
        <A_Text type="small" text={copyrightNotice} fontFamily="PT Sans" />
      </div>
    )
  }
}
