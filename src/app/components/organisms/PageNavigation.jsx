import React from 'react'
import ReactDOM from 'react-dom'
import Search from '../atoms/Search'
import Select from '../atoms/Select'
import Button from '../atoms/Button'
import SelectView from '../organisms/SelectView'
import SelectType from '../organisms/SelectType'

export default class PageNavigation extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   selectViewOpened: false
    // }
  }
  exportPageToFigma = () => {
    const { defaultValues, actions } = this.props
    actions.exportPageToFigma(defaultValues.currentPairId)
    console.log(defaultValues.currentPairId)
  }

  render() {
    const { page, pairs, actions, defaultValues } = this.props

    const {
      openPairsPageIndex,
      toggleSelectType,
      changeDefaultLeftType,
      changeDefaultRightType,
      changeDefaultView,
      toggleSelectView,
      resetSearch
    } = actions

    const { searchRequest } = defaultValues

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
              handleInputChange={actions.setSearchRequest}
              handleResetSearch={actions.resetSearch}
              defaultValues={defaultValues}
            />

            <SelectType
              // typeOptions={typeOptions}
              pairs={pairs}
              // currentTypeOption={currentTypeOption}
              // selectTypeOpened={selectTypeOpened}
              // handleClick={toggleSelectType}
              // pairsLeft={pairsLeft}
              // pairsRight={pairsRight}
              // pairsNew={pairsNew}
              // changeDefaultLeftType={changeDefaultLeftType}
              // changeDefaultRightType={changeDefaultRightType}
              // from={from}
              // to={to}
              actions={actions}
              defaultValues={defaultValues}
            />

            <SelectView
              // defaultCardView={defaultCardView}
              // changeDefaultView={changeDefaultView}
              pairs={pairs}
              handleClick={toggleSelectView}
              // selectViewOpened={selectViewOpened}
              // viewOptions={viewOptions}
              actions={actions}
              defaultValues={defaultValues}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
