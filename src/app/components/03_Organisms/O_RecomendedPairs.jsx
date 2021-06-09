import React from 'react'
import ReactDOM from 'react-dom'

import A_PairCover from '../01_Atoms/A_PairCover'

export default class O_RecomendedPairs extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { defaultValues, actions } = this.props
    const { recommendedPairs } = defaultValues
    const { openPage } = actions
    const recomendedPairElements = []

    recommendedPairs.forEach((pair, i) => {
      const { id, cover } = pair

      recomendedPairElements.push(
        <div onClick={() => openPage(id)} key={i}>
          <A_PairCover type="recomedationCover" image={cover} />
        </div>
      )
    })

    return <div className="O_RecomendedPairs">{recomendedPairElements}</div>
  }
}
