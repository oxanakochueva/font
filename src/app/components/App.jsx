import * as React from 'react'
import * as ReactDOM from 'react-dom'
//import '../styles/ui.scss'
import * as style from '../styles/ui.scss'

export default class App extends React.Component {
  constructor(params) {
    super(params)

    this.state = {
      fonts: [],
      filtered: [],
      fontpairs: {
        testPair: {
          josefinSans: {
            family: 'Josefin Sans',
            category: 'sans-serif',
            language: 'latin'
          },
          cardo: {
            family: 'Cardo',
            category: 'serif',
            language: 'latin'
          }
        }
        // Josefin Sans + Cardo
        //     {
        //   "family": "Josefin Sans",
        //   "variants": [
        //     "100",
        //     "200",
        //     "300",
        //     "regular",
        //     "500",
        //     "600",
        //     "700",
        //     "100italic",
        //     "200italic",
        //     "300italic",
        //     "italic",
        //     "500italic",
        //     "600italic",
        //     "700italic"
        //   ],
        //   "subsets": [
        //     "latin",
        //     "latin-ext",
        //     "vietnamese"
        //   ],
        //   "version": "v16",
        //   "lastModified": "2020-06-26",
        //   "files": {
        //     "100": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjRXMFrLgTsQV0.ttf",
        //     "200": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_LjQXMFrLgTsQV0.ttf",
        //     "300": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_GbQXMFrLgTsQV0.ttf",
        //     "regular": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQXMFrLgTsQV0.ttf",
        //     "500": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_ArQXMFrLgTsQV0.ttf",
        //     "600": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_ObXXMFrLgTsQV0.ttf",
        //     "700": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_N_XXMFrLgTsQV0.ttf",
        //     "100italic": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTtINhKibpUV3MEQ.ttf",
        //     "200italic": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTNIJhKibpUV3MEQ.ttf",
        //     "300italic": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCT6oJhKibpUV3MEQ.ttf",
        //     "italic": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTtIJhKibpUV3MEQ.ttf",
        //     "500italic": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCThoJhKibpUV3MEQ.ttf",
        //     "600italic": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTaoVhKibpUV3MEQ.ttf",
        //     "700italic": "http://fonts.gstatic.com/s/josefinsans/v16/Qw3JZQNVED7rKGKxtqIqX5EUCGZ2dIn0FyA96fCTU4VhKibpUV3MEQ.ttf"
        //   },
        //   "category": "sans-serif",
        //   "kind": "webfonts#webfont"
        // },
        //     {
        //   "family": "Cardo",
        //   "variants": [
        //     "regular",
        //     "italic",
        //     "700"
        //   ],
        //   "subsets": [
        //     "greek",
        //     "greek-ext",
        //     "latin",
        //     "latin-ext"
        //   ],
        //   "version": "v13",
        //   "lastModified": "2020-09-25",
        //   "files": {
        //     "regular": "http://fonts.gstatic.com/s/cardo/v13/wlp_gwjKBV1pqiv_1oAZ2H5O.ttf",
        //     "italic": "http://fonts.gstatic.com/s/cardo/v13/wlpxgwjKBV1pqhv93IQ73W5OcCk.ttf",
        //     "700": "http://fonts.gstatic.com/s/cardo/v13/wlpygwjKBV1pqhND-aQR82JHaTBX.ttf"
        //   },
        //   "category": "serif",
        //   "kind": "webfonts#webfont"
        // }
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    // This is how we read messages sent from the plugin controller
    window.onmessage = event => {
      const { type, message } = event.data.pluginMessage

      if (type === 'get-font-list') {
        console.log('message inside componentDidMount', message)

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
      console.log(currentList)

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
    const pairSyle = {
      width: '150px',
      height: '200px',
      padding: '20px',
      border: '1px solid black',
      borderRadius: '9px'
    }
    const h1 = {
      fontSize: '26px',
      fontFamily: '"Josefin Sans", sans-serif',
      margin: '0 auto'
    }
    const p = {
      fontSize: '15px',
      fontFamily: '"Cardo", serif',
      margin: '0 auto'
    }

    console.log(this.props.styles)

    return (
      <div>
        <div сlass="searchField">
          <input
            type="text"
            placeholder="i'm looking for"
            onChange={this.handleChange}
          ></input>
        </div>
        <div сlass="container">
          <div сlass="fontPair" style={pairSyle}>
            <div сlass="rectangleTest"></div>
            <h1 сlass="header" style={h1}>
              Make the Web Faster
            </h1>
            <p сlass="text" style={p}>
              Google Fonts makes product and web pages run faster by safely
              caching fonts without compromising users’ privacy or security.
            </p>
          </div>
          <div сlass="container">{fontElements}</div>
        </div>
      </div>
    )
  }
}
