import React from 'react'
import ReactDOM from 'react-dom'
import FontPairList from '../organisms/FontPairList'
import FontFolder from '../organisms/FontFolder'

export default class PairsPageIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { pairs, changeCardView, openPairPage } = this.props

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
    // console.log(folderContent)
    // console.log(folders)

    return <div className="folder">{folderContent}</div>
  }
}
