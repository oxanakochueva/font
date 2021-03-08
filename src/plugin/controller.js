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
// let all = [
//   abril_fatface,
//   alegreya,
//   archivo,
//   bitter,
//   cabin,
//   cardo,
//   domine,
//   fira_mono,
//   fira_sans,
//   francois_one,
//   hind,
//   inconsolata,
//   josefin_sans,
//   karla,
//   kreon,
//   lato,
//   lora,
//   merriweather,
//   montserrat,
//   nunito,
//   open_sans,
//   playfair,
//   prompt,
//   pt_sans,
//   raleway,
//   roboto,
//   rokkitt,
//   source_sans_pro,
//   space_mono,
//   ubuntu,
//   yeseva_one
// ]

figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })

figma.loadFontAsync({ family: 'Josefin Sans', style: 'Regular' })
figma.loadFontAsync({ family: 'Josefin Sans', style: 'Bold' })

figma.loadFontAsync({ family: 'Abril Fatface', style: 'Regular' })

figma.loadFontAsync({ family: 'Alegreya', style: 'Regular' })
figma.loadFontAsync({ family: 'Alegreya', style: 'Bold' })

figma.loadFontAsync({ family: 'Archivo', style: 'Regular' })
figma.loadFontAsync({ family: 'Archivo', style: 'Bold' })

figma.loadFontAsync({ family: 'Bitter', style: 'Regular' })
figma.loadFontAsync({ family: 'Bitter', style: 'Bold' })

figma.loadFontAsync({ family: 'Cabin', style: 'Regular' })
figma.loadFontAsync({ family: 'Cabin', style: 'Bold' })

figma.loadFontAsync({ family: 'Cardo', style: 'Regular' })
figma.loadFontAsync({ family: 'Cardo', style: 'Bold' })

figma.loadFontAsync({ family: 'Domine', style: 'Regular' })
figma.loadFontAsync({ family: 'Domine', style: 'Bold' })

figma.loadFontAsync({ family: 'Fira Mono', style: 'Regular' })
figma.loadFontAsync({ family: 'Fira Mono', style: 'Bold' })

figma.loadFontAsync({ family: 'Fira Sans', style: 'Regular' })
figma.loadFontAsync({ family: 'Fira Sans', style: 'Bold' })

figma.loadFontAsync({ family: 'Karla', style: 'Regular' })
figma.loadFontAsync({ family: 'Karla', style: 'Bold' })

figma.loadFontAsync({ family: 'Kreon', style: 'Regular' })
figma.loadFontAsync({ family: 'Kreon', style: 'Bold' })

figma.loadFontAsync({ family: 'Lato', style: 'Regular' })
figma.loadFontAsync({ family: 'Lato', style: 'Bold' })

figma.loadFontAsync({ family: 'Lora', style: 'Regular' })
figma.loadFontAsync({ family: 'Lora', style: 'Bold' })

figma.loadFontAsync({ family: 'Merriweather', style: 'Regular' })
figma.loadFontAsync({ family: 'Merriweather', style: 'Bold' })

figma.loadFontAsync({ family: 'Montserrat', style: 'Regular' })
figma.loadFontAsync({ family: 'Montserrat', style: 'Bold' })

figma.loadFontAsync({ family: 'Nunito', style: 'Regular' })
figma.loadFontAsync({ family: 'Nunito', style: 'Bold' })

figma.loadFontAsync({ family: 'Open Sans', style: 'Regular' })
figma.loadFontAsync({ family: 'Open Sans', style: 'Bold' })

figma.loadFontAsync({ family: 'Playfair', style: 'Bold' })

figma.loadFontAsync({ family: 'Prompt', style: 'Regular' })
figma.loadFontAsync({ family: 'Prompt', style: 'Bold' })

figma.loadFontAsync({ family: 'PT Sans', style: 'Regular' })
figma.loadFontAsync({ family: 'PT Sans', style: 'Bold' })

figma.loadFontAsync({ family: 'Raleway', style: 'Regular' })
figma.loadFontAsync({ family: 'Raleway', style: 'Bold' })

figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })

figma.loadFontAsync({ family: 'Rokkitt', style: 'Regular' })
figma.loadFontAsync({ family: 'Rokkitt', style: 'Bold' })

figma.loadFontAsync({ family: 'Source Sans Pro', style: 'Regular' })
figma.loadFontAsync({ family: 'Source Sans Pro', style: 'Bold' })

figma.loadFontAsync({ family: 'Space Mono', style: 'Regular' })
figma.loadFontAsync({ family: 'Space Mono', style: 'Bold' })

