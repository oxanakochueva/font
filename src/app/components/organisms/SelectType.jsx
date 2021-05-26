import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import SelectTypeDropdown from '../organisms/SelectTypeDropdown'

export default class SelectType extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pairs, actions, defaultValues } = this.props
    const { toggleSelectType, changeDefaultType } = actions
    const {
      typeOptions,
      currentTypeOption,
      selectTypeOpened,
      pairsLeft,
      pairsRight,
      from,
      to
    } = defaultValues

    return (
      <div className="type">
        <SelectTypeDropdown
          pairs={pairs}
          dropdown={pairsLeft}
          select={from}
          actions={actions}
          handleClick={toggleSelectType}
          defaultValues={defaultValues}
          primary={'primary'}
        />
        +
        <SelectTypeDropdown
          pairs={pairs}
          actions={actions}
          handleClick={toggleSelectType}
          defaultValues={defaultValues}
          dropdown={pairsRight}
          select={to}
          primary={'secondary'}
        />
      </div>
    )
  }
}
