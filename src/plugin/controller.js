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

figma.ui.onmessage = msg => {
  if (msg.type === 'get-font-list') {
    let fontsPromise = figma.listAvailableFontsAsync()

    fontsPromise.then(showFonts)
  }
}

figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })

figma.ui.onmessage = msg => {
  if (msg.type === 'create-article') {
    const nodes = []

    let articleFrame = figma.createFrame()
    let topBarFrame = figma.createFrame()
    let pairInfoFrame = figma.createFrame()
    let fontInfoFrame = figma.createFrame()
    let articleName = figma.createText()
    let firstFontName = figma.createText()
    let secondFontName = figma.createText()
    let image = figma.createRectangle()
    let firstFontDescription = figma.createText()
    let secondFontDescription = figma.createText()

    articleName.characters = 'Josefin Sans + Cardo'
    firstFontName.characters = 'Josefin Sans'
    secondFontName.characters = 'Second font in pair'
    firstFontDescription.characters =
      'The idea of this typeface is to be geometric, elegant, with a vintage feeling, for use at larger sizes. It is inspired by geometric sans serif designs from the 1920s. The x-height is half way from baseline to cap height, an unusual proportion.'
    secondFontDescription.characters = 'Second font description'
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
    articleFrame.fills = [
      { type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.95 } }
    ]
    image.resize(688, 367)
    image.cornerRadius = 20
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

  // figma.closePlugin()
}
