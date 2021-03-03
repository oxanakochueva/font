import { fonts, pairs } from '../app/font_library.js'

figma.showUI(__html__)

figma.ui.resize(668, 628)

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

function showFonts(fonts) {
  figma.ui.postMessage({
    type: 'get-font-list',
    message: fonts
  })

  let styles = []
  let names = []

  fonts.forEach((font, i) => {
    styles.push(font.fontName.style)
    names.push(font.fontName.family)
  })

  styles = styles.filter(onlyUnique)

  console.log(styles, names)

  // let futuraPromise = figma.loadFontAsync({ family: 'futura', style: 'bold' })
  // let futuraPromise = figma.loadFontAsync(fonts[0].fontName)
  // futuraPromise.then(showFutura)
}

function showFutura(futura) {
  console.log('yo', futura)
}

function renderFigmaTemplate(currentPairId, language) {
  console.log(currentPairId)

  let currentPair
  let fontElements = []

  pairs.forEach((pair, i) => {
    if (pair.id === currentPairId) {
      currentPair = pair
    }
  })

  Object.keys(fonts).forEach((key, i) => {
    if (key === currentPair.fonts[0] || key === currentPair.fonts[1]) {
      fontElements.push(fonts[key])
    }
  })

  const nodes = []

  let articleFrame = figma.createFrame()
  let topBarFrame = figma.createFrame()
  let pairInfoFrame = figma.createFrame()
  let fontInfoFrame = figma.createFrame()
  let articleName = figma.createText()
  let firstFontName = figma.createText()
  let secondFontName = figma.createText()
  let imageRectangle = figma.createRectangle()
  let firstFontDescription = figma.createText()
  let secondFontDescription = figma.createText()

  articleName.characters = currentPair.heading
  firstFontName.characters = fontElements[0].heading
  secondFontName.characters = fontElements[1].heading
  firstFontDescription.characters = fontElements[0].texts[language].description
  secondFontDescription.characters = fontElements[1].texts[language].description
  pairInfoFrame.x = 44
  pairInfoFrame.y = 97
  pairInfoFrame.resize(688, 1314)
  pairInfoFrame.layoutMode = 'VERTICAL'
  pairInfoFrame.itemSpacing = 60
  firstFontDescription.resize(688, 367)
  fontInfoFrame.layoutMode = 'VERTICAL'
  fontInfoFrame.itemSpacing = 25
  fontInfoFrame.primaryAxisSizingMode = 'AUTO'
  fontInfoFrame.counterAxisSizingMode = 'AUTO'
  topBarFrame.x = 44
  topBarFrame.y = 40
  topBarFrame.strokeWeight = 1
  topBarFrame.resize(684, 34)
  articleFrame.x = 150
  articleFrame.resize(768, 1659)
  articleFrame.fills = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.95 } }]
  imageRectangle.resize(688, 367)
  imageRectangle.cornerRadius = 20
  articleFrame.appendChild(topBarFrame)
  articleFrame.appendChild(pairInfoFrame)
  pairInfoFrame.appendChild(articleName)
  pairInfoFrame.appendChild(image)
  pairInfoFrame.appendChild(fontInfoFrame)
  fontInfoFrame.appendChild(firstFontName)
  fontInfoFrame.appendChild(firstFontDescription)
  figma.currentPage.appendChild(articleFrame)

  nodes.push(articleFrame)
  figma.currentPage.selection = nodes
  figma.viewport.scrollAndZoomIntoView(nodes)
}

figma.ui.onmessage = msg => {
  if (msg.type === 'get-font-list') {
    let fontsPromise = figma.listAvailableFontsAsync()

    fontsPromise.then(showFonts)
  }
}

figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
// josefin_sans_cardo
// josefin_sans_abril_fatface
figma.ui.onmessage = msg => {
  let fontPairIds = []

  pairs.forEach((pair, i) => {
    fontPairIds.push(pair.id)
  })

  if (fontPairIds.includes(msg.type)) {
    renderFigmaTemplate(msg.type, msg.language)
  } else {
    console.log('unknown message')
  }

  // if (msg.type === 'josefin_sans_cardo') {
  //   console.log('josefin_sans_cardo')
  //   renderFigmaTemplate(msg.type)
  // } else if (msg.type === 'josefin_sans_abril_fatface') {
  //   console.log('josefin_sans_abril_fatface')
  // }

  // figma.closePlugin()
}
