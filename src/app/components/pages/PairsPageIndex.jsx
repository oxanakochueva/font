import React from 'react'
import ReactDOM from 'react-dom'
import FontPairList from '../organisms/FontPairList'
import FontFolder from '../organisms/FontFolder'
import SearchFolder from '../organisms/SearchFolder'
import PageNavigation from '../organisms/PageNavigation'

export default class PairsPageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { folders, actions, defaultValues } = this.props

    const {
      changeCardView,
      openPairsPageShow,
      openFolder,
      closeFolder,
      resetSearch,
      setSearchRequest
    } = actions

    const {
      defaultCardView,
      currentTypeOption,
      openedFolders,
      searchRequest,
      viewOptions,
      typeOptions,
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

    // перенести наверх и добавить сортировку по name
    folders.forEach((folder, i) => {
      folderContent.push(
        <FontFolder
          folder={folder}
          actions={actions}
          defaultValues={defaultValues}
          key={i}
        />
      )
    })

    let length = 0

    if (folders.length > 0) {
      length = folders[0].pairs.length
    }

    return (
      <>
        <PageNavigation
          page="index"
          actions={actions}
          defaultValues={defaultValues}
        />

        <div className="foldersWrapper">
          {filtered === true ? (
            // перенести в компонент FontFolder
            <div className="fontFolderName" style={{ fontFamily: 'PT Sans' }}>
              {length} results for «{searchRequest}»
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
