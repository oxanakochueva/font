import * as React from 'react'
import * as ReactDOM from 'react-dom'

import T_PairsIndex from './components/05_Templates/T_PairsIndex'
// import T_PairsShow from './components/05_Templates/T_PairsShow'

onmessage = msg => {
  // if (msg.type === 'get-storage') {
  console.log('message', msg)
  // }
}

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

    this.getFromStorage()
    this.setToStorage('some id')

    this.state = {
      page: 'index',
      searchRequest: '',
      language: '',
      primaryFont: '',
      secondaryFont: '',
      defaultView: 'letters',
      openedFolders: [],
      //
      //
      //
      currentPairId: null,
      selectViewOpened: false,
      from: 'Select',
      to: 'Select',
      leftParameter: [],
      rightParameter: []
    }
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
  //
  //
  //
  //

  changeDefaultView = value => {
    this.setState({
      defaultView: value
    })
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  openPairsPageShow = pairId => {
    const { pairs } = this.props
    let currentPairInfo

    pairs.forEach((pair, i) => {
      if (pair.id === pairId) {
        const { fonts, heading, folder } = pair

        fonts.forEach((font, i) => {
          this.renderFontDescription(font)
        })

        currentPairInfo = {
          fontList: fonts,
          pairHeader: heading,
          fontStyle: folder,
          primaryFontFamily: fonts[0],
          secondaryFontFamily: fonts[1]
        }
      }
    })

    this.setState({
      page: 'show',
      currentPairId: pairId,
      pairInfo: currentPairInfo
    })

    this.scrollToTop()
  }

  // renderFontDescription = fontDescription => {
  //   // TODO: Refactor this
  //   const { fonts } = this.props
  //   const fontParagraphs = []
  //   const fontDesigners = []
  //   let fontFamily
  //
  //   fonts.forEach((font, i) => {
  //     if (font.id === fontDescription) {
  //       fontFamily = font.heading
  //
  //       font.designers.forEach((id, i) => {
  //         designers.forEach((designer, i) => {
  //           if (id === designer.id) {
  //             fontDesigners.push(designer)
  //           }
  //         })
  //       })
  //
  //       paragraphs.forEach((paragraph, i) => {
  //         if (paragraph.font_id === fontDescription) {
  //           fontParagraphs.push(paragraph)
  //         }
  //       })
  //
  //       const info = {
  //         font: font,
  //         fontDesigners: fontDesigners,
  //         fontParagraphs: fontParagraphs,
  //         fontFamily: fontFamily
  //       }
  //
  //       const { fontElementsOfPair } = this.state
  //
  //       fontElementsOfPair.push(info)
  //       console.log('from render', info)
  //       // return info
  //
  //       // this.setState({
  //       //   pairInfo: info
  //       // })
  //     }
  //   })
  // }

  // TODO: Сделать одну функцию роутер
  openPairsPageIndex = () => {
    this.setState({
      page: 'pairs',
      currentPairId: ''
    })
  }

  // TODO: Сделать одну функцию роутер
  backToPairsPage = () => {}

  exportPageToFigma = currentPairId => {
    const { language, recomendationList } = this.state

    parent.postMessage(
      {
        pluginMessage: {
          type: 'font-pair-export',
          pair: currentPairId,
          language: language,
          recomendationList: recomendationList
        }
      },
      '*'
    )
  }

  renderPairsSortedByType = () => {
    let {
      leftParameter,
      rightParameter,
      newPairs,
      pairs,
      from,
      to
    } = this.state

    let sorted = []

    let pairsForNew = leftParameter.concat(rightParameter)

    pairsForNew.forEach((pair, i) => {
      if (pair.type[0] === from && pair.type[1] === to) {
        sorted.push(pair)
      }
    })

    let uniquePairs = sorted.filter(
      (set => sortedItem => !set.has(sortedItem.id) && set.add(sortedItem.id))(
        new Set()
      )
    )
    this.setState({
      newPairs: [...uniquePairs]
    })

    console.log(from, to)

    console.log(sorted, uniquePairs, newPairs)
  }

  //
  //
  //
  // добавить сортировку по name
  filterPairs = () => {
    const { pairs } = this.props
    const { searchRequest, language, primaryFont, secondaryFont } = this.state

    let filteredPairs = [...pairs]

    if (searchRequest != '') {
      const searchFilter = searchRequest.toLowerCase()
      const localFilteredPairs = []

      // возможно, как map обновляет сам массив
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

      // возможно, как map обновляет сам массив
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

      // возможно, как map обновляет сам массив
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
  //
  //
  //

  render() {
    const actions = {
      toggleFolder: this.toggleFolder,
      setSearchRequest: this.setSearchRequest,
      setFilterValue: this.setFilterValue,
      //
      //
      //
      //
      openPairsPageShow: this.openPairsPageShow,
      openPairsPageIndex: this.openPairsPageIndex,
      //
      //
      exportPageToFigma: this.exportPageToFigma
    }

    const defaultValues = {
      // Filters
      searchRequest: this.state.searchRequest,
      languageOptions: this.props.languageOptions,
      typeOptions: this.props.typeOptions,
      viewOptions: this.props.viewOptions,
      language: this.state.language,
      primaryFont: this.state.primaryFont,
      secondaryFont: this.state.secondaryFont,
      defaultView: this.state.defaultView,
      // Folders
      openedFolders: this.state.openedFolders,
      //
      //
      //
      recomendationList: this.state.recomendationList, // в рендер и в общий файл с переменными
      currentPairId: this.state.currentPairId
    }

    const folders = this.filterFolders()

    return (
      <>
        {this.state.page === 'show' ? (
          {
            // <PairsPageShow
            //   fonts={fonts}
            //   pairs={pairs}
            //   currentPairInfo={this.state.pairInfo}
            //   fontElements={fontElements}
            //   paragraphs={paragraphs}
            //   designers={designers}
            //   actions={actions}
            //   defaultValues={defaultValues}
            // />
          }
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
