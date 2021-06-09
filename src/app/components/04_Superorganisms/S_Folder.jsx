import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import M_FolderHeader from '../02_Molecules/M_FolderHeader'
import O_PairCard from '../03_Organisms/O_PairCard'

export default class S_Folder extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  renderPairsCollection = () => {
    const { folder, defaultValues, actions } = this.props
    const { pairs } = folder
    const pairElements = []

    pairs.forEach((pair, i) => {
      pairElements.push(
        <O_PairCard
          pair={pair}
          defaultValues={defaultValues}
          actions={actions}
          key={i}
        />
      )
    })

    return <div className="C_PairCards">{pairElements}</div>
  }

  render() {
    const { folder, actions, defaultValues } = this.props
    const { name, pairs } = folder
    const { openedFolders } = defaultValues
    const isActive = openedFolders.includes(name)

    const classes = classnames({
      S_Folder: true,
      active: isActive
    })

    return (
      <div className={classes}>
        <M_FolderHeader folder={folder} handleClick={actions.toggleFolder} />
        {isActive ? this.renderPairsCollection() : ''}
      </div>
    )
  }
}
