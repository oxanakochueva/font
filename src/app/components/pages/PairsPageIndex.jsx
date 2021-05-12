import React from 'react'
import ReactDOM from 'react-dom'
import FontPairList from '../organisms/FontPairList'
import FontFolder from '../organisms/FontFolder'
import SearchFolder from '../organisms/SearchFolder'
import PageNavigation from '../organisms/PageNavigation'

export default class PairsPageIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    let folderStatus = 'isClosed'
  }

  render() {
    const {
      pairs,
      folders,
      changeCardView,
      openPairPage,
      findFont,
      filtered,
      defaultCardView,
      changeDefaultView,
      selectViewOpened,
      toggleSelectView,
      selectViewOptions,
      openFolder,
      closeFolder,
      openedFolders,
      resetSearch,
      searchRequest,
      test
    } = this.props

    let folderContent = []

    if (filtered === 'no') {
      folders.sort().forEach((folder, i) => {
        folderContent.push(
          <FontFolder
            folder={folder}
            folders={folders}
            pairs={pairs}
            changeCardView={changeCardView}
            openPairPage={openPairPage}
            defaultCardView={defaultCardView}
            key={i}
            openFolder={openFolder}
            closeFolder={closeFolder}
            openedFolders={openedFolders}
            test={test}
          />
        )
      })
    } else if (filtered === 'yes') {
      folderContent.push(
        <SearchFolder
          pairs={pairs}
          changeCardView={changeCardView}
          openPairPage={openPairPage}
          searchRequest={searchRequest}
        />
      )
    }

    return (
      <>
        <PageNavigation
          pairs={pairs}
          resetSearch={resetSearch}
          findFont={findFont}
          page="index"
          searchRequest={searchRequest}
          defaultCardView={defaultCardView}
          changeDefaultView={changeDefaultView}
          selectViewOptions={selectViewOptions}
          toggleSelectView={toggleSelectView}
        />
        <div className="folder">{folderContent}</div>
      </>
    )
  }
}
