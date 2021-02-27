import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '../styles/reset.scss'
import * as styles from '../styles/ui.scss'
import '../styles/fonts.scss'

import Search from './atoms/A_Search'
import Select from './atoms/A_Select'
import CardImage from './atoms/CardImage'
import FontCard from './organisms/FontCard'
import Star from './quarks/Q_Star'
import Navigation from './organisms/Navigation'
import PairsShow from './pages/PairsShow'
import PairsIndex from './pages/PairsIndex'

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
      dafaultView: 'letters',
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
      ]
    }

    this.onCreate = this.onCreate.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  onCreate = () => {
    //написать чтобы выбиралась конкретная штука
    parent.postMessage({ pluginMessage: { type: 'create-article' } }, '*')
  }
  // <Navigation selectContents={selectContents} />

  openPairShow = pairId => {
    this.setState({
      page: 'article',
      currentPairId: pairId
    })
  }

  openPairsIndex = () => {
    this.setState({
      page: 'pairs',
      currentPairId: ''
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

  mouseOut(e, pair) {
    e.preventDefault()
    e.target.classList.remove('active'),
      this.setState({
        test: 'letters'
      })
  }

  render() {
    let folders = this.state.folders.sort()

    let folder = folders.map((folder, i) => (
      <div key={i} id={folder} className="fontPairFolder">
        <div
          key={i}
          className="fontPairFolderName"
          style={{ fontFamily: folder }}
        >
          {folder}
        </div>
        <div className="chevron down"></div>
      </div>
    ))

    return (
      <div>
        <div className="container">
          <button id="export" onClick={this.onCreate}>
            Export
          </button>
          <button id="back" onClick={this.openPairsIndex}>
            Back
          </button>
          {this.state.page === 'pairs' ? (
            <div>
              <div className="folder">{folder}</div>
              <PairsIndex
                pairs={pairs}
                changeCardView={this.changeCardView}
                openPairShow={this.openPairShow}
              />
            </div>
          ) : this.state.page === 'article' ? (
            <PairsShow
              fonts={fonts}
              pairs={pairs}
              currentPairId={this.state.currentPairId}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}
