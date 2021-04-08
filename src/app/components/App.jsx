import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as styles from '../styles/ui.scss'

import FontPairCard from './organisms/FontPairCard'
import FontPairList from './organisms/FontPairList'
import PairsPageShow from './pages/PairsPageShow'
import PairsPageIndex from './pages/PairsPageIndex'

import { fonts } from '../library/fonts_library.js'
import { pairs } from '../library/pairs_library.js'

const selectContents = [
  {
    selectType: 'language',
    selectTypeList: ['Cyrillic', 'Latin']
  },
  {
    selectType: 'font',
    selectTypeList: ['Serif', 'Sans Serif', 'Mono']
  },
  {
    selectType: 'view',
    selectTypeList: ['Letters', 'Words', 'Phrase']
  }
]

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
      search: {
        input_text: 'what is now in input',
        query: 'what you searched for'
      },
      language: 'en',
      font: {
        serif: 'sans_serif',
        serif: 'serif',
        mono: 'mono'
      },
      dafaultView: 'letters',
      filtered: 'no',
      filteredPairs: [],
      searchRequest: ''
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
    console.log(currentPairId)
    parent.postMessage(
      {
        pluginMessage: {
          type: 'font-pair-export',
          pair: currentPairId,
          language: this.state.language
        }
      },
      '*'
    )
  }

  findFont = e => {
    let currentList = pairs
    let newList = []
    let filter = ''
    console.log('hi')

    if (e.target.value !== '') {
      console.log(currentList)

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
    const { pairs } = this.state
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

  render() {
    console.log(fonts)
    const { filteredPairs, searchRequest, filtered } = this.state
    console.log(filteredPairs)
    return (
      <div>
        <div className="container">
          {this.state.page === 'pairs' ? (
            this.state.filtered === 'no' ? (
              <div>
                <PairsPageIndex
                  pairs={pairs}
                  changeCardView={this.changeCardView}
                  openPairPage={this.openPairPage}
                  findFont={this.findFont}
                  filtered={filtered}
                />
              </div>
            ) : this.state.filtered === 'yes' ? (
              <div>
                <PairsPageIndex
                  pairs={filteredPairs}
                  changeCardView={this.changeCardView}
                  openPairPage={this.openPairPage}
                  findFont={this.findFont}
                  filtered={filtered}
                  searchRequest={searchRequest}
                  resetSearch={this.resetSearch}
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
                currentPairId={this.state.currentPairId}
                exportPageToFigma={this.exportPageToFigma}
                openPairsPageIndex={this.openPairsPageIndex}
                openPairPage={this.openPairPage}
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
