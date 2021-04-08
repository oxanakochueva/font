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
  }

  render() {
    const {
      folder,
      pairs,
      changeCardView,
      openPairPage,
      findFont,
      filtered,
      searchRequest,
      resetSearch
    } = this.props

    let folders = [
      'Josefin Sans',
      'Lora',
      'Ubuntu',
      'Nunito',
      'Source Sans Pro',
      'Roboto',
      'Open Sans',
      'Raleway',
      'Lato',
      'Montserrat'
    ]

    let folderContent = []

    if (filtered === 'no') {
      folders.sort().forEach((folder, i) => {
        folderContent.push(
          <FontFolder
            folder={folder}
            pairs={pairs}
            changeCardView={changeCardView}
            openPairPage={openPairPage}
            key={i}
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

    console.log(folderContent)
    console.log(folders)

    return (
      <>
        <PageNavigation
          pairs={pairs}
          resetSearch={resetSearch}
          findFont={findFont}
          page="index"
          searchRequest={searchRequest}
        />
        <div className="folder">{folderContent}</div>
      </>
    )
  }
}
