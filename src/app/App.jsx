import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { setStoreCurrentPair, setStoreRecomendedPairs } from '../plugin/store'
import { getRandom } from '../plugin/utilities'

import T_PairsIndex from './components/05_Templates/T_PairsIndex'
import T_PairsShow from './components/05_Templates/T_PairsShow'

// onmessage = msg => {
//   // if (msg.type === 'get-storage') {
//   console.log('message', msg)
//   // }
// }

Array.prototype.remove = function() {
  // prettier-ignore
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L]
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1)
    }
  }
  return this
}

export default class App extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      page: 'index',
      currentPairId: null,
      searchRequest: '',
      language: '',
      primaryFont: '',
      secondaryFont: '',
      defaultView: 'letters',
      openedFolders: [],
      recommendedPairs: []
    }
  }

  componentDidMount() {
    this.getFromStorage()
    this.setToStorage('some id')
  }

  getFromStorage = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'get-storage'
        }
      },
      '*'
    )
  }

  setToStorage = id => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'set-storage',
          id: id
        }
      },
      '*'
    )
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }

  setSearchRequest = request => {
    this.setState({
      searchRequest: request
    })
  }

  toggleFolder = name => {
    const { openedFolders } = this.state

    if (openedFolders.includes(name)) {
      openedFolders.remove(name)
    } else {
      openedFolders.push(name)
    }

    this.setState({
      openedFolders: [...openedFolders]
    })
  }

  setFilterValue = (id, option) => {
    if (option === 'Clear') {
      option = ''
    }

    this.setState({
      [`${id}`]: option
    })
  }

  openPage = id => {
    if (id === '') {
      this.setState({
        page: 'index',
        currentPairId: ''
      })
    } else {
      const { pairs } = this.props

      pairs.map(pair => {
        if (pair.id != id) {
          return pair
        }
      })

      pairs.forEach(pair => {
        if (pair.id === id) {
          setStoreCurrentPair(pair)
          console.log('CURRENT PAIR', pair)
        }
      })

      const recommendedPairs = getRandom(pairs, 3)
      setStoreRecomendedPairs(recommendedPairs)

      console.log('RECOMENDED', recommendedPairs)

      this.setState({
        page: 'show',
        currentPairId: id,
        recommendedPairs: recommendedPairs
      })

      this.scrollToTop()
    }
  }

  filterPairs = () => {
    const { pairs } = this.props
    const { searchRequest, language, primaryFont, secondaryFont } = this.state
    let filteredPairs = [...pairs]

    if (searchRequest != '') {
      const searchFilter = searchRequest.toLowerCase()
      const localFilteredPairs = []

      pairs.filter(pair => {
        const font = pair.heading.toLowerCase()

        if (font.includes(searchFilter)) {
          localFilteredPairs.push(pair)
        }
      })

      filteredPairs = [...localFilteredPairs]
    }

    if (language != '') {
      const localFilteredPairs = []

      filteredPairs.filter(pair => {
        if (pair.languages.includes(language)) {
          localFilteredPairs.push(pair)
        }
      })

      filteredPairs = [...localFilteredPairs]
    }

    if (primaryFont != '') {
      const localFilteredPairs = []

      filteredPairs.filter(pair => {
        const type = pair.type[0]

        if (primaryFont === type) {
          localFilteredPairs.push(pair)
        }
      })

      filteredPairs = [...localFilteredPairs]
    }

    if (secondaryFont != '') {
      const localFilteredPairs = []

      filteredPairs.filter(pair => {
        const type = pair.type[1]

        if (secondaryFont === type) {
          localFilteredPairs.push(pair)
        }
      })

      filteredPairs = [...localFilteredPairs]
    }

    return filteredPairs
  }

  filterFolders = () => {
    const filteredPairs = this.filterPairs()
    const folders = []

    filteredPairs.forEach((pair, i) => {
      const folderNames = folders.map(folder => {
        return folder.name
      })

      if (folderNames.includes(pair.folder)) {
        folders.forEach((folder, i) => {
          if (folder.name === pair.folder) {
            folder.pairs.push(pair)
          }
        })
      } else {
        folders.push({
          name: pair.folder,
          pairs: [pair]
        })
      }
    })

    return folders
  }

  filterCurrentPair = () => {
    const { pairs } = this.props
    const { currentPairId } = this.state

    const pairInfo = {
      fonts: [],
      families: []
    }

    pairs.forEach(pair => {
      if (pair.id === currentPairId) {
        pairInfo.info = pair

        pair.fonts.forEach(fontId => {
          const fontInfo = this.collectFontInfo(fontId)
          pairInfo.fonts.push(fontInfo)
          pairInfo.families.push(fontInfo.fontFamily)
        })
      }
    })

    return pairInfo
  }

  collectFontInfo = id => {
    const { fonts, designers, paragraphs } = this.props
    const fontParagraphs = []
    const fontDesigners = []
    let fontInfo

    fonts.forEach(font => {
      if (font.id === id) {
        font.designers.forEach(designerId => {
          designers.forEach(designer => {
            if (designer.id === designerId) {
              fontDesigners.push(designer)
            }
          })
        })

        paragraphs.forEach(paragraph => {
          if (paragraph.fontId === id) {
            fontParagraphs.push(paragraph)
          }
        })

        fontInfo = {
          font: font,
          fontDesigners: fontDesigners,
          fontParagraphs: fontParagraphs,
          fontFamily: font.heading
        }
      }
    })

    return fontInfo
  }

  exportPageToFigma = () => {
    const { pairs } = this.props
    const { currentPairId, recommendedPairs } = this.state

    parent.postMessage(
      {
        pluginMessage: {
          type: 'font-pair-export',
          pairs: pairs,
          currentPairId: currentPairId,
          recommendedPairs: recommendedPairs
        }
      },
      '*'
    )
  }

  saveToStorage = () => {
    this.setToStorage('changed with button click')
  }

  render() {
    const defaultValues = {
      searchRequest: this.state.searchRequest,
      languageOptions: this.props.languageOptions,
      typeOptions: this.props.typeOptions,
      viewOptions: this.props.viewOptions,
      language: this.state.language,
      primaryFont: this.state.primaryFont,
      secondaryFont: this.state.secondaryFont,
      defaultView: this.state.defaultView,
      openedFolders: this.state.openedFolders,
      currentPairId: this.state.currentPairId,
      recommendedPairs: this.state.recommendedPairs
    }

    const actions = {
      toggleFolder: this.toggleFolder,
      setSearchRequest: this.setSearchRequest,
      setFilterValue: this.setFilterValue,
      openPage: this.openPage,
      //
      //
      //
      //
      //
      //
      exportPageToFigma: this.exportPageToFigma
    }

    const { page } = this.state
    const folders = this.filterFolders()
    const pair = this.filterCurrentPair()

    return (
      <>
        {page === 'show' ? (
          <T_PairsShow
            pair={pair}
            actions={actions}
            defaultValues={defaultValues}
          />
        ) : (
          <T_PairsIndex
            folders={folders}
            actions={actions}
            defaultValues={defaultValues}
          />
        )}
      </>
    )
  }
}
