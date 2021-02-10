import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '../styles/reset.scss'
import * as styles from '../styles/ui.scss'
import '../styles/fonts.scss'

import Search from './atoms/A_Search'
import Select from './atoms/A_Select'
import FontCard from './organisms/O_FontCard'
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

// const fonts = {
//   josefin: {
//     heading: 'Josefin Sans',
//     texts: {
//       en: {
//         description:
//           "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
//         designer: {
//           en: {
//             name: '',
//             company: '',
//             userpic: 'http://fonts.google.com/userpic.png'
//           },
//           ru: {
//             name: '',
//             company: '',
//             userpic: 'http://fonts.google.com/userpic.png'
//           }
//         }
//       },
//       ru: {
//         description:
//           "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
//         designer: {
//           en: {
//             name: '',
//             company: '',
//             userpic: 'http://fonts.google.com/userpic.png'
//           },
//           ru: {
//             name: '',
//             company: '',
//             userpic: 'http://fonts.google.com/userpic.png'
//           }
//         }
//       }
//     }
//   },
//   cardo: {
//     heading: 'Cardo',
//     texts: {
//       en: {
//         description:
//           "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
//         designer: {
//           en: {
//             name: '',
//             company: '',
//             userpic: 'http://fonts.google.com/userpic.png'
//           }
//         }
//       },
//       ru: {
//         description:
//           "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
//         designer: {
//           en: {
//             name: '',
//             company: '',
//             userpic: 'http://fonts.google.com/userpic.png'
//           }
//         }
//       }
//     }
//   }
// }
//
// const pairs = [
//   {
//     josefin_sans_cardo: {
//       folder: 'Josefin Sans',
//       heading: 'Josefin Sans + Cardo',
//       fonts: ['Josefin Sans', 'Cardo'],
//       languages: ['en'],
//       type: ['Sans Serif', 'Serif']
//     },
//     josefin_sans_abril_fatface: {
//       folder: 'Josefin Sans',
//       heading: 'Josefin Sans + Abril Fatface',
//       fonts: ['Josefin Sans', 'Abril Fatface'],
//       languages: ['en'],
//       type: ['Sans Serif', 'Serif']
//     },
//     josefin_sans_yeseva_one: {
//       folder: 'Josefin Sans',
//       heading: 'Josefin Sans + Yeseva One',
//       fonts: ['Josefin Sans', 'Yeseva One'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     josefin_sans_lato: {
//       folder: 'Josefin Sans',
//       heading: 'Josefin Sans + Lato',
//       fonts: ['Josefin Sans', 'Lato'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     josefin_sans_playfair: {
//       folder: 'Josefin Sans',
//       heading: 'Josefin Sans + Playfair',
//       fonts: ['Josefin Sans', 'Playfair'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     josefin_sans_fira_mono: {
//       folder: 'Josefin Sans',
//       heading: 'Josefin Sans + Fira Mono',
//       fonts: ['Josefin Sans', 'Fira Mono'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Mono']
//     },
//     lora_merriweather: {
//       folder: 'Lora',
//       heading: 'Lora + Merriweather',
//       fonts: ['Lora', 'Merriweather'],
//       languages: ['en', 'ru'],
//       type: ['Serif', 'Serif']
//     },
//     lora_source_sans_pro: {
//       folder: 'Lora',
//       heading: 'Lora + Source Sans Pro',
//       fonts: ['Lora', 'Source Sans Pro'],
//       languages: ['en', 'ru'],
//       type: ['Serif', 'Sans Serif']
//     },
//     lora_roboto: {
//       folder: 'Lora',
//       heading: 'Lora + Roboto',
//       fonts: ['Lora', 'Roboto'],
//       languages: ['en', 'ru'],
//       type: ['Serif', 'Sans Serif']
//     },
//     lora_ubuntu: {
//       folder: 'Lora',
//       heading: 'Lora + Ubuntu',
//       fonts: ['Lora', 'Ubuntu'],
//       languages: ['en', 'ru'],
//       type: ['Serif', 'Sans Serif']
//     },
//     lora_alegreya: {
//       folder: 'Lora',
//       heading: 'Lora + Alegreya',
//       fonts: ['Lora', 'Alegreya'],
//       languages: ['en', 'ru'],
//       type: ['Serif', 'Serif']
//     },
//     lora_nunito: {
//       folder: 'Lora',
//       heading: 'Lora + Nunito',
//       fonts: ['Lora', 'Nunito'],
//       languages: ['en', 'ru'],
//       type: ['Serif', 'Sans Serif']
//     },
//     ubuntu_lora: {
//       folder: 'Ubuntu',
//       heading: 'Ubuntu + Lora',
//       fonts: ['Ubuntu', 'Lora'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     ubuntu_kreon: {
//       folder: 'Ubuntu',
//       heading: 'Ubuntu + Kreon',
//       fonts: ['Ubuntu', 'Kreon'],
//       languages: ['en'],
//       type: ['Sans Serif', 'Serif']
//     },
//     ubuntu_rokkitt: {
//       folder: 'Ubuntu',
//       heading: 'Ubuntu + Rokkitt',
//       fonts: ['Ubuntu', 'Rokkitt'],
//       languages: ['en'],
//       type: ['Sans Serif', 'Serif']
//     },
//     ubuntu_cabin: {
//       folder: 'Ubuntu',
//       heading: 'Ubuntu + Cabin',
//       fonts: ['Ubuntu', 'Cabin'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     ubuntu_source_sans_pro: {
//       folder: 'Ubuntu',
//       heading: 'Ubuntu + Source Sans Pro',
//       fonts: ['Ubuntu', 'Source Sans Pro'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     ubuntu_prompt: {
//       folder: 'Ubuntu',
//       heading: 'Ubuntu + Prompt',
//       fonts: ['Ubuntu', 'Prompt'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     nunito_alegreya: {
//       folder: 'Nunito',
//       heading: 'Nunito + Alegreya',
//       fonts: ['Nunito', 'Alegreya'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     nunito_lora: {
//       folder: 'Nunito',
//       heading: 'Nunito + Lora',
//       fonts: ['Nunito', 'Lora'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     nunito_roboto: {
//       folder: 'Nunito',
//       heading: 'Nunito + Roboto',
//       fonts: ['Nunito', 'Roboto'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     nunito_open_sans: {
//       folder: 'Nunito',
//       heading: 'Nunito + Open Sans',
//       fonts: ['Nunito', 'Open Sans'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     source_sans_pro_ubuntu: {
//       folder: 'Source Sans Pro',
//       heading: 'Source Sans Pro + Ubuntu',
//       fonts: ['Source Sans Pro', 'Ubuntu'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     source_sans_pro_lora: {
//       folder: 'Source Sans Pro',
//       heading: 'Source Sans Pro + Lora',
//       fonts: ['Source Sans Pro', 'Lora'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     source_sans_pro_montserrat: {
//       folder: 'Source Sans Pro',
//       heading: 'Source Sans Pro + Montserrat',
//       fonts: ['Source Sans Pro', 'Montserrat'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     source_sans_pro_alegreya: {
//       folder: 'Source Sans Pro',
//       heading: 'Source Sans Pro + Alegreya',
//       fonts: ['Source Sans Pro', 'Alegreya'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     roboto_archivo: {
//       folder: 'Roboto',
//       heading: 'Roboto + Archivo',
//       fonts: ['Roboto', 'Archivo'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     roboto_lora: {
//       folder: 'Roboto',
//       heading: 'Roboto + Lora',
//       fonts: ['Roboto', 'Lora'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     roboto_rokkitt: {
//       folder: 'Roboto',
//       heading: 'Roboto + Rokkitt',
//       fonts: ['Roboto', 'Rokkitt'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     roboto_nunito: {
//       folder: 'Roboto',
//       heading: 'Roboto + Nunito',
//       fonts: ['Roboto', 'Nunito'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     roboto_raleway: {
//       folder: 'Roboto',
//       heading: 'Roboto + Raleway',
//       fonts: ['Roboto', 'Raleway'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     roboto_space_mono: {
//       folder: 'Roboto',
//       heading: 'Roboto + Space Mono',
//       fonts: ['Roboto', 'Space Mono'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Mono']
//     },
//     open_sans_montserrat: {
//       folder: 'Open Sans',
//       heading: 'Open Sans + Montserrat',
//       fonts: ['Open Sans', 'Montserrat'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     open_sans_bitter: {
//       folder: 'Open Sans',
//       heading: 'Open Sans + Bitter',
//       fonts: ['Open Sans', 'Bitter'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     open_sans_domine: {
//       folder: 'Open Sans',
//       heading: 'Open Sans + Domine',
//       fonts: ['Open Sans', 'Domine'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     open_sans_source_sans_pro: {
//       folder: 'Open Sans',
//       heading: 'Open Sans + Source Sans Pro',
//       fonts: ['Open Sans', 'Source Sans Pro'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     raleway_merriweather: {
//       folder: 'Raleway',
//       heading: 'Raleway + Merriweather',
//       fonts: ['Raleway', 'Merriweather'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     raleway_bitter: {
//       folder: 'Raleway',
//       heading: 'Raleway + Bitter',
//       fonts: ['Raleway', 'Bitter'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     raleway_cabin: {
//       folder: 'Raleway',
//       heading: 'Raleway + Cabin',
//       fonts: ['Raleway', 'Cabin'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     raleway_roboto: {
//       folder: 'Raleway',
//       heading: 'Raleway + Roboto',
//       fonts: ['Raleway', 'Roboto'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     raleway_open_sans: {
//       folder: 'Raleway',
//       heading: 'Raleway + Open Sans',
//       fonts: ['Raleway', 'Open Sans'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     raleway_pt_sans: {
//       folder: 'Raleway',
//       heading: 'Raleway + PT Sans',
//       fonts: ['Raleway', 'PT Sans'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     lato_abril_fatface: {
//       folder: 'Lato',
//       heading: 'Lato + Abril Fatface',
//       fonts: ['Lato', 'Abril Fatface'],
//       languages: ['en'],
//       type: ['Sans Serif', 'Serif']
//     },
//     lato_karla: {
//       folder: 'Lato',
//       heading: 'Lato + Karla',
//       fonts: ['Lato', 'Karla'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     lato_merriweather: {
//       folder: 'Lato',
//       heading: 'Lato + Merriweather',
//       fonts: ['Lato', 'Merriweather'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     lato_francois_one: {
//       folder: 'Lato',
//       heading: 'Lato + Francois One',
//       fonts: ['Lato', 'Francois One'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Serif']
//     },
//     montserrat_source_sans_pro: {
//       folder: 'Montserrat',
//       heading: 'Montserrat + Source Sans Pro',
//       fonts: ['Montserrat', 'Source Sans Pro'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     montserrat_karla: {
//       folder: 'Montserrat',
//       heading: 'Montserrat + Karla',
//       fonts: ['Montserrat', 'Karla'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     montserrat_fira_sans: {
//       folder: 'Montserrat',
//       heading: 'Montserrat + Fira Sans',
//       fonts: ['Montserrat', 'Fira Sans'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     montserrat_cabin: {
//       folder: 'Montserrat',
//       heading: 'Montserrat + Cabin',
//       fonts: ['Montserrat', 'Cabin'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     montserrat_hind: {
//       folder: 'Montserrat',
//       heading: 'Montserrat + Hind',
//       fonts: ['Montserrat', 'Hind'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Sans Serif']
//     },
//     montserrat_inconsolata: {
//       folder: 'Montserrat',
//       heading: 'Montserrat + Inconsolata',
//       fonts: ['Montserrat', 'Inconsolata'],
//       languages: ['en', 'ru'],
//       type: ['Sans Serif', 'Mono']
//     }
//   }
// ]

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
      view: 'letters',
      pairs: [
        {
          id: 'josefin_sans_cardo',
          favourite: false
        },
        {
          id: 'josefin_sans_abril_fatface',
          favourite: false
        },
        {
          id: 'josefin_sans_yeseva_one',
          favourite: false
        },
        {
          id: 'josefin_sans_lato',
          favourite: false
        },
        {
          id: 'josefin_sans_playfair',
          favourite: false
        },
        {
          id: 'josefin_sans_fira_mono',
          favourite: false
        },
        {
          id: 'lora_merriweather',
          favourite: false
        },
        {
          id: 'lora_source_sans_pro',
          favourite: false
        },
        {
          id: 'lora_roboto',
          favourite: false
        },
        {
          id: 'lora_ubuntu',
          favourite: false
        },
        {
          id: 'lora_alegreya',
          favourite: false
        },
        {
          id: 'lora_nunito',
          favourite: false
        },
        {
          id: 'ubuntu_lora',
          favourite: false
        },
        {
          id: 'ubuntu_kreon',
          favourite: false
        },
        {
          id: 'ubuntu_rokkitt',
          favourite: false
        },
        {
          id: 'ubuntu_cabin',
          favourite: false
        },
        {
          id: 'ubuntu_source_sans_pro',
          favourite: false
        },
        {
          id: 'ubuntu_prompt',
          favourite: false
        },
        {
          id: 'nunito_alegreya',
          favourite: false
        },
        {
          id: 'nunito_lora',
          favourite: false
        },
        {
          id: 'nunito_roboto',
          favourite: false
        },
        {
          id: 'nunito_open_sans',
          favourite: false
        },
        {
          id: 'source_sans_pro_ubuntu',
          favourite: false
        },
        {
          id: 'source_sans_pro_lora',
          favourite: false
        },
        {
          id: 'source_sans_pro_montserrat',
          favourite: false
        },
        {
          id: 'source_sans_pro_alegreya',
          favourite: false
        },
        {
          id: 'roboto_archivo',
          favourite: false
        },
        {
          id: 'roboto_lora',
          favourite: false
        },
        {
          id: 'roboto_rokkitt',
          favourite: false
        },
        {
          id: 'roboto_nunito',
          favourite: false
        },
        {
          id: 'roboto_raleway',
          favourite: false
        },
        {
          id: 'roboto_space_mono',
          favourite: false
        },
        {
          id: 'open_sans_montserrat',
          favourite: false
        },
        {
          id: 'open_sans_bitter',
          favourite: false
        },
        {
          id: 'open_sans_domine',
          favourite: false
        },
        {
          id: 'open_sans_source_sans_pro',
          favourite: false
        },
        {
          id: 'raleway_merriweather',
          favourite: false
        },
        {
          id: 'raleway_bitter',
          favourite: false
        },
        {
          id: 'raleway_cabin',
          favourite: false
        },
        {
          id: 'raleway_roboto',
          favourite: false
        },
        {
          id: 'raleway_open_sans',
          favourite: false
        },
        {
          id: 'raleway_pt_sans',
          favourite: false
        },
        {
          id: 'lato_abril_fatface',
          favourite: false
        },
        {
          id: 'lato_karla',
          favourite: false
        },
        {
          id: 'lato_merriweather',
          favourite: false
        },
        {
          id: 'lato_francois_one',
          favourite: false
        },
        {
          id: 'montserrat_source_sans_pro',
          favourite: false
        },
        {
          id: 'montserrat_karla',
          favourite: false
        },
        {
          id: 'montserrat_fira_sans',
          favourite: false
        },
        {
          id: 'montserrat_cabin',
          favourite: false
        },
        {
          id: 'montserrat_hind',
          favourite: false
        },
        {
          id: 'montserrat_inconsolata',
          favourite: false
        }
      ]
    }

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
          <FontCard pairs={pairs} />
        </div>
      </div>
    )
  }
}
