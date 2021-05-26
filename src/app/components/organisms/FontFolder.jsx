import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import FontPairList from './FontPairList'

export default class FontFolder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { folder, pairs, actions, defaultValues } = this.props

    let folderStatus = 'isClosed'

    const {
      changeCardView,
      openPairsPageShow,
      openFolder,
      closeFolder
    } = actions

    const { openedFolders, defaultCardView } = defaultValues

    openedFolders.forEach((openedFolder, i) => {
      if (openedFolder === folder.name) {
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
            <div
              className="fontFolderName"
              style={{ fontFamily: folder.name }}
              onClick={() => closeFolder(folder.name)}
            >
              {folder.name}
              <div className="chevron up"></div>
            </div>
            <FontPairList
              folder={folder}
              actions={actions}
              defaultValues={defaultValues}
            />
          </>
        ) : (
          <>
            <div
              className="fontFolderName"
              style={{ fontFamily: folder.name }}
              onClick={() => openFolder(folder.name)}
            >
              {folder.name}
              <div className="chevron down"></div>
            </div>
          </>
        )}
      </div>
    )
  }
}
