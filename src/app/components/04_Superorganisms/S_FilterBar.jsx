import React from 'react'
import ReactDOM from 'react-dom'

import M_SearchField from '../02_Molecules/M_searchField'
import M_Select from '../02_Molecules/M_Select'
import O_MultiSelect from '../03_Organisms/O_MultiSelect'

export default class S_FilterBar extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { defaultValues, actions } = this.props
    const { setFilterValue } = actions

    const {
      viewOptions,
      languageOptions,
      defaultView,
      language
    } = defaultValues

    return (
      <div className="S_FilterBar">
        <M_SearchField defaultValues={defaultValues} actions={actions} />

        <M_Select
          id="language"
          placeholder="Language"
          selectOptions={languageOptions}
          currentOption={language}
          handleClick={setFilterValue}
        />

        <O_MultiSelect defaultValues={defaultValues} actions={actions} />

        <M_Select
          id="defaultView"
          placeholder="View"
          selectOptions={viewOptions}
          currentOption={defaultView}
          handleClick={setFilterValue}
        />
      </div>
    )
  }
}
