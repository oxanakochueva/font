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

onmessage = msg => {
  // if (msg.type === 'get-storage') {
  console.log('message', msg)
  // }
}

export default class App extends React.Component {
  constructor(params) {
    super(params)

    this.getFromStorage()
    this.setToStorage('some id')

    pairs.map((pair, i) => {
      pair.view = 'letters'
      return pair
    })

    this.state = {
      page: 'index',
      currentPairId: null,
      searchRequest: '',
      language: 'en',
      defaultView: 'letters',
      selectViewOpened: false,
      openedFolders: [],
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

  openPairsPageShow = pairId => {
    let currentPairInfo

    let firstFontParagraphs = []
    let secondFontParagraphs = []

    let firstFontDesigners = []
    let secondFontDesigners = []

    pairs.forEach((pair, i) => {
      if (pair.id === pairId) {
        let fontList = pair.fonts
        let pairHeader = pair.heading
        let fontStyle = pair.folder
        fontList.forEach((fontListItem, i) => {
          this.renderFontDescription(fontListItem)
        })

        currentPairInfo = {
          fontList: pair.fonts,
          pairHeader: pair.heading,
          fontStyle: pair.folder,
          primaryFontFamily: fontList[0],
          secondaryFontFamily: fontList[1]
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

  renderFontDescription = fontDescription => {
    console.log('hola', fontDescription)

    let fontParagraphs = []
    let fontDesigners = []
    let fontFamily

    fonts.forEach((font, i) => {
      if (font.id === fontDescription) {
        fontFamily = font.heading
        font.designers.forEach((id, i) => {
          designers.forEach((designer, i) => {
            if (id === designer.id) {
              fontDesigners.push(designer)
            }
          })
        })
        paragraphs.forEach((paragraph, i) => {
          if (paragraph.font_id === fontDescription) {
            fontParagraphs.push(paragraph)
          }
        })

        let info = {
          font: font,
          fontDesigners: fontDesigners,
          fontParagraphs: fontParagraphs,
          fontFamily: fontFamily
        }

        let { fontElementsOfPair } = this.state

        fontElementsOfPair.push(info)
        console.log('from render', info)
        // return info

        // this.setState({
        //   pairInfo: info
        // })
      }
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

  // убрать filtered
  setSearchRequest = request => {
    if (request !== '') {
      this.setState({
        searchRequest: request,
        filtered: true
      })
    }
  }

  resetSearch = () => {
    this.setState({
      searchRequest: '',
      filtered: false
    })
  }

  changeCardView = (pairId, view) => {
    const { defaultView } = this.state
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

  changeDefaultLeftType = (type, dropdown) => {
    let { leftParameter, rightParameter, pairs } = this.state

    // console.log('left', type)

    pairs.forEach((pair, i) => {
      if (pair.type[0] === type) {
        // leftParameter.length = 0
        leftParameter.push(pair)
        this.setState({
          from: type
        })
      }
    })

    if (type === 'Clear') {
      leftParameter = pairs
      this.setState({
        from: 'Select',
        selectTypeOpened: false
      })
    }

    // this.renderPairsSortedByType()

    // console.log('pairs with left type', leftParameter)
  }

  changeDefaultRightType = (type, dropdown) => {
    let { leftParameter, rightParameter, pairs } = this.state

    // console.log('right', type)

    pairs.forEach((pair, i) => {
      if (pair.type[1] === type) {
        // rightParameter.length = 0
        rightParameter.push(pair)
        this.setState({
          to: type,
          selectTypeOpened: false
        })
      }
    })

    if (type === 'Clear') {
      rightParameter = pairs
      this.setState({
        to: 'Select'
      })
    }
  }

  changeDefaultType = (type, dropdown, primary) => {
    let { leftParameter, rightParameter, newPairs, from, to } = this.state

    console.log(primary)
    let pairsForNew = []

    pairs.forEach((pair, i) => {
      if (primary === 'primary') {
        if (pair.type[0] === type) {
          leftParameter.push(pair)

          this.setState({
            from: type,
            selectTypeOpened: false
          })
        }
        if (type === 'Clear') {
          rightParameter = pairs
          this.setState({
            from: 'Select'
          })
        }
      } else if (primary === 'secondary') {
        if (pair.type[1] === type) {
          rightParameter.push(pair)
          this.setState({
            to: type,
            selectTypeOpened: false
          })
        }
        if (type === 'Clear') {
          rightParameter = pairs
          this.setState({
            to: 'Select'
          })
        }
      }
    })

    setTimeout(() => {
      this.renderPairsSortedByType()
    }, 1)
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

  toggleSelectType = () => {
    console.log('hello type')
    let selectState = this.state.selectTypeOpened
    if (selectState == true) {
      this.setState({
        selectTypeOpened: false
      })
    } else {
      this.setState({
        selectTypeOpened: true
      })
    }
  }

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
    let { openedFolders, test } = this.state

    openedFolders.push(folder)
    this.setState({
      test: true
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

  //
  //
  //
  filterPairs = () => {
    const { searchRequest } = this.state

    console.log('searchRequest', searchRequest)

    if (searchRequest === '') {
      return pairs
    } else {
      const filter = searchRequest.toLowerCase()
      let filteredPairs = []

      // возможно, как map обновляет сам массив
      pairs.filter(pair => {
        const font = pair.heading.toLowerCase()

        if (font.includes(filter)) {
          filteredPairs.push(pair)
        }
      })

      return filteredPairs
    }
  }

  filterFolders = () => {
    const filteredPairs = this.filterPairs()
    let folders = []

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
      openPairsPageShow: this.openPairsPageShow,
      openPairsPageIndex: this.openPairsPageIndex,
      //
      //
      //
      changeCardView: this.changeCardView,
      changeDefaultView: this.changeDefaultView,
      toggleSelectView: this.toggleSelectView,
      openFolder: this.openFolder, // переписать в toggle folder
      closeFolder: this.closeFolder, // переписать в toggle folder
      toggleSelectType: this.toggleSelectType,
      changeDefaultType: this.changeDefaultType,
      exportPageToFigma: this.exportPageToFigma,
      setSearchRequest: this.setSearchRequest,
      resetSearch: this.resetSearch
    }

    const defaultValues = {
      viewOptions: this.props.viewOptions,
      typeOptions: this.props.typeOptions,
      //
      //
      //
      filtered: this.state.filtered, // в рендер
      defaultCardView: this.state.defaultView,
      selectViewOpened: this.state.selectViewOpened,
      openedFolders: this.state.openedFolders,
      currentTypeOption: this.state.currentTypeOption,
      selectTypeOpened: this.state.selectTypeOpened, // переписать на два отдельных селекта
      pairsLeft: this.state.pairsLeft, // убрать в рендер
      pairsRight: this.state.pairsRight, // убрать в рендер
      from: this.state.from, // переименовать (это что=то типа selected option)
      to: this.state.to, // переименовать (это что=то типа selected option)
      searchRequest: this.state.searchRequest,
      recomendationList: this.state.recomendationList, // в рендер и в общий файл с переменными
      currentPairId: this.state.currentPairId
    }

    const folders = this.filterFolders()

    console.log('folders', folders)

    return (
      <div>
        <div className="container">
          {this.state.page === 'show' ? (
            <div className="wrapper">
              <PairsPageShow
                fonts={fonts}
                pairs={pairs}
                currentPairInfo={this.state.pairInfo}
                fontElements={fontElements}
                paragraphs={paragraphs}
                designers={designers}
                actions={actions}
                defaultValues={defaultValues}
              />
            </div>
          ) : (
            <div>
              <PairsPageIndex
                folders={folders}
                actions={actions}
                defaultValues={defaultValues}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}