figma.loadFontAsync({ family: 'Ubuntu', style: 'Regular' })
figma.loadFontAsync({ family: 'Ubuntu', style: 'Bold' })

figma.loadFontAsync({ family: 'Yeseva One', style: 'Regular' })

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

  let background = [{ type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }]

  let black = [{ type: 'SOLID', color: { r: 0.165, g: 0.161, b: 0.129 } }]

  //фрейм самого экспорта
  let articleFrame = figma.createFrame()
  articleFrame.x = 150
  articleFrame.paddingTop = 23
  articleFrame.itemSpacing = 23
  articleFrame.resize(768, 1659)
  articleFrame.layoutMode = 'VERTICAL'
  articleFrame.primaryAxisSizingMode = 'AUTO'
  articleFrame.counterAxisSizingMode = 'FIXED'
  articleFrame.counterAxisAlignItems = 'CENTER'
  articleFrame.fills = [
    { type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }
  ]

  ////фрейм верхнего блока с кнопками
  let topBarFrame = figma.createFrame()
  topBarFrame.fills = background
  topBarFrame.layoutMode = 'HORIZONTAL'
  topBarFrame.primaryAxisSizingMode = 'AUTO'
  topBarFrame.counterAxisSizingMode = 'AUTO'
  topBarFrame.counterAxisAlignItems = 'CENTER'
  topBarFrame.primaryAxisAlignItems = 'SPACE_BETWEEN'
  topBarFrame.itemSpacing = 6
  topBarFrame.strokeWeight = 1
  topBarFrame.resize(688, 36)
  //////фрейм кнопки назад
  let buttonBack = figma.createFrame()
  buttonBack.cornerRadius = 7
  buttonBack.layoutMode = 'HORIZONTAL'
  buttonBack.primaryAxisSizingMode = 'AUTO'
  buttonBack.counterAxisSizingMode = 'AUTO'
  buttonBack.counterAxisAlignItems = 'CENTER'
  buttonBack.itemSpacing = 6
  buttonBack.paddingTop = 10
  buttonBack.paddingRight = 10
  buttonBack.paddingBottom = 10
  buttonBack.paddingLeft = 10
  ////////иконка кнопки назад
  let buttonBackIcon = figma.createVector()
  buttonBackIcon.resize(7, 8)
  buttonBackIcon.vectorPaths[
    {
      windingRule: 'EVENODD',
      data:
        'M4.35355 0.646447C4.54882 0.841709 4.54882 1.15829 4.35355 1.35355L1.70711 4L4.35355 6.64645C4.54882 6.84171 4.54882 7.15829 4.35355 7.35355C4.15829 7.54882 3.84171 7.54882 3.64645 7.35355L0.646446 4.35355C0.451184 4.15829 0.451184 3.84171 0.646446 3.64645L3.64645 0.646447C3.84171 0.451184 4.15829 0.451184 4.35355 0.646447Z'
    }
  ]
  buttonBackIcon.fills = black
  ////////текст кнопки назад
  let buttonBackText = figma.createText()
  buttonBackText.characters = 'Back'
  buttonBackText.fontSize = 14
  buttonBackText.fills = black
  //////фрейм кнопки экспорт
  let buttonExport = figma.createFrame()
  buttonExport.cornerRadius = 7
  buttonExport.layoutMode = 'HORIZONTAL'
  buttonExport.primaryAxisSizingMode = 'AUTO'
  buttonExport.counterAxisSizingMode = 'AUTO'
  buttonExport.counterAxisAlignItems = 'CENTER'
  buttonExport.itemSpacing = 6
  buttonExport.paddingTop = 10
  buttonExport.paddingRight = 10
  buttonExport.paddingBottom = 10
  buttonExport.paddingLeft = 10
  ////////текст кнопки экспорт
  let buttonExportText = figma.createText()
  buttonExportText.characters = 'Export to artboard'
  buttonExportText.fontSize = 14
  buttonExportText.fills = black
  ////////иконка кнопки эккспорт
  let buttonExportIcon = figma.createVector()
  buttonExportIcon.resize(7, 8)

  ////фрейм пары
  let pairInfoFrame = figma.createFrame()
  pairInfoFrame.x = 44
  pairInfoFrame.y = 97
  pairInfoFrame.layoutMode = 'VERTICAL'
  pairInfoFrame.primaryAxisSizingMode = 'AUTO'
  pairInfoFrame.counterAxisSizingMode = 'FIXED'
  pairInfoFrame.layoutAlign = 'STRETCH'
  pairInfoFrame.itemSpacing = 60
  pairInfoFrame.paddingTop = 20
  pairInfoFrame.paddingRight = 40
  pairInfoFrame.paddingBottom = 40
  pairInfoFrame.paddingLeft = 40
  pairInfoFrame.fills = [
    { type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }
  ]

  //////заголовок статьи
  let articleName = figma.createText()
  articleName.characters = currentPair.heading
  articleName.fontSize = 40
  articleName.fontName = { family: fontElements[0].heading, style: 'Bold' }

  //////картинка пары
  let imageRectangle = figma.createRectangle()
  imageRectangle.resize(688, 367)
  imageRectangle.cornerRadius = 20

  //////фрейм шрифта внутри пары
  let fontInfoFrame = figma.createFrame()
  fontInfoFrame.layoutMode = 'VERTICAL'
  fontInfoFrame.itemSpacing = 23
  fontInfoFrame.primaryAxisSizingMode = 'AUTO'
  fontInfoFrame.counterAxisSizingMode = 'FIXED'
  fontInfoFrame.layoutAlign = 'STRETCH'
  fontInfoFrame.fills = [
    { type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }
  ]

  ////////название первого шрифта
  let firstFontName = figma.createText()
  firstFontName.characters = fontElements[0].heading
  firstFontName.fontSize = 40
  firstFontName.fontName = { family: fontElements[0].heading, style: 'Bold' }

  ////////описание первого шрифта
  let firstFontDescription = figma.createText()
  firstFontDescription.characters = fontElements[0].texts[language].description
  firstFontDescription.fontSize = 16
  firstFontDescription.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  firstFontDescription.layoutAlign = 'STRETCH'

  ////////дизайнер первого шрифта

  //////////фрейм блока
  let firstDesignerFrame = figma.createFrame()
  firstDesignerFrame.layoutMode = 'VERTICAL'
  firstDesignerFrame.primaryAxisSizingMode = 'AUTO'
  firstDesignerFrame.counterAxisSizingMode = 'AUTO'
  firstDesignerFrame.layoutAlign = 'STRETCH'
  firstDesignerFrame.itemSpacing = 15
  firstDesignerFrame.fills = background

  //////////фрейм с аватаром и именем
  let firstDesignerInnerFrame = figma.createFrame()
  firstDesignerInnerFrame.layoutMode = 'HORIZONTAL'
  firstDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
  firstDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
  firstDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
  firstDesignerInnerFrame.itemSpacing = 6
  firstDesignerInnerFrame.fills = background

  ////////////аватар
  let firstDesignerAvatar = figma.createEllipse()
  firstDesignerAvatar.resize(35, 35)

  ////////////фрейм с именем и компанией
  let firstDesignerNameFrame = figma.createFrame()
  firstDesignerNameFrame.layoutMode = 'VERTICAL'
  firstDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
  firstDesignerNameFrame.counterAxisSizingMode = 'AUTO'
  firstDesignerNameFrame.layoutAlign = 'STRETCH'
  firstDesignerNameFrame.itemSpacing = 4
  firstDesignerNameFrame.fills = background

  //////////////имя
  let firstDesignerName = figma.createText()
  firstDesignerName.characters = fontElements[0].texts[language].designer.name
  firstDesignerName.fontSize = 16
  firstDesignerName.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  firstDesignerName.fills = black

  //////////////компания
  let firstDesignerCompany = figma.createText()
  firstDesignerCompany.characters =
    fontElements[0].texts[language].designer.company
  firstDesignerCompany.fontSize = 10
  firstDesignerCompany.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  firstDesignerCompany.fills = black

  //////////описание
  let firstDesignerDescription = figma.createText()
  firstDesignerDescription.characters =
    fontElements[0].texts[language].designer.descriptionHTML
  firstDesignerDescription.layoutAlign = 'STRETCH'
  firstDesignerDescription.fontSize = 12
  firstDesignerDescription.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  firstDesignerDescription.fills = background
  firstDesignerDescription.fills = black

  ////////название второго шрифта
  let secondFontName = figma.createText()
  secondFontName.characters = fontElements[1].heading
  secondFontName.fontSize = 40
  secondFontName.fontName = { family: fontElements[0].heading, style: 'Bold' }

  ////////описание второго шрифта
  let secondFontDescription = figma.createText()
  secondFontDescription.characters = fontElements[1].texts[language].description
  secondFontDescription.fontSize = 16
  secondFontDescription.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  secondFontDescription.layoutAlign = 'STRETCH'

  ////////заголовок дизайнера
  let designerFrameName = figma.createText()
  designerFrameName.characters =
    fontElements[0].texts[language].designer.heading
  designerFrameName.fontSize = 20
  designerFrameName.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  designerFrameName.fills = black

  ////////дизайнер второго шрифта
  //////////фрейм блока
  let secondDesignerFrame = figma.createFrame()
  secondDesignerFrame.layoutMode = 'VERTICAL'
  secondDesignerFrame.primaryAxisSizingMode = 'AUTO'
  secondDesignerFrame.counterAxisSizingMode = 'AUTO'
  secondDesignerFrame.layoutAlign = 'STRETCH'
  secondDesignerFrame.itemSpacing = 15
  secondDesignerFrame.fills = background
  //////////фрейм с аватаром и именем
  let secondDesignerInnerFrame = figma.createFrame()
  secondDesignerInnerFrame.layoutMode = 'HORIZONTAL'
  secondDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
  secondDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
  secondDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
  secondDesignerInnerFrame.itemSpacing = 6
  secondDesignerInnerFrame.fills = background
  ////////////аватар
  let secondDesignerAvatar = figma.createEllipse()
  secondDesignerAvatar.resize(35, 35)

  ////////////фрейм с именем и компанией
  let secondDesignerNameFrame = figma.createFrame()
  secondDesignerNameFrame.layoutMode = 'VERTICAL'
  secondDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
  secondDesignerNameFrame.counterAxisSizingMode = 'AUTO'
  secondDesignerNameFrame.layoutAlign = 'STRETCH'
  secondDesignerNameFrame.itemSpacing = 4
  secondDesignerNameFrame.fills = background
  //////////////имя
  let secondDesignerName = figma.createText()
  secondDesignerName.characters = fontElements[1].texts[language].designer.name
  secondDesignerName.fontSize = 16
  secondDesignerName.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  secondDesignerName.fills = black
  //////////////компания
  let secondDesignerCompany = figma.createText()
  secondDesignerCompany.characters =
    fontElements[1].texts[language].designer.company
  secondDesignerCompany.fontSize = 10
  secondDesignerCompany.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  secondDesignerCompany.fills = black
  //////////описание
  let secondDesignerDescription = figma.createText()
  secondDesignerDescription.characters =
    fontElements[1].texts[language].designer.descriptionHTML
  secondDesignerDescription.layoutAlign = 'STRETCH'
  secondDesignerDescription.fontSize = 12
  secondDesignerDescription.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  secondDesignerDescription.fills = background
  secondDesignerDescription.fills = black

  ////копирайт
  let copyright = figma.createText()
  copyright.characters = 'Information from fonts.google.com'
  copyright.fills = [{ type: 'SOLID', color: { r: 0.62, g: 0.62, b: 0.62 } }]
  copyright.fontSize = 12
  copyright.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  copyright.resize(688, 14)

  articleFrame.appendChild(topBarFrame)
  articleFrame.appendChild(pairInfoFrame)
  pairInfoFrame.appendChild(articleName)
  pairInfoFrame.appendChild(imageRectangle)
  pairInfoFrame.appendChild(fontInfoFrame)
  pairInfoFrame.appendChild(copyright)
  fontInfoFrame.appendChild(firstFontName)
  fontInfoFrame.appendChild(firstFontDescription)
  fontInfoFrame.appendChild(firstDesignerFrame)
  fontInfoFrame.appendChild(secondFontName)
  fontInfoFrame.appendChild(secondFontDescription)
  fontInfoFrame.appendChild(secondDesignerFrame)
  topBarFrame.appendChild(buttonBack)
  topBarFrame.appendChild(buttonExport)
  buttonBack.appendChild(buttonBackIcon)
  buttonBack.appendChild(buttonBackText)
  buttonExport.appendChild(buttonExportText)
  buttonExport.appendChild(buttonExportIcon)
  firstDesignerFrame.appendChild(designerFrameName)
  firstDesignerFrame.appendChild(firstDesignerInnerFrame)
  firstDesignerFrame.appendChild(firstDesignerDescription)
  firstDesignerInnerFrame.appendChild(firstDesignerAvatar)
  firstDesignerInnerFrame.appendChild(firstDesignerNameFrame)
  firstDesignerNameFrame.appendChild(firstDesignerName)
  firstDesignerNameFrame.appendChild(firstDesignerCompany)
  secondDesignerFrame.appendChild(designerFrameName)
  secondDesignerFrame.appendChild(secondDesignerInnerFrame)
  secondDesignerFrame.appendChild(secondDesignerDescription)
  secondDesignerInnerFrame.appendChild(secondDesignerAvatar)
  secondDesignerInnerFrame.appendChild(secondDesignerNameFrame)
  secondDesignerNameFrame.appendChild(secondDesignerName)
  secondDesignerNameFrame.appendChild(secondDesignerCompany)
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
