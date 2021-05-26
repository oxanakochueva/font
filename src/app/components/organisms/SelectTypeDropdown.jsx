import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import TypeList from '../moleculas/TypeList'

export default class SelectTypeDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'closed'
    }
  }

  openSelect = () => {
    this.setState({
      status: 'opened'
    })
  }
  closeSelect = () => {
    this.setState({
      status: 'closed'
    })
  }

  render() {
    const {
      pairs,
      dropdown,
      select,
      handleClick,
      primary,
      actions,
      defaultValues
    } = this.props

    const { changeDefaultType, currentTypeOption } = actions
    const { typeOptions } = defaultValues

    const classes = classnames({
      selectType: true,
      opened: this.state.status === 'opened',
      closed: this.state.status === 'closed'
    })

    const localTypeOptions = []

    typeOptions.forEach((option, i) => {
      localTypeOptions.push(
        <TypeList
          type={option}
          pairs={pairs}
          actions={actions}
          defaultValues={defaultValues}
          dropdown={dropdown}
          primary={primary}
          key={i}
        />
      )
    })

    return (
      <div className={classes}>
        {this.state.status === 'opened' ? (
          <>
            <div className="selectTypeName" onClick={this.closeSelect}>
              {select}
              <div className="chevron up"></div>
            </div>
            <div className="TypeList">{localTypeOptions}</div>
          </>
        ) : this.state.status === 'closed' ? (
          <>
            <div className="selectTypeName" onClick={this.openSelect}>
              {select}
              <div className="chevron down"></div>
            </div>
          </>
        ) : (
          <>
            <div className="selectTypeName" onClick={this.closeSelect}>
              {select}
              <div className="chevron up"></div>
            </div>
            <div className="TypeList">{localTypeOptions}</div>
          </>
        )}
      </div>
    )
  }
}
