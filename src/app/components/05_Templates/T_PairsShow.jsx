import React from 'react'
import ReactDOM from 'react-dom'

import S_NavigationBar from '../04_Superorganisms/S_NavigationBar'
import S_Pair from '../04_Superorganisms/S_Pair'

export default class T_PairsShow extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { pair, actions, defaultValues } = this.props

    return (
      <div className="T_PairsShow">
        <S_NavigationBar actions={actions} />
        <S_Pair pair={pair} defaultValues={defaultValues} actions={actions} />
      </div>
    )
  }
}
