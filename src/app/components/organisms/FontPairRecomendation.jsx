import React from 'react'
import ReactDOM from 'react-dom'
import FontPairRecomendationCard from './FontPairRecomendationCard'

export default class FontPairRecomendation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pairs, currentPairId, actions, defaultValues } = this.props
    const { recomendationList } = defaultValues
    let pairsRecomendation = []

    pairs.forEach((pair, i) => {
      if (pair.id != currentPairId) {
        pairsRecomendation.push(
          <FontPairRecomendationCard
            pair={pair}
            actions={actions}
            defaultValues={defaultValues}
            key={i}
          />
        )
      }
    })

    let pairsRecomendationList = []
    for (let k = 0; k < 3; k++) {
      let randomFontPair =
        pairsRecomendation[
          Math.floor(Math.random() * pairsRecomendation.length)
        ]
      pairsRecomendationList.push(randomFontPair)
    }
    console.log(recomendationList)

    return <div className="FontPairList">{pairsRecomendationList}</div>
  }
}
