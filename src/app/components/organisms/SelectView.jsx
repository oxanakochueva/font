import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import ViewList from '../moleculas/ViewList'

export default class SelectView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectStatus: 'isClosed'
    }
  }

  openSelect = () => {
    this.setState({
      selectStatus: 'isOpened'
    })
  }
  closeSelect = () => {
    this.setState({
      selectStatus: 'isClosed'
    })
  }

  render() {
    const { pairs, handleClick, actions, defaultValues } = this.props
    const { selectViewOptions, defaultCardView } = defaultValues

    const classes = classnames({
      selectView: true,
      opened: this.state.selectStatus === 'isOpened',
      closed: this.state.selectStatus === 'isClosed'
    })

    const viewOptions = []

    selectViewOptions.forEach((option, i) => {
      viewOptions.push(
        <ViewList
          viewType={option}
          // changeDefaultView={changeDefaultView}
          // defaultCardView={defaultCardView}
          pairs={pairs}
          actions={actions}
          defaultValues={defaultValues}
          key={i}
        />
      )
    })

    return (
      <div className={classes}>
        {this.state.selectStatus === 'isOpened' ? (
          <>
            <div className="selectViewName" onClick={this.closeSelect}>
              {defaultCardView[0].toUpperCase() + defaultCardView.substring(1)}
              <div className="chevron up"></div>
            </div>
            <div className="ViewList">{viewOptions}</div>
          </>
        ) : this.state.selectStatus === 'isClosed' ? (
          <>
            <div className="selectViewName" onClick={this.openSelect}>
              {defaultCardView[0].toUpperCase() + defaultCardView.substring(1)}
              <div className="chevron down"></div>
            </div>
          </>
        ) : (
          <>
            <div className="selectViewName" onClick={this.closeSelect}>
              Letters
              <div className="chevron up"></div>
            </div>
            <div className="ViewList">{viewOptions}</div>
          </>
        )}
      </div>
    )
  }
}
