import React from 'react'
import ReactDOM from 'react-dom'

import S_Folder from '../04_Superorganisms/S_Folder'
import S_FilterBar from '../04_Superorganisms/S_FilterBar'

import A_Text from '../01_Atoms/A_Text'

// import FontPairList from '../organisms/FontPairList'
// import SearchFolder from '../organisms/SearchFolder'
// import PageNavigation from '../organisms/PageNavigation'

export default class T_PairsIndex extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { folders, defaultValues, actions } = this.props
    const folderElements = []

    if (folders.length === 0) {
      folderElements.push(
        <A_Text
          type="h3"
          text="Sorry, we didn’t find anything"
          fontFamily="PT Sans"
        />
      )
    } else {
      folders.forEach((folder, i) => {
        folderElements.push(
          <S_Folder
            folder={folder}
            defaultValues={defaultValues}
            actions={actions}
            key={i}
          />
        )
      })
    }

    return (
      <div className="T_PairsIndex">
        <S_FilterBar defaultValues={defaultValues} actions={actions} />
        <div className="C_FolderList">{folderElements}</div>
      </div>
    )
  }
}
