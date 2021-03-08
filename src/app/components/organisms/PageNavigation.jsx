import React from 'react'
import ReactDOM from 'react-dom'
import Search from '../atoms/Search'
import Select from '../atoms/Select'
import Button from '../atoms/Button'

export default class PageNavigation extends React.Component {
  constructor(props) {
    super(props)
  }
  exportPageToFigma = () => {
    const { currentPairId, exportPageToFigma } = this.props
    exportPageToFigma(currentPairId)
  }

  render() {
    let {
      openPairsPageIndex,
      exportPageToFigma,
      currentPairId,
      page
    } = this.props
    return (
      <div className="PageNavigation">
        {page === 'show' ? (
          <div className="buttonsSet">
            <div className="buttonsLeft">
              <Button
                buttonAction={openPairsPageIndex}
                buttonName="Back"
                leftIcon="chevronLeft"
                rightIcon=""
              />
            </div>
            <div className="buttonsRight">
              <Button
                buttonAction={this.exportPageToFigma}
                buttonName="Export to artboard"
                leftIcon=""
                rightIcon="exportIcon"
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
