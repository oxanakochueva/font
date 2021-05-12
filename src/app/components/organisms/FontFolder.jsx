import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import FontPairList from './FontPairList'

export default class FontFolder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    let folderStatus = 'isClosed'
  }

  render() {
    const {
      folder,
      folders,
      pairs,
      changeCardView,
      openPairPage,
      defaultCardView,
      openFolder,
      closeFolder,
      test
      // openedFolders
    } = this.props

    let { folderStatus, openedFolders } = this.props
    console.log(openedFolders)
    openedFolders.forEach((openedFolder, i) => {
      if (openedFolder === folder) {
        folderStatus = 'isOpened'
      }
    })

    const classes = classnames({
      fontFolder: true,
      opened: folderStatus === 'isOpened',
      closed: folderStatus === 'isClosed'
    })

    return (
      <div className={classes} id={folder}>
        {folderStatus === 'isOpened' ? (
          <>
            <div className="fontFolderName" style={{ fontFamily: folder }}>
              {folder}
              <div
                className="chevron up"
                onClick={() => closeFolder(folder)}
              ></div>
            </div>
            <FontPairList
              folder={folder}
              pairs={pairs}
              changeCardView={changeCardView}
              openPairPage={openPairPage}
              defaultCardView={defaultCardView}
            />
          </>
        ) : (
          <>
            <div className="fontFolderName" style={{ fontFamily: folder }}>
              {folder}
              <div
                className="chevron down"
                onClick={() => openFolder(folder)}
              ></div>
            </div>
          </>
        )}
      </div>
    )
  }
}
