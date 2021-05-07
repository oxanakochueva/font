import * as React from 'react'
import * as ReactDOM from 'react-dom'

export default class App extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      fonts: [],
      filtered: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    // This is how we read messages sent from the plugin controller
    window.onmessage = event => {
      const { type, message } = event.data.pluginMessage

      if (type === 'get-font-list') {
        // console.log('message inside componentDidMount', message)

        this.setState({
          fonts: message,
          filtered: message
        })
      }
    }

    parent.postMessage({ pluginMessage: { type: 'get-font-list' } }, '*')
  }

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }
  ///////////////// search ////////////

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     filtered: nextProps.fonts
  //   })
  // }

  handleChange(e) {
    let currentList = this.state.fonts
    let newList = []

    if (e.target.value !== '') {
      // console.log(currentList)

      currentList.filter(font => {
        const family = font.fontName.family.toLowerCase()
        const style = font.fontName.style.toLowerCase()
        const familyAndStyle = [family, style].join(' ')
        const filter = e.target.value.toLowerCase()

        if (family.includes(filter) || familyAndStyle.includes(filter)) {
          newList.push(font)
        }
      })

      this.setState({
        filtered: newList
      })
    }
  }

  /////////////////////////////////

  render() {
    let fontElements = []
    let matchItalic = /\b(\w*italic\w*)\b/
    let matchWeight = /\b\w*\b/

    this.state.filtered.forEach((font, i) => {
      const { style } = font.fontName
      const fontFamily = font.fontName.family
      // let fontWeight = style;
      let fontWeight = '400'
      let fontStyle = 'normal'
      let fontSize = '40px'
      // let medium = '500';

      const basicWeights = [
        'thin',
        'light',
        'regular',
        'medium',
        'semibold',
        'bold'
      ]
      const thin = ['thin', 'ultralight', 'extralight']
      // const bold = ['bold', ]

      if (style.toLowerCase().includes(basicWeights)) {
        fontWeight = style.toLowerCase()
        fontSize = fontSize
      }
      if (style.toLowerCase() == thin) {
        fontWeight = '100'
      } else if (style.toLowerCase() == 'light') {
        fontWeight = '300'
      } else if (style.toLowerCase() == 'medium') {
        fontWeight = '500'
      } else if (style.toLowerCase() == 'semibold') {
        fontWeight = '600'
      } else if (style.toLowerCase() == 'bold') {
        fontWeight = '700'
      }

      if (style.toLowerCase().match(matchItalic)) {
        fontStyle = 'italic'
        // fontWeight = style.toLowerCase().match(matchWeight)[0];
        if (fontWeight == 'thin') {
          fontWeight = '100'
        } else if (fontWeight == 'light') {
          fontWeight = '300'
        } else if (fontWeight == 'medium') {
          fontWeight = '500'
        } else if (fontWeight == 'semibold') {
          fontWeight = '600'
        } else if (fontWeight == 'bold') {
          fontWeight = '700'
        }
        // console.log(style.toLowerCase().match(matchWeight)[0]);
      }

      const styles = {
        fontFamily,
        fontWeight,
        fontStyle,
        fontSize
      }

      fontElements.push(
        <div сlass="fontLine" style={styles} key={i}>
          {font.fontName.family} {font.fontName.style}
        </div>
      )
    })

    const containerStyle = {
      background: 'orange'
    }

    // console.log(this.props.styles)

    return (
      <div>
        <div сlass="searchField">
          <input
            type="text"
            placeholder="i'm looking for"
            onChange={this.handleChange}
          ></input>
        </div>
        <div сlass="container">{fontElements}</div>
      </div>
    )
  }
}
