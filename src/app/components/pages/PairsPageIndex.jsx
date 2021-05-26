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
    const { pairs, folders, actions, defaultValues } = this.props

    const {
      changeCardView,
      openPairPage,
      openFolder,
      closeFolder,
      resetSearch,
      findFont
    } = actions

    const {
      defaultCardView,
      currentTypeOption,
      openedFolders,
      searchRequest,
      selectViewOptions,
      selectTypeOptions,
      selectTypeOpened,
      pairsLeft,
      pairsRight,
      pairsNew,
      from,
      to,
      filtered,
      currentPairId
    } = defaultValues

    let folderContent = []

    folders.sort().forEach((folder, i) => {
      folderContent.push(
        <FontFolder
          folder={folder}
          folders={folders}
          pairs={pairs}
          actions={actions}
          defaultValues={defaultValues}
          key={i}
        />
      )
    })

    // if (filtered === 'no') {
    //   console.log(folders)
    //   // folders.sort().forEach((folder, i) => {
    //   folders.forEach((folder, i) => {
    //     folderContent.push(
    //       <FontFolder
    //         folder={folder}
    //         folders={folders}
    //         pairs={pairs}
    //         actions={actions}
    //         defaultValues={defaultValues}
    //         key={i}
    //       />
    //     )
    //   })
    // } else if (filtered === 'yes') {
    //   folderContent.push(
    //     <SearchFolder
    //       pairs={pairs}
    //       actions={actions}
    //       defaultValues={defaultValues}
    //     />
    //   )
    // }

    return (
      <>
        <PageNavigation
          pairs={pairs}
          page="index"
          actions={actions}
          defaultValues={defaultValues}
        />

        <div className="folder">
          {filtered === 'yes' ? (
            <div className="fontFolderName" style={{ fontFamily: 'PT Sans' }}>
              {pairs.length} results for «{searchRequest}»
            </div>
          ) : (
            ''
          )}
          {folderContent}
        </div>
      </>
    )
  }
}
