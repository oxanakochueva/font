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

figma.ui.onmessage = msg => {
  if (msg.type === 'create-article') {
    const nodes = []

    const frame = figma.createFrame()
    frame.x = 150
    frame.resize(768, 768)
    frame.fills = [{ type: 'SOLID', color: { r: 0.96, g: 0.96, b: 0.95 } }]
    figma.currentPage.appendChild(frame)
    nodes.push(frame)

    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
  }

  // figma.closePlugin()
}
