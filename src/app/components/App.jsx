import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as styles from '../styles/ui.scss'

import FontPairCard from './organisms/FontPairCard'
import PairsPageShow from './pages/PairsPageShow'
import PairsPageIndex from './pages/PairsPageIndex'

import { fonts, pairs } from '../font_library.js'

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
      dafaultView: 'letters'
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
      { pluginMessage: { type: currentPairId, language: this.state.language } },
      '*'
    )
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
    return (
      <div>
        <div className="container">
          {this.state.page === 'pairs' ? (
            <div>
              <PairsPageIndex
                pairs={pairs}
                changeCardView={this.changeCardView}
                openPairPage={this.openPairPage}
              />
            </div>
          ) : this.state.page === 'article' ? (
            <div className="wrapper">
              <PairsPageShow
                fonts={fonts}
                pairs={pairs}
                currentPairId={this.state.currentPairId}
                exportPageToFigma={this.exportPageToFigma}
                openPairsPageIndex={this.openPairsPageIndex}
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
