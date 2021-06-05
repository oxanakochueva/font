import React from 'react'
import ReactDOM from 'react-dom'

import A_SelectButton from '../01_Atoms/A_SelectButton'
import A_SelectOptionItem from '../01_Atoms/A_SelectOptionItem'

export default class M_Select extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      id,
      placeholder,
      selectOptions,
      currentOption,
      handleClick
    } = this.props

    const selectOptionElements = []

    selectOptions.forEach((option, i) => {
      selectOptionElements.push(
        <A_SelectOptionItem
          text={option}
          active={option === currentOption}
          handleClick={() => handleClick(id, option)}
          key={i}
        />
      )
    })
    console.log('currentOption', currentOption, currentOption === '')

    return (
      <div className="M_Select">
        <A_SelectButton
          text={currentOption === '' ? placeholder : currentOption}
        />

        <div className="C_SelectOptions">{selectOptionElements}</div>
      </div>
    )
  }
}
