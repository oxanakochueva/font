import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import A_IconButton from '../01_Atoms/A_IconButton'

export default class M_SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleInputChange = () => {
    const { setSearchRequest } = this.props.actions
    const { value } = this.input.current
    setSearchRequest(value)
  }

  handleResetClick = () => {
    const { setSearchRequest } = this.props.actions
    setSearchRequest('')
  }

  renderResetButton = () => {
    return <A_IconButton type="cross" handleClick={this.handleResetClick} />
  }

  render() {
    const { defaultValues } = this.props
    const { searchRequest } = defaultValues

    return (
      <div className="M_SearchField">
        <input
          type="text"
          placeholder="I'm looking for..."
          spellCheck="false"
          value={searchRequest}
          ref={this.input}
          onChange={this.handleInputChange}
        />

        {searchRequest != '' ? this.renderResetButton() : ''}
      </div>
    )
  }
}
