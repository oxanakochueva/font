import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

export default class ViewList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { viewType, pairs, actions, defaultValues } = this.props
    const { defaultCardView } = defaultValues
    const { changeDefaultView } = actions

    const classes = classnames({
      selectViewItem: true,
      chosen: viewType === defaultCardView
    })

    return (
      <div
        className={classes}
        onClick={() => changeDefaultView(viewType, pairs)}
      >
        {viewType[0].toUpperCase() + viewType.substring(1)}
      </div>
    )
  }
}
