import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as styles from '../styles/ui.scss'

import FontPairCard from './organisms/FontPairCard'
import FontPairList from './organisms/FontPairList'
import PairsPageShow from './pages/PairsPageShow'
import PairsPageIndex from './pages/PairsPageIndex'

import { fonts } from '../library/fonts_library.js'
import { pairs } from '../library/pairs_library.js'
import { paragraphs } from '../library/paragraphs.js'
import { designers } from '../library/designers.js'
import { notifications } from '../library/notifications.js'

export default class App extends React.Component {
  constructor(params) {
    super(params)

    pairs.map((pair, i) => {
      pair.view = 'letters'
      return pair
    })

    this.state = {
      pairs: pairs,
      page: 'pairs',
      currentPairId: '',
      language: 'en',
      defaultView: 'letters',
      filtered: 'no',
      filteredPairs: [],
      searchRequest: '',
      selectViewOptions: ['letters', 'words', 'phrase'],
      selectViewOpened: false,
      folders: [
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
      ],
      recomendationList: [],
      openedFolders: [],
      test: false
    }
  }

  openPairPage = pairId => {
    this.setState({
      page: 'article',
      currentPairId: pairId
    })
  }

  openPairsPageIndex = () => {
    this.setState({
      page: 'pairs',
      currentPairId: ''
    })
  }

  backToPairsPage = () => {}

  exportPageToFigma = currentPairId => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'font-pair-export',
          pair: currentPairId,
          language: this.state.language,
          recomendationList: this.state.recomendationList
        }
      },
      '*'
    )
  }

  findFont = e => {
    let currentList = pairs
    let newList = []
    let filter = ''

    if (e.target.value !== '') {
      currentList.filter(pair => {
        const font = pair.heading.toLowerCase()
        filter = e.target.value.toLowerCase()

        if (font.includes(filter)) {
          newList.push(pair)
        }
      })

      this.setState({
        filteredPairs: newList,
        filtered: 'yes',
        searchRequest: filter
      })
    }
    console.log(newList)
  }

  resetSearch = () => {
    this.setState({
      filtered: 'no'
    })
  }

  changeCardView = (pairId, view) => {
    const { pairs, defaultView } = this.state
    let nextPairs = []

    pairs.forEach((pair, i) => {
      if (pair.id === pairId) {
        pair.view = view
      }

      nextPairs.push(pair)
    })

    this.setState({
      pairs: nextPairs
    })
  }

  changeDefaultView = (type, pairs) => {
    console.log('wait', type, this.state.defaultView)

    pairs.forEach((pair, i) => {
      pair.view = type
    })

    this.setState({
      defaultView: type
    })
  }

  //   toggleSelect(name) {
  //   if (name == 'openedFrom') {
  //     this.setState({
  //       fromSelectOpen: true
  //     })
  //   }
  //   if (name == 'openedTo') {
  //     this.setState({
  //       toSelectOpen: true
  //     })
  //   }
  // }

  toggleSelectView = () => {
    console.log('hello')
    let selectState = this.state.selectViewOpened
    if (selectState == true) {
      this.setState({
        selectViewOpened: false
      })
    } else {
      this.setState({
        selectViewOpened: true
      })
    }
  }

  openFolder = folder => {
    let { folders, openedFolders, test } = this.state

    folders.forEach((fold, i) => {
      if (fold === folder) {
        openedFolders.push(fold)
        this.setState({
          test: true
        })
      }

      // console.log(openedFolders)
    })
  }

  closeFolder = folder => {
    let { folders, openedFolders } = this.state

    openedFolders.forEach((fold, i) => {
      console.log(folder)
      if (fold === folder) {
        openedFolders.splice(i, 1)
        this.setState({
          test: false
        })
      }
    })
  }

  render() {
    console.log(fonts)
    const {
      pairs,
      folders,
      filteredPairs,
      searchRequest,
      filtered,
      selectViewOpened,
      selectViewOptions,
      defaultView,
      recomendationList,
      openedFolders,
      test
    } = this.state

    return (
      <div>
        <div className="container">
          {this.state.page === 'pairs' ? (
            this.state.filtered === 'no' ? (
              <div>
                <PairsPageIndex
                  pairs={pairs}
                  folders={folders}
                  changeCardView={this.changeCardView}
                  openPairPage={this.openPairPage}
                  findFont={this.findFont}
                  filtered={filtered}
                  defaultCardView={defaultView}
                  changeDefaultView={this.changeDefaultView}
                  selectViewOpened={selectViewOpened}
                  toggleSelectView={this.toggleSelectView}
                  selectViewOptions={selectViewOptions}
                  openFolder={this.openFolder}
                  closeFolder={this.closeFolder}
                  openedFolders={openedFolders}
                  test={test}
                />
              </div>
            ) : this.state.filtered === 'yes' ? (
              <div>
                <PairsPageIndex
                  pairs={filteredPairs}
                  folders={folders}
                  searchRequest={searchRequest}
                  resetSearch={this.resetSearch}
                  pairs={pairs}
                  changeCardView={this.changeCardView}
                  openPairPage={this.openPairPage}
                  findFont={this.findFont}
                  filtered={filtered}
                  defaultCardView={defaultView}
                  changeDefaultView={this.changeDefaultView}
                  selectViewOpened={selectViewOpened}
                  toggleSelectView={this.toggleSelectView}
                  selectViewOptions={selectViewOptions}
                  openedFolders={openedFolders}
                />
              </div>
            ) : (
              ''
            )
          ) : this.state.page === 'article' ? (
            <div className="wrapper">
              <PairsPageShow
                fonts={fonts}
                pairs={pairs}
                paragraphs={paragraphs}
                designers={designers}
                currentPairId={this.state.currentPairId}
                exportPageToFigma={this.exportPageToFigma}
                openPairsPageIndex={this.openPairsPageIndex}
                openPairPage={this.openPairPage}
                recomendationList={recomendationList}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}
