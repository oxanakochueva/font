import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import A_PairCardContent from '../01_Atoms/A_PairCardContent'
import A_PairCardFooterTabButton from '../01_Atoms/A_PairCardFooterTabButton'
import A_PairCardPairName from '../01_Atoms/A_PairCardPairName'
import A_ToggleButton from '../01_Atoms/A_ToggleButton'

export default class O_PairCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pair, defaultValues, actions } = this.props
    const { id, heading } = pair
    const { openPage, favouritePair } = actions
    const { defaultView, favourites } = defaultValues
    const tabNames = ['letters', 'words', 'phrase']
    const pairCardFooterTabElements = []

    tabNames.forEach((name, i) => {
      const classes = classnames({
        W_PairCardFooterTab: true,
        active: defaultView === name,
        [`${name}`]: true
      })

      pairCardFooterTabElements.push(
        <div className={classes} key={i}>
          <A_PairCardContent id={id} />
          <A_PairCardFooterTabButton name={name} />
        </div>
      )
    })

    return (
      <div className="O_PairCard" id={id}>
        <A_ToggleButton
          type="favourites"
          toggle={favourites.includes(id)}
          handleClick={() => favouritePair(id)}
        />

        <div onClick={() => openPage(id)}>
          <div className="W_PairCardHeader">
            <A_PairCardPairName name={heading} />
          </div>

          <div className="C_PairCardFooter">{pairCardFooterTabElements}</div>
        </div>
      </div>
    )
  }
}
