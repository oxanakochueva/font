import React from 'react'
import ReactDOM from 'react-dom'

import A_Button from '../01_Atoms/A_Button'

export default class S_NavigationBar extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { openPage, exportPageToFigma } = this.props.actions

    return (
      <div className="S_NavigationBar">
        <A_Button
          type="leftIcon"
          icon="back"
          text="Back"
          handleClick={() => openPage('')}
        />

        <A_Button
          type="rightIcon"
          icon="export"
          text="Export to artboard"
          handleClick={exportPageToFigma}
        />
      </div>
    )
  }
}
