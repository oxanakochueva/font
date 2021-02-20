import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '../styles/reset.scss'
import * as styles from '../styles/ui.scss'
import '../styles/fonts.scss'

import Search from './atoms/A_Search'
import Select from './atoms/A_Select'
import CardImage from './atoms/CardImage'
import FontCard from './organisms/O_FontCard'
import Content from './organisms/O_Content'
import Star from './quarks/Q_Star'
import Navigation from './organisms/O_Navigation'

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
    this.state = {
      page: 'pairs',
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
      pairs: [
        {
          id: 'josefin_sans_cardo',
          view: 'letters',
          folder: 'Josefin Sans',
          favourite: false
        },
        {
          id: 'josefin_sans_abril_fatface',
          view: 'letters',
          folder: 'Josefin Sans',
          favourite: false
        },
        {
          id: 'josefin_sans_yeseva_one',
          view: 'letters',
          folder: 'Josefin Sans',
          favourite: false
        },
        {
          id: 'josefin_sans_lato',
          view: 'letters',
          folder: 'Josefin Sans',
          favourite: false
        },
        {
          id: 'josefin_sans_playfair',
          view: 'letters',
          folder: 'Josefin Sans',
          favourite: false
        },
        {
          id: 'josefin_sans_fira_mono',
          view: 'letters',
          folder: 'Josefin Sans',
          favourite: false
        },
        {
          id: 'lora_merriweather',
          view: 'letters',
          folder: 'Lora',
          favourite: false
        },
        {
          id: 'lora_source_sans_pro',
          view: 'letters',
          folder: 'Lora',
          favourite: false
        },
        {
          id: 'lora_roboto',
          view: 'letters',
          folder: 'Lora',
          favourite: false
        },
        {
          id: 'lora_ubuntu',
          view: 'letters',
          folder: 'Lora',
          favourite: false
        },
        {
          id: 'lora_alegreya',
          view: 'letters',
          folder: 'Lora',
          favourite: false
        },
        {
          id: 'lora_nunito',
          view: 'letters',
          folder: 'Lora',
          favourite: false
        },
        {
          id: 'ubuntu_lora',
          view: 'letters',
          folder: 'Ubuntu',
          favourite: false
        },
        {
          id: 'ubuntu_kreon',
          view: 'letters',
          folder: 'Ubuntu',
          favourite: false
        },
        {
          id: 'ubuntu_rokkitt',
          view: 'letters',
          folder: 'Ubuntu',
          favourite: false
        },
        {
          id: 'ubuntu_cabin',
          view: 'letters',
          folder: 'Ubuntu',
          favourite: false
        },
        {
          id: 'ubuntu_source_sans_pro',
          view: 'letters',
          folder: 'Ubuntu',
          favourite: false
        },
        {
          id: 'ubuntu_prompt',
          view: 'letters',
          folder: 'Ubuntu',
          favourite: false
        },
        {
          id: 'nunito_alegreya',
          view: 'letters',
          folder: 'Nunito',
          favourite: false
        },
        {
          id: 'nunito_lora',
          view: 'letters',
          folder: 'Nunito',
          favourite: false
        },
        {
          id: 'nunito_roboto',
          view: 'letters',
          folder: 'Nunito',
          favourite: false
        },
        {
          id: 'nunito_open_sans',
          view: 'letters',
          folder: 'Nunito',
          favourite: false
        },
        {
          id: 'source_sans_pro_ubuntu',
          view: 'letters',
          folder: 'Source Sans Pro',
          favourite: false
        },
        {
          id: 'source_sans_pro_lora',
          view: 'letters',
          folder: 'Source Sans Pro',
          favourite: false
        },
        {
          id: 'source_sans_pro_montserrat',
          view: 'letters',
          folder: 'Source Sans Pro',
          favourite: false
        },
        {
          id: 'source_sans_pro_alegreya',
          view: 'letters',
          folder: 'Source Sans Pro',
          favourite: false
        },
        {
          id: 'roboto_archivo',
          view: 'letters',
          folder: 'Roboto',
          favourite: false
        },
        {
          id: 'roboto_lora',
          view: 'letters',
          folder: 'Roboto',
          favourite: false
        },
        {
          id: 'roboto_rokkitt',
          view: 'letters',
          folder: 'Roboto',
          favourite: false
        },
        {
          id: 'roboto_nunito',
          view: 'letters',
          folder: 'Roboto',
          favourite: false
        },
        {
          id: 'roboto_raleway',
          view: 'letters',
          folder: 'Roboto',
          favourite: false
        },
        {
          id: 'roboto_space_mono',
          view: 'letters',
          folder: 'Roboto',
          favourite: false
        },
        {
          id: 'open_sans_montserrat',
          view: 'letters',
          folder: 'Open Sans',
          favourite: false
        },
        {
          id: 'open_sans_bitter',
          view: 'letters',
          folder: 'Open Sans',
          favourite: false
        },
        {
          id: 'open_sans_domine',
          view: 'letters',
          folder: 'Open Sans',
          favourite: false
        },
        {
          id: 'open_sans_source_sans_pro',
          view: 'letters',
          folder: 'Open Sans',
          favourite: false
        },
        {
          id: 'raleway_merriweather',
          view: 'letters',
          folder: 'Raleway',
          favourite: false
        },
        {
          id: 'raleway_bitter',
          view: 'letters',
          folder: 'Raleway',
          favourite: false
        },
        {
          id: 'raleway_cabin',
          view: 'letters',
          folder: 'Raleway',
          favourite: false
        },
        {
          id: 'raleway_roboto',
          view: 'letters',
          folder: 'Raleway',
          favourite: false
        },
        {
          id: 'raleway_open_sans',
          view: 'letters',
          folder: 'Raleway',
          favourite: false
        },
        {
          id: 'raleway_pt_sans',
          view: 'letters',
          folder: 'Raleway',
          favourite: false
        },
        {
          id: 'lato_abril_fatface',
          view: 'letters',
          folder: 'Lato',
          favourite: false
        },
        {
          id: 'lato_karla',
          view: 'letters',
          folder: 'Lato',
          favourite: false
        },
        {
          id: 'lato_merriweather',
          view: 'letters',
          folder: 'Lato',
          favourite: false
        },
        {
          id: 'lato_francois_one',
          view: 'letters',
          folder: 'Lato',
          favourite: false
        },
        {
          id: 'montserrat_source_sans_pro',
          view: 'letters',
          folder: 'Montserrat',
          favourite: false
        },
        {
          id: 'montserrat_karla',
          view: 'letters',
          folder: 'Montserrat',
          favourite: false
        },
        {
          id: 'montserrat_fira_sans',
          view: 'letters',
          folder: 'Montserrat',
          favourite: false
        },
        {
          id: 'montserrat_cabin',
          view: 'letters',
          folder: 'Montserrat',
          favourite: false
        },
        {
          id: 'montserrat_hind',
          view: 'letters',
          folder: 'Montserrat',
          favourite: false
        },
        {
          id: 'montserrat_inconsolata',
          view: 'letters',
          folder: 'Montserrat',
          favourite: false
        }
      ],
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
      test: 'letters'
    }

    this.onCreate = this.onCreate.bind(this)
    this.changeView = this.changeView.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  onCreate = () => {
    //написать чтобы выбиралась конкретная штука
    parent.postMessage({ pluginMessage: { type: 'create-article' } }, '*')
  }
  // <Navigation selectContents={selectContents} />

  changeView(e, pair) {
    console.log(pair)
    console.log('hover')
    console.log(e.target)

    e.target.classList.contains('active')
      ? (e.target.classList.remove('active'),
        this.setState({
          test: e.target.id
        }))
      : (e.target.classList.add('active'),
        this.setState({
          test: e.target.id
        }))
    console.log(this.state.test)

    pair.view == 'words' ? console.log('change') : ''
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
    let view = this.state.pairs.view

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

    let pairCard = pairs.map((pair, i) => (
      <div key={i} className="fontPairCard" id={pair.folder}>
        <div key={i} className="top">
          <div key={i} className="pairName">
            {pair.heading}
          </div>
        </div>
        <CardImage pair={pair.id} folder={pair.folder} view={this.state.test} />
        <div className="tabs">
          <div
            id="letters"
            className="tab letters active"
            onMouseOver={e => this.changeView(e, pair)}
            onMouseOut={e => this.mouseOut(e, pair)}
          >
            Letters
          </div>
          <div
            id="words"
            className="tab words"
            onMouseOver={e => this.changeView(e, pair)}
            onMouseOut={e => this.mouseOut(e, pair)}
          >
            Words
          </div>
          <div
            id="phrase"
            className="tab phrase"
            onMouseOver={e => this.changeView(e, pair)}
            onMouseOut={e => this.mouseOut(e, pair)}
          >
            Phrase
          </div>
        </div>
      </div>
      //</div>
    ))
    let cards = []

    cards.push(pairCard)
    return (
      <div>
        <div className="container">
          <button id="export" onClick={this.onCreate}>
            Export
          </button>
          <div className="folder">{folder}</div>
          <FontCard pair={pairCard} />
          <Content fonts={fonts} />
        </div>
      </div>
    )
  }
}
