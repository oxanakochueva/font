import React from 'react'
import ReactDOM from 'react-dom'

import M_Select from '../02_Molecules/M_Select'

export default class O_MultiSelect extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { defaultValues, actions } = this.props
    const { typeOptions, primaryFont, secondaryFont } = defaultValues
    const { setFilterValue } = actions

    return (
      <div className="O_MultiSelect">
        <M_Select
          id="primaryFont"
          placeholder="Primary"
          selectOptions={typeOptions}
          currentOption={primaryFont}
          handleClick={setFilterValue}
          key="primaryFont"
        />

        <div className="Q_MultiSelectDivider">+</div>

        <M_Select
          id="secondaryFont"
          placeholder="Secondary"
          selectOptions={typeOptions}
          currentOption={secondaryFont}
          handleClick={setFilterValue}
          key="secondaryFont"
        />
      </div>
    )
  }
}
