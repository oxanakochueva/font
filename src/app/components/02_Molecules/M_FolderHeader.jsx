import React from 'react'
import ReactDOM from 'react-dom'

import A_FolderName from '../01_atoms/A_FolderName'

export default class M_FolderHeader extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { folder, handleClick } = this.props
    const { name } = folder

    return (
      <div className="M_FolderHeader" onClick={() => handleClick(name)}>
        <A_FolderName name={name} />
      </div>
    )
  }
}
