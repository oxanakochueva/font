const fonts = {
  josefin: {
    heading: 'Josefin Sans',
    texts: {
      en: {
        description:
          "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
        designer: {
          en: {
            name: '',
            company: '',
            userpic: 'http://fonts.google.com/userpic.png'
          },
          ru: {
            name: '',
            company: '',
            userpic: 'http://fonts.google.com/userpic.png'
          }
        }
      },
      ru: {
        description:
          "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
        designer: {
          en: {
            name: '',
            company: '',
            userpic: 'http://fonts.google.com/userpic.png'
          },
          ru: {
            name: '',
            company: '',
            userpic: 'http://fonts.google.com/userpic.png'
          }
        }
      }
    }
  },
  cardo: {
    heading: 'Cardo',
    texts: {
      en: {
        description:
          "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
        designer: {
          en: {
            name: '',
            company: '',
            userpic: 'http://fonts.google.com/userpic.png'
          }
        }
      },
      ru: {
        description:
          "<p>Bla bla bla</p><p>To contribute <a href='http://yo.rap'>http://yo.rap</a></p>",
        designer: {
          en: {
            name: '',
            company: '',
            userpic: 'http://fonts.google.com/userpic.png'
          }
        }
      }
    }
  }
}

const pairs = [
  {
    id: 'josefin_sans_cardo',
    folder: 'Josefin Sans',
    heading: 'Josefin Sans + Cardo',
    fonts: ['Josefin Sans', 'Cardo'],
    languages: ['en'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'josefin_sans_abril_fatface',
    folder: 'Josefin Sans',
    heading: 'Josefin Sans + Abril Fatface',
    fonts: ['Josefin Sans', 'Abril Fatface'],
    languages: ['en'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'josefin_sans_yeseva_one',
    folder: 'Josefin Sans',
    heading: 'Josefin Sans + Yeseva One',
    fonts: ['Josefin Sans', 'Yeseva One'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'josefin_sans_lato',
    folder: 'Josefin Sans',
    heading: 'Josefin Sans + Lato',
    fonts: ['Josefin Sans', 'Lato'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'josefin_sans_playfair',
    folder: 'Josefin Sans',
    heading: 'Josefin Sans + Playfair',
    fonts: ['Josefin Sans', 'Playfair'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'josefin_sans_fira_mono',
    folder: 'Josefin Sans',
    heading: 'Josefin Sans + Fira Mono',
    fonts: ['Josefin Sans', 'Fira Mono'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Mono']
  },
  {
    id: 'lora_merriweather',
    folder: 'Lora',
    heading: 'Lora + Merriweather',
    fonts: ['Lora', 'Merriweather'],
    languages: ['en', 'ru'],
    type: ['Serif', 'Serif']
  },
  {
    id: 'lora_source_sans_pro',
    folder: 'Lora',
    heading: 'Lora + Source Sans Pro',
    fonts: ['Lora', 'Source Sans Pro'],
    languages: ['en', 'ru'],
    type: ['Serif', 'Sans Serif']
  },
  {
    id: 'lora_roboto',
    folder: 'Lora',
    heading: 'Lora + Roboto',
    fonts: ['Lora', 'Roboto'],
    languages: ['en', 'ru'],
    type: ['Serif', 'Sans Serif']
  },
  {
    id: 'lora_ubuntu',
    folder: 'Lora',
    heading: 'Lora + Ubuntu',
    fonts: ['Lora', 'Ubuntu'],
    languages: ['en', 'ru'],
    type: ['Serif', 'Sans Serif']
  },
  {
    id: 'lora_alegreya',
    folder: 'Lora',
    heading: 'Lora + Alegreya',
    fonts: ['Lora', 'Alegreya'],
    languages: ['en', 'ru'],
    type: ['Serif', 'Serif']
  },
  {
    id: 'lora_nunito',
    folder: 'Lora',
    heading: 'Lora + Nunito',
    fonts: ['Lora', 'Nunito'],
    languages: ['en', 'ru'],
    type: ['Serif', 'Sans Serif']
  },
  {
    id: 'ubuntu_lora',
    folder: 'Ubuntu',
    heading: 'Ubuntu + Lora',
    fonts: ['Ubuntu', 'Lora'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'ubuntu_kreon',
    folder: 'Ubuntu',
    heading: 'Ubuntu + Kreon',
    fonts: ['Ubuntu', 'Kreon'],
    languages: ['en'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'ubuntu_rokkitt',
    folder: 'Ubuntu',
    heading: 'Ubuntu + Rokkitt',
    fonts: ['Ubuntu', 'Rokkitt'],
    languages: ['en'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'ubuntu_cabin',
    folder: 'Ubuntu',
    heading: 'Ubuntu + Cabin',
    fonts: ['Ubuntu', 'Cabin'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'ubuntu_source_sans_pro',
    folder: 'Ubuntu',
    heading: 'Ubuntu + Source Sans Pro',
    fonts: ['Ubuntu', 'Source Sans Pro'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'ubuntu_prompt',
    folder: 'Ubuntu',
    heading: 'Ubuntu + Prompt',
    fonts: ['Ubuntu', 'Prompt'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'nunito_alegreya',
    folder: 'Nunito',
    heading: 'Nunito + Alegreya',
    fonts: ['Nunito', 'Alegreya'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'nunito_lora',
    folder: 'Nunito',
    heading: 'Nunito + Lora',
    fonts: ['Nunito', 'Lora'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'nunito_roboto',
    folder: 'Nunito',
    heading: 'Nunito + Roboto',
    fonts: ['Nunito', 'Roboto'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'nunito_open_sans',
    folder: 'Nunito',
    heading: 'Nunito + Open Sans',
    fonts: ['Nunito', 'Open Sans'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'source_sans_pro_ubuntu',
    folder: 'Source Sans Pro',
    heading: 'Source Sans Pro + Ubuntu',
    fonts: ['Source Sans Pro', 'Ubuntu'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'source_sans_pro_lora',
    folder: 'Source Sans Pro',
    heading: 'Source Sans Pro + Lora',
    fonts: ['Source Sans Pro', 'Lora'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'source_sans_pro_montserrat',
    folder: 'Source Sans Pro',
    heading: 'Source Sans Pro + Montserrat',
    fonts: ['Source Sans Pro', 'Montserrat'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'source_sans_pro_alegreya',
    folder: 'Source Sans Pro',
    heading: 'Source Sans Pro + Alegreya',
    fonts: ['Source Sans Pro', 'Alegreya'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'roboto_archivo',
    folder: 'Roboto',
    heading: 'Roboto + Archivo',
    fonts: ['Roboto', 'Archivo'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'roboto_lora',
    folder: 'Roboto',
    heading: 'Roboto + Lora',
    fonts: ['Roboto', 'Lora'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'roboto_rokkitt',
    folder: 'Roboto',
    heading: 'Roboto + Rokkitt',
    fonts: ['Roboto', 'Rokkitt'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'roboto_nunito',
    folder: 'Roboto',
    heading: 'Roboto + Nunito',
    fonts: ['Roboto', 'Nunito'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'roboto_raleway',
    folder: 'Roboto',
    heading: 'Roboto + Raleway',
    fonts: ['Roboto', 'Raleway'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'roboto_space_mono',
    folder: 'Roboto',
    heading: 'Roboto + Space Mono',
    fonts: ['Roboto', 'Space Mono'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Mono']
  },
  {
    id: 'open_sans_montserrat',
    folder: 'Open Sans',
    heading: 'Open Sans + Montserrat',
    fonts: ['Open Sans', 'Montserrat'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'open_sans_bitter',
    folder: 'Open Sans',
    heading: 'Open Sans + Bitter',
    fonts: ['Open Sans', 'Bitter'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'open_sans_domine',
    folder: 'Open Sans',
    heading: 'Open Sans + Domine',
    fonts: ['Open Sans', 'Domine'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'open_sans_source_sans_pro',
    folder: 'Open Sans',
    heading: 'Open Sans + Source Sans Pro',
    fonts: ['Open Sans', 'Source Sans Pro'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'raleway_merriweather',
    folder: 'Raleway',
    heading: 'Raleway + Merriweather',
    fonts: ['Raleway', 'Merriweather'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'raleway_bitter',
    folder: 'Raleway',
    heading: 'Raleway + Bitter',
    fonts: ['Raleway', 'Bitter'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'raleway_cabin',
    folder: 'Raleway',
    heading: 'Raleway + Cabin',
    fonts: ['Raleway', 'Cabin'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'raleway_roboto',
    folder: 'Raleway',
    heading: 'Raleway + Roboto',
    fonts: ['Raleway', 'Roboto'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'raleway_open_sans',
    folder: 'Raleway',
    heading: 'Raleway + Open Sans',
    fonts: ['Raleway', 'Open Sans'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'raleway_pt_sans',
    folder: 'Raleway',
    heading: 'Raleway + PT Sans',
    fonts: ['Raleway', 'PT Sans'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'lato_abril_fatface',
    folder: 'Lato',
    heading: 'Lato + Abril Fatface',
    fonts: ['Lato', 'Abril Fatface'],
    languages: ['en'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'lato_karla',
    folder: 'Lato',
    heading: 'Lato + Karla',
    fonts: ['Lato', 'Karla'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'lato_merriweather',
    folder: 'Lato',
    heading: 'Lato + Merriweather',
    fonts: ['Lato', 'Merriweather'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'lato_francois_one',
    folder: 'Lato',
    heading: 'Lato + Francois One',
    fonts: ['Lato', 'Francois One'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Serif']
  },
  {
    id: 'montserrat_source_sans_pro',
    folder: 'Montserrat',
    heading: 'Montserrat + Source Sans Pro',
    fonts: ['Montserrat', 'Source Sans Pro'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'montserrat_karla',
    folder: 'Montserrat',
    heading: 'Montserrat + Karla',
    fonts: ['Montserrat', 'Karla'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'montserrat_fira_sans',
    folder: 'Montserrat',
    heading: 'Montserrat + Fira Sans',
    fonts: ['Montserrat', 'Fira Sans'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'montserrat_cabin',
    folder: 'Montserrat',
    heading: 'Montserrat + Cabin',
    fonts: ['Montserrat', 'Cabin'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'montserrat_hind',
    folder: 'Montserrat',
    heading: 'Montserrat + Hind',
    fonts: ['Montserrat', 'Hind'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Sans Serif']
  },
  {
    id: 'montserrat_inconsolata',
    folder: 'Montserrat',
    heading: 'Montserrat + Inconsolata',
    fonts: ['Montserrat', 'Inconsolata'],
    languages: ['en', 'ru'],
    type: ['Sans Serif', 'Mono']
  }
]

export { fonts, pairs }