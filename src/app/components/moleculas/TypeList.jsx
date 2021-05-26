import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

export default class TypeList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      type,
      pairs,
      actions,
      defaultValues,
      dropdown,
      primary
    } = this.props

    const { currentTypeOption, changeDefaultType } = actions

    const classes = classnames({
      selectTypeItem: true,
      chosen: type === currentTypeOption
    })

    return (
      <div
        className={classes}
        onClick={() => changeDefaultType(type, dropdown, primary)}
      >
        {type}
      </div>
    )
  }
}
