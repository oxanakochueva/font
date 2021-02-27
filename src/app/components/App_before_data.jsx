import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '../styles/reset.scss'
import * as styles from '../styles/ui.scss'
import '../styles/fonts.scss'

import Search from './atoms/A_Search'
import Select from './atoms/A_Select'
import FontCard from './organisms/FontCard'
import Star from './quarks/Q_Star'
import Navigation from './organisms/Navigation'

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

const fontPairs = [
  {
    pairName: 'Josefin Sans + Abril Fatface',
    folder: 'Josefin Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Josefin Sans + Cardo',
    folder: 'Josefin Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Josefin Sans + Fira Mono',
    folder: 'Josefin Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Josefin Sans + Lato',
    folder: 'Josefin Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Josefin Sans + Playfair',
    folder: 'Josefin Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Josefin Sans + Yeseva One',
    folder: 'Josefin Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Lato + Abril Fatface',
    folder: 'Lato',
    category: '',
    language: []
  },
  {
    pairName: 'Lato + Francois One',
    folder: 'Lato',
    category: '',
    language: []
  },
  {
    pairName: 'Lato + Karla',
    folder: 'Lato',
    category: '',
    language: []
  },
  {
    pairName: 'Lato + Merriweather',
    folder: 'Lato',
    category: '',
    language: []
  },
  {
    pairName: 'Lora + Alegreya',
    folder: 'Lora',
    category: '',
    language: []
  },
  {
    pairName: 'Lora + Merriweather',
    folder: 'Lora',
    category: '',
    language: []
  },
  {
    pairName: 'Lora + Nunito',
    folder: 'Lora',
    category: '',
    language: []
  },
  {
    pairName: 'Lora + Roboto',
    folder: 'Lora',
    category: '',
    language: []
  },
  {
    pairName: 'Lora + Source Sans Pro',
    folder: 'Lora',
    category: '',
    language: []
  },
  {
    pairName: 'Lora + Ubuntu',
    folder: 'Lora',
    category: '',
    language: []
  },
  {
    pairName: 'Montserrat + Cabin',
    folder: 'Montserrat',
    category: '',
    language: []
  },
  {
    pairName: 'Montserrat + Fira Sans',
    folder: 'Montserrat',
    category: '',
    language: []
  },
  {
    pairName: 'Montserrat + Hind',
    folder: 'Montserrat',
    category: '',
    language: []
  },
  {
    pairName: 'Montserrat + Inconsolata',
    folder: 'Montserrat',
    category: '',
    language: []
  },
  {
    pairName: 'Montserrat + Karla',
    folder: 'Montserrat',
    category: '',
    language: []
  },
  {
    pairName: 'Montserrat + Source Sans Pro',
    folder: 'Montserrat',
    category: '',
    language: []
  },
  {
    pairName: 'Nunito + Alegreya',
    folder: 'Nunito',
    category: '',
    language: []
  },
  {
    pairName: 'Nunito + Lora',
    folder: 'Nunito',
    category: '',
    language: []
  },
  {
    pairName: 'Nunito + Open Sans',
    folder: 'Nunito',
    category: '',
    language: []
  },
  {
    pairName: 'Nunito + Roboto',
    folder: 'Nunito',
    category: '',
    language: []
  },
  {
    pairName: 'Open Sans + Bitter',
    folder: 'Open Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Open Sans + Domine',
    folder: 'Open Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Open Sans + Montserrat',
    folder: 'Open Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Open Sans + Source Sans Pro',
    folder: 'Open Sans',
    category: '',
    language: []
  },
  {
    pairName: 'Raleway + Bitter',
    folder: 'Raleway',
    category: '',
    language: []
  },
  {
    pairName: 'Raleway + Cabin',
    folder: 'Raleway',
    category: '',
    language: []
  },
  {
    pairName: 'Raleway + Merriweather',
    folder: 'Raleway',
    category: '',
    language: []
  },
  {
    pairName: 'Raleway + Open Sans',
    folder: 'Raleway',
    category: '',
    language: []
  },
  {
    pairName: 'Raleway + PT Sans',
    folder: 'Raleway',
    category: '',
    language: []
  },
  {
    pairName: 'Raleway + Roboto',
    folder: 'Raleway',
    category: '',
    language: []
  },
  {
    pairName: 'Roboto + Archivo',
    folder: 'Roboto',
    category: '',
    language: []
  },
  {
    pairName: 'Roboto + Lora',
    folder: 'Roboto',
    category: '',
    language: []
  },
  {
    pairName: 'Roboto + Nunito',
    folder: 'Roboto',
    category: '',
    language: []
  },
  {
    pairName: 'Roboto + Raleway',
    folder: 'Roboto',
    category: '',
    language: []
  },
  {
    pairName: 'Roboto + Rokkitt',
    folder: 'Roboto',
    category: '',
    language: []
  },
  {
    pairName: 'Roboto + Space Mono',
    folder: 'Roboto',
    category: '',
    language: []
  },
  {
    pairName: 'Source Sans Pro + Alegreya',
    folder: 'Source Sans Pro',
    category: '',
    language: []
  },
  {
    pairName: 'Source Sans Pro + Lora',
    folder: 'Source Sans Pro',
    category: '',
    language: []
  },
  {
    pairName: 'Source Sans Pro + Montserrat',
    folder: 'Source Sans Pro',
    category: '',
    language: []
  },
  {
    pairName: 'Source Sans Pro + Ubuntu',
    folder: 'Source Sans Pro',
    category: '',
    language: []
  },
  {
    pairName: 'Ubuntu + Cabin',
    folder: 'Ubuntu',
    category: '',
    language: []
  },
  {
    pairName: 'Ubuntu + Kreon',
    folder: 'Ubuntu',
    category: '',
    language: []
  },
  {
    pairName: 'Ubuntu + Lora',
    folder: 'Ubuntu',
    category: '',
    language: []
  },
  {
    pairName: 'Ubuntu + Prompt',
    folder: 'Ubuntu',
    category: '',
    language: []
  },
  {
    pairName: 'Ubuntu + Rokkitt',
    folder: 'Ubuntu',
    category: '',
    language: []
  },
  {
    pairName: 'Ubuntu + Source Sans Pro',
    folder: 'Ubuntu',
    category: '',
    language: []
  }
]

export default class App extends React.Component {
  constructor(params) {
    super(params)

    this.onCreate = this.onCreate.bind(this)
  }

  onCreate = () => {
    //написать чтобы выбиралась конкретная штука
    parent.postMessage({ pluginMessage: { type: 'create-article' } }, '*')
  }

  render() {
    return (
      <div>
        <Navigation selectContents={selectContents} />
        <div className="container">
          <button id="export" onClick={this.onCreate}>
            Export
          </button>
          <FontCard fontPairs={fontPairs} />
        </div>
      </div>
    )
  }
}
