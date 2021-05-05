import React from 'react'
import ReactDOM from 'react-dom'
import Search from '../atoms/Search'
import Select from '../atoms/Select'
import Button from '../atoms/Button'
import SelectView from '../organisms/SelectView'

export default class PageNavigation extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   selectViewOpened: false
    // }
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
      resetSearch,
      page,
      pairs,
      findFont,
      searchRequest,
      defaultCardView,
      selectViewOptions,
      selectViewOpened,
      toggleSelectView,
      changeDefaultView
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
        ) : page === 'index' ? (
          <div className="buttonsSet">
            <Search
              fieldAction={findFont}
              resetSearch={resetSearch}
              pairs={pairs}
              searchRequest={searchRequest}
            />
            <SelectView
              defaultCardView={defaultCardView}
              changeDefaultView={changeDefaultView}
              pairs={pairs}
              handleClick={toggleSelectView}
              selectViewOpened={selectViewOpened}
              selectViewOptions={selectViewOptions}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
