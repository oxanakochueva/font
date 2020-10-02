figma.showUI(__html__)

figma.ui.resize(600, 900)

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
  let test

  fonts.forEach((font, i) => {
    styles.push(font.fontName.style)
    names.push(font.fontName.family)
    test.push(font.textStyle.description)
  })

  console.log('hi', test)

  styles = styles.filter(onlyUnique)

  console.log(styles, names)
  console.log(local)

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
    let local = figma.getLocalTextStyles()

    fontsPromise.then(showFonts)
    local.then(showFonts)
  }
}
