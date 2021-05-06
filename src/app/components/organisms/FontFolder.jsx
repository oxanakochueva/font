import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import FontPairList from './FontPairList'

export default class FontFolder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      folderStatus: 'isClosed'
    }
  }

  openFolder = opened => {
    this.setState({
      folderStatus: 'isOpened'
    })
    this.setState({
      opened: true
    })
  }
  closeFolder = () => {
    this.setState({
      folderStatus: 'isClosed'
    })
  }

  render() {
    const {
      folder,
      pairs,
      changeCardView,
      openPairPage,
      defaultCardView,
      opened
    } = this.props

    console.log(opened)

    const classes = classnames({
      fontFolder: true,
      opened: this.state.folderStatus === 'isOpened',
      closed: this.state.folderStatus === 'isClosed'
    })

    return (
      <div className={classes} id={folder}>
        {this.state.folderStatus === 'isOpened' ? (
          <>
            <div className="fontFolderName" style={{ fontFamily: folder }}>
              {folder}
              <div
                className="chevron up"
                onClick={() => this.closeFolder()}
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
                onClick={() => this.openFolder(opened)}
              ></div>
            </div>
          </>
        )}
      </div>
    )
  }
}
