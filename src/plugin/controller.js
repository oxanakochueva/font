import { fonts } from '../app/library/fonts_library.js'
import { pairs } from '../app/library/pairs_library.js'
import { fontsToLoad } from '../app/library/load_fonts.js'

let currentPair = {}
let imagesForExportQuantity = 0
let imagesForExport = {}

figma.showUI(__html__)
figma.ui.resize(668, 628)

figma.ui.onmessage = msg => {
  console.log('FIGMA JUST GOT A MESSAGE, YO', msg)

  if (msg.type === 'image-in-bytes') {
    saveImageDataOrExportToFigma(msg.name, msg.bytes)
  } else if (msg.type === 'font-pair-export') {
    // console.log(msg.pair, pairs, pairs[msg.pair], pairs[`${msg.pair}`])

    pairs.forEach((pair, i) => {
      if (pair.id === msg.pair) {
        currentPair.id = msg.pair
        currentPair.language = msg.language

        pairs.forEach((pair, i) => {
          if (pair.id === msg.pair) {
            currentPair.data = pair
          }
        })

        imagesForExportQuantity = Object.keys(pair.images).length

        Object.keys(pair.images).forEach((key, i) => {
          figma.ui.postMessage({ type: key, data: pair.images[key] })
        })
      }
    })
  } else {
    console.log('unknown message')
  }
}

function loadFonts() {
  fontsToLoad.forEach((fontToLoad, i) => {
    figma.loadFontAsync({ family: fontToLoad.family, style: fontToLoad.style })
  })
}

loadFonts()

function saveImageDataOrExportToFigma(name, bytes) {
  imagesForExport[name] = bytes

  console.log(Object.keys(imagesForExport).length, imagesForExportQuantity)

  if (Object.keys(imagesForExport).length >= imagesForExportQuantity) {
    renderFigmaTemplate()
  }
}

function getNewFills(rectangle, imageBytes) {
  const fills = []

  for (const paint of rectangle.fills) {
    fills.push(getNewPaint(paint, imageBytes))
  }

  return fills
}

function getNewPaint(paint, imageBytes) {
  const newPaint = {}

  newPaint.blendMode = 'NORMAL'
  newPaint.type = 'IMAGE'

  console.log('before')
  newPaint.imageHash = figma.createImage(imageBytes).hash
  console.log('after')

  newPaint.filters = {
    contrast: 0,
    exposure: 0,
    highlights: 0,
    saturation: 0,
    shadows: 0,
    temperature: 0,
    tint: 0
  }

  newPaint.opacity = 1
  newPaint.scaleMode = 'FILL'
  newPaint.scalingFactor = 0.5

  newPaint.imageTransform = [
    [1, 0, 0],
    [0, 1, 0]
  ]

  newPaint.visible = true

  return newPaint
}
//
//
//
//
//
//

function renderFigmaTemplate() {
  const { language } = currentPair
  const articleNameText = currentPair.data.heading
  let fontElements = []

  Object.keys(fonts).forEach((key, i) => {
    if (
      key === currentPair.data.fonts[0] ||
      key === currentPair.data.fonts[1]
    ) {
      fontElements.push(fonts[key])
    }
  })

  const nodes = []

  let background = [{ type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }]

  let black = [{ type: 'SOLID', color: { r: 0.165, g: 0.161, b: 0.129 } }]

  //фрейм самого экспорта
  let articleFrame = figma.createFrame()
  articleFrame.x = figma.viewport.center.x
  articleFrame.y = figma.viewport.center.y

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
  let buttonBackIcon = figma.createRectangle()
  buttonBackIcon.resize(7, 8)
  buttonBackIcon.fills = getNewFills(buttonBackIcon, imagesForExport.left)
  // buttonBackIcon.fills = black

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

  ////////иконка кнопки экспорт
  let buttonExportIcon = figma.createRectangle()
  buttonExportIcon.resize(8, 9)
  buttonExportIcon.fills = getNewFills(buttonExportIcon, imagesForExport.export)

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
  articleName.characters = articleNameText
  articleName.fontSize = 40
  articleName.fontName = { family: fontElements[0].heading, style: 'Bold' }

  //////картинка пары
  let imageRectangle = figma.createRectangle()
  imageRectangle.resize(688, 367)
  imageRectangle.cornerRadius = 20
  imageRectangle.fills = getNewFills(imageRectangle, imagesForExport.cover)

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
  firstFontDescription.lineHeight = {
    value: 160,
    unit: 'PERCENT'
  }
  firstFontDescription.layoutAlign = 'STRETCH'

  ////////дизайнеры первого шрифта
  //////////заголовок дизайнера
  let firstFontFirstDesignerFrameName = figma.createText()
  firstFontFirstDesignerFrameName.characters = 'Designer'
  firstFontFirstDesignerFrameName.fontSize = 20
  firstFontFirstDesignerFrameName.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  firstFontFirstDesignerFrameName.fills = black

  //////////первый дизайнер первого шрифта

  ////////////фрейм блока первого дизайнера первого шрифта
  let firstFontFirstDesignerFrame = figma.createFrame()
  firstFontFirstDesignerFrame.layoutMode = 'VERTICAL'
  firstFontFirstDesignerFrame.primaryAxisSizingMode = 'AUTO'
  firstFontFirstDesignerFrame.counterAxisSizingMode = 'AUTO'
  firstFontFirstDesignerFrame.layoutAlign = 'STRETCH'
  firstFontFirstDesignerFrame.itemSpacing = 15
  firstFontFirstDesignerFrame.fills = background

  ////////////фрейм с аватаром и именем первого дизайнера первого шрифта
  let firstFontFirstDesignerInnerFrame = figma.createFrame()
  firstFontFirstDesignerInnerFrame.layoutMode = 'HORIZONTAL'
  firstFontFirstDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
  firstFontFirstDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
  firstFontFirstDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
  firstFontFirstDesignerInnerFrame.itemSpacing = 6
  firstFontFirstDesignerInnerFrame.fills = background

  //////////////аватар первого дизайнера первого шрифта
  let firstFontFirstDesignerAvatar = figma.createEllipse()
  firstFontFirstDesignerAvatar.resize(35, 35)

  //////////////фрейм с именем и компанией первого дизайнера первого шрифта
  let firstFontFirstDesignerNameFrame = figma.createFrame()
  firstFontFirstDesignerNameFrame.layoutMode = 'VERTICAL'
  firstFontFirstDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
  firstFontFirstDesignerNameFrame.counterAxisSizingMode = 'AUTO'
  firstFontFirstDesignerNameFrame.layoutAlign = 'STRETCH'
  firstFontFirstDesignerNameFrame.itemSpacing = 4
  firstFontFirstDesignerNameFrame.fills = background

  ////////////////имя первого дизайнера первого шрифта
  let firstFontFirstDesignerName = figma.createText()
  firstFontFirstDesignerName.characters =
    fontElements[0].texts[language].designers[0].name
  firstFontFirstDesignerName.fontSize = 16
  firstFontFirstDesignerName.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  firstFontFirstDesignerName.fills = black

  ////////////////компания первого дизайнера первого шрифта
  let firstFontFirstDesignerCompany = figma.createText()
  firstFontFirstDesignerCompany.characters =
    fontElements[0].texts[language].designers[0].company
  firstFontFirstDesignerCompany.fontSize = 10
  firstFontFirstDesignerCompany.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  firstFontFirstDesignerCompany.fills = black

  ////////////описание первого дизайнера первого шрифта
  if (fontElements[0].texts[language].designers[0].descriptionHTML.length > 0) {
    let firstFontFirstDesignerDescription = figma.createText()
    firstFontFirstDesignerDescription.characters =
      fontElements[0].texts[language].designers[0].descriptionHTML
    firstFontFirstDesignerDescription.layoutAlign = 'STRETCH'
    firstFontFirstDesignerDescription.fontSize = 12
    firstFontFirstDesignerDescription.fontName = {
      family: fontElements[1].heading,
      style: 'Regular'
    }
    firstFontFirstDesignerDescription.lineHeight = {
      value: 160,
      unit: 'PERCENT'
    }
    firstFontFirstDesignerDescription.fills = background
    firstFontFirstDesignerDescription.fills = black
  }

  //////////второй дизайнер первого шрифта

  console.log(fontElements[0].texts[language].designers[1])
  if (fontElements[0].texts[language].designers[1] !== undefined) {
    ////////////фрейм блока второго дизайнера первого шрифта
    let firstFontSecondDesignerFrame = figma.createFrame()
    firstFontSecondDesignerFrame.layoutMode = 'VERTICAL'
    firstFontSecondDesignerFrame.primaryAxisSizingMode = 'AUTO'
    firstFontSecondDesignerFrame.counterAxisSizingMode = 'AUTO'
    firstFontSecondDesignerFrame.layoutAlign = 'STRETCH'
    firstFontSecondDesignerFrame.itemSpacing = 15
    firstFontSecondDesignerFrame.fills = background

    ////////////фрейм с аватаром и именем второго дизайнера первого шрифта
    let firstFontSecondDesignerInnerFrame = figma.createFrame()
    firstFontSecondDesignerInnerFrame.layoutMode = 'HORIZONTAL'
    firstFontSecondDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
    firstFontSecondDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
    firstFontSecondDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
    firstFontSecondDesignerInnerFrame.itemSpacing = 6
    firstFontSecondDesignerInnerFrame.fills = background

    //////////////аватар второго дизайнера первого шрифта
    let firstFontSecondDesignerAvatar = figma.createEllipse()
    firstFontSecondDesignerAvatar.resize(35, 35)

    //////////////фрейм с именем и компанией второго дизайнера первого шрифта
    let firstFontSecondDesignerNameFrame = figma.createFrame()
    firstFontSecondDesignerNameFrame.layoutMode = 'VERTICAL'
    firstFontSecondDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
    firstFontSecondDesignerNameFrame.counterAxisSizingMode = 'AUTO'
    firstFontSecondDesignerNameFrame.layoutAlign = 'STRETCH'
    firstFontSecondDesignerNameFrame.itemSpacing = 4
    firstFontSecondDesignerNameFrame.fills = background

    ////////////////имя второго дизайнера первого шрифта
    let firstFontSecondDesignerName = figma.createText()
    firstFontSecondDesignerName.characters =
      fontElements[0].texts[language].designers[1].name
    firstFontSecondDesignerName.fontSize = 16
    firstFontSecondDesignerName.fontName = {
      family: fontElements[0].heading,
      style: 'Bold'
    }
    firstFontSecondDesignerName.fills = black

    ////////////////компания второго дизайнера первого шрифта
    let firstFontSecondDesignerCompany = figma.createText()
    firstFontSecondDesignerCompany.characters =
      fontElements[0].texts[language].designers[1].company
    firstFontSecondDesignerCompany.fontSize = 10
    firstFontSecondDesignerCompany.fontName = {
      family: fontElements[1].heading,
      style: 'Regular'
    }
    firstFontFirstDesignerCompany.fills = black

    ////////////описание второго дизайнера первого шрифта
    if (
      fontElements[0].texts[language].designers[1].descriptionHTML.length > 0
    ) {
      let firstFontSecondDesignerDescription = figma.createText()
      console.log(fontElements[0].texts[language].designer)
      firstFontSecondDesignerDescription.characters =
        fontElements[0].texts[language].designers[1].descriptionHTML
      firstFontSecondDesignerDescription.layoutAlign = 'STRETCH'
      firstFontSecondDesignerDescription.fontSize = 12
      firstFontSecondDesignerDescription.fontName = {
        family: fontElements[1].heading,
        style: 'Regular'
      }
      firstFontSecondDesignerDescription.lineHeight = {
        value: 160,
        unit: 'PERCENT'
      }
      firstFontSecondDesignerDescription.fills = background
      firstFontSecondDesignerDescription.fills = black
    }
  }

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
  secondFontDescription.lineHeight = {
    value: 160,
    unit: 'PERCENT'
  }
  secondFontDescription.layoutAlign = 'STRETCH'

  ////////дизайнеры второго шрифта
  //////////заголовок дизайнера второго шрифта
  let secondFontFirstDesignerFrameName = figma.createText()
  secondFontFirstDesignerFrameName.characters = 'Designer'
  secondFontFirstDesignerFrameName.fontSize = 20
  secondFontFirstDesignerFrameName.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  secondFontFirstDesignerFrameName.fills = black

  ////////////фрейм блока первого дизайнера второго шрифта
  let secondFontFirstDesignerFrame = figma.createFrame()
  secondFontFirstDesignerFrame.layoutMode = 'VERTICAL'
  secondFontFirstDesignerFrame.primaryAxisSizingMode = 'AUTO'
  secondFontFirstDesignerFrame.counterAxisSizingMode = 'AUTO'
  secondFontFirstDesignerFrame.layoutAlign = 'STRETCH'
  secondFontFirstDesignerFrame.itemSpacing = 15
  secondFontFirstDesignerFrame.fills = background
  ////////////фрейм с аватаром и именем первого дизайнера второго шрифта
  let secondFontFirstDesignerInnerFrame = figma.createFrame()
  secondFontFirstDesignerInnerFrame.layoutMode = 'HORIZONTAL'
  secondFontFirstDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
  secondFontFirstDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
  secondFontFirstDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
  secondFontFirstDesignerInnerFrame.itemSpacing = 6
  secondFontFirstDesignerInnerFrame.fills = background
  //////////////аватар первого дизайнера второго шрифта
  let secondFontFirstDesignerAvatar = figma.createEllipse()
  secondFontFirstDesignerAvatar.resize(35, 35)

  //////////////фрейм с именем и компанией первого дизайнера второго шрифта
  let secondFontFirstDesignerNameFrame = figma.createFrame()
  secondFontFirstDesignerNameFrame.layoutMode = 'VERTICAL'
  secondFontFirstDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
  secondFontFirstDesignerNameFrame.counterAxisSizingMode = 'AUTO'
  secondFontFirstDesignerNameFrame.layoutAlign = 'STRETCH'
  secondFontFirstDesignerNameFrame.itemSpacing = 4
  secondFontFirstDesignerNameFrame.fills = background
  ////////////////имя первого дизайнера второго шрифта
  let secondFontFirstDesignerName = figma.createText()
  secondFontFirstDesignerName.characters =
    fontElements[1].texts[language].designers[0].name
  secondFontFirstDesignerName.fontSize = 16
  secondFontFirstDesignerName.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  secondFontFirstDesignerName.fills = black
  ////////////////компания первого дизайнера второго шрифта
  let secondFontFirstDesignerCompany = figma.createText()
  secondFontFirstDesignerCompany.characters =
    fontElements[1].texts[language].designers[0].company
  secondFontFirstDesignerCompany.fontSize = 10
  secondFontFirstDesignerCompany.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  secondFontFirstDesignerCompany.fills = black
  ////////////описание первого дизайнера второго шрифта
  if (fontElements[1].texts[language].designers[0].descriptionHTML.length > 0) {
    let secondFontFirstDesignerDescription = figma.createText()
    secondFontFirstDesignerDescription.characters =
      fontElements[1].texts[language].designers[0].descriptionHTML
    secondFontFirstDesignerDescription.layoutAlign = 'STRETCH'
    secondFontFirstDesignerDescription.fontSize = 12
    secondFontFirstDesignerDescription.fontName = {
      family: fontElements[1].heading,
      style: 'Regular'
    }
    secondFontFirstDesignerDescription.lineHeight = {
      value: 160,
      unit: 'PERCENT'
    }
    secondFontFirstDesignerDescription.fills = background
    secondFontFirstDesignerDescription.fills = black
  }
  //////////второй дизайнер второго шрифта

  console.log(fontElements[1].texts[language].designers[1])
  if (fontElements[1].texts[language].designers[1] !== undefined) {
    ////////////фрейм блока второго дизайнера второго шрифта
    let secondFontSecondDesignerFrame = figma.createFrame()
    secondFontSecondDesignerFrame.layoutMode = 'VERTICAL'
    secondFontSecondDesignerFrame.primaryAxisSizingMode = 'AUTO'
    secondFontSecondDesignerFrame.counterAxisSizingMode = 'AUTO'
    secondFontSecondDesignerFrame.layoutAlign = 'STRETCH'
    secondFontSecondDesignerFrame.itemSpacing = 15
    secondFontSecondDesignerFrame.fills = background

    ////////////фрейм с аватаром и именем второго дизайнера второго шрифта
    let secondFontSecondDesignerInnerFrame = figma.createFrame()
    secondFontSecondDesignerInnerFrame.layoutMode = 'HORIZONTAL'
    secondFontSecondDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
    secondFontSecondDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
    secondFontSecondDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
    secondFontSecondDesignerInnerFrame.itemSpacing = 6
    secondFontSecondDesignerInnerFrame.fills = background

    //////////////аватар второго дизайнера второго шрифта
    let secondFontSecondDesignerAvatar = figma.createEllipse()
    secondFontSecondDesignerAvatar.resize(35, 35)

    //////////////фрейм с именем и компанией второго дизайнера второго шрифта
    let secondFontSecondDesignerNameFrame = figma.createFrame()
    secondFontSecondDesignerNameFrame.layoutMode = 'VERTICAL'
    secondFontSecondDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
    secondFontSecondDesignerNameFrame.counterAxisSizingMode = 'AUTO'
    secondFontSecondDesignerNameFrame.layoutAlign = 'STRETCH'
    secondFontSecondDesignerNameFrame.itemSpacing = 4
    secondFontSecondDesignerNameFrame.fills = background

    ////////////////имя второго дизайнера второго шрифта
    let secondFontSecondDesignerName = figma.createText()
    secondFontSecondDesignerName.characters =
      fontElements[1].texts[language].designers[1].name
    secondFontSecondDesignerName.fontSize = 16
    secondFontSecondDesignerName.fontName = {
      family: fontElements[0].heading,
      style: 'Bold'
    }
    secondFontSecondDesignerName.fills = black

    ////////////////компания второго дизайнера второго шрифта
    let secondFontSecondDesignerCompany = figma.createText()
    secondFontSecondDesignerCompany.characters =
      fontElements[1].texts[language].designers[1].company
    secondFontSecondDesignerCompany.fontSize = 10
    secondFontSecondDesignerCompany.fontName = {
      family: fontElements[1].heading,
      style: 'Regular'
    }
    secondFontSecondDesignerCompany.fills = black

    ////////////описание второго дизайнера второго шрифта
    if (
      fontElements[1].texts[language].designers[1].descriptionHTML.length > 0
    ) {
      let secondFontSecondDesignerDescription = figma.createText()
      console.log(fontElements[1].texts[language].designer)
      secondFontSecondDesignerDescription.characters =
        fontElements[1].texts[language].designers[1].descriptionHTML
      secondFontSecondDesignerDescription.layoutAlign = 'STRETCH'
      secondFontSecondDesignerDescription.fontSize = 12
      secondFontSecondDesignerDescription.fontName = {
        family: fontElements[1].heading,
        style: 'Regular'
      }
      secondFontSecondDesignerDescription.lineHeight = {
        value: 160,
        unit: 'PERCENT'
      }
      secondFontSecondDesignerDescription.fills = background
      secondFontSecondDesignerDescription.fills = black
    }
  }

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

  ////рекомендации пар
  let recomendations = figma.createFrame()
  recomendations.layoutMode = 'VERTICAL'
  recomendations.primaryAxisSizingMode = 'AUTO'
  recomendations.counterAxisSizingMode = 'AUTO'
  recomendations.layoutAlign = 'STRETCH'
  recomendations.itemSpacing = 15
  recomendations.fills = background
  //////заголовок
  let recomendationsTitle = figma.createText()
  recomendationsTitle.characters = 'Other pairings'
  recomendationsTitle.fontSize = 20
  recomendationsTitle.fontName = {
    family: fontElements[0].heading,
    style: 'Bold'
  }
  recomendationsTitle.fills = black
  //////ссылки на пары
  let recomendationsList = figma.createFrame()
  recomendationsList.layoutMode = 'HORIZONTAL'
  recomendationsList.primaryAxisSizingMode = 'AUTO'
  recomendationsList.counterAxisSizingMode = 'AUTO'
  recomendationsList.primaryAxisAlignItems = 'SPACE_BETWEEN'
  recomendationsList.itemSpacing = 20
  recomendationsList.fills = background
  ////////  пары
  let recomendationsListItemFirst = figma.createRectangle()
  recomendationsListItemFirst.resize(215.9, 115)
  recomendationsListItemFirst.cornerRadius = 7
  recomendationsListItemFirst.fills = getNewFills(
    imageRectangle,
    imagesForExport.cover
  )
  let recomendationsListItemSecond = figma.createRectangle()
  recomendationsListItemSecond.resize(215.9, 115)
  recomendationsListItemSecond.cornerRadius = 7
  recomendationsListItemSecond.fills = getNewFills(
    imageRectangle,
    imagesForExport.cover
  )
  let recomendationsListItemThird = figma.createRectangle()
  recomendationsListItemThird.resize(215.9, 115)
  recomendationsListItemThird.cornerRadius = 7
  recomendationsListItemThird.fills = getNewFills(
    imageRectangle,
    imagesForExport.cover
  )

  articleFrame.appendChild(topBarFrame)
  articleFrame.appendChild(pairInfoFrame)
  pairInfoFrame.appendChild(articleName)
  pairInfoFrame.appendChild(imageRectangle)
  pairInfoFrame.appendChild(fontInfoFrame)
  pairInfoFrame.appendChild(recomendations)
  pairInfoFrame.appendChild(copyright)
  fontInfoFrame.appendChild(firstFontName)
  fontInfoFrame.appendChild(firstFontDescription)
  fontInfoFrame.appendChild(firstFontFirstDesignerFrame)
  if (fontElements[0].texts[language].designers[1] !== undefined) {
    fontInfoFrame.appendChild(firstFontSecondDesignerFrame)
  }
  fontInfoFrame.appendChild(secondFontName)
  fontInfoFrame.appendChild(secondFontDescription)
  fontInfoFrame.appendChild(secondFontFirstDesignerFrame)
  if (fontElements[1].texts[language].designers[1] !== undefined) {
    fontInfoFrame.appendChild(secondFontSecondDesignerFrame)
  }
  topBarFrame.appendChild(buttonBack)
  topBarFrame.appendChild(buttonExport)
  buttonBack.appendChild(buttonBackIcon)
  buttonBack.appendChild(buttonBackText)
  buttonExport.appendChild(buttonExportText)
  buttonExport.appendChild(buttonExportIcon)
  firstFontFirstDesignerFrame.appendChild(firstFontFirstDesignerFrameName)
  firstFontFirstDesignerFrame.appendChild(firstFontFirstDesignerInnerFrame)
  if (fontElements[0].texts[language].designers[0].descriptionHTML.length > 0) {
    firstFontFirstDesignerFrame.appendChild(firstFontFirstDesignerDescription)
  }
  firstFontFirstDesignerInnerFrame.appendChild(firstFontFirstDesignerAvatar)
  firstFontFirstDesignerInnerFrame.appendChild(firstFontFirstDesignerNameFrame)
  firstFontFirstDesignerNameFrame.appendChild(firstFontFirstDesignerName)
  firstFontFirstDesignerNameFrame.appendChild(firstFontFirstDesignerCompany)
  if (fontElements[0].texts[language].designers[1] !== undefined) {
    firstFontSecondDesignerFrame.appendChild(firstFontSecondDesignerFrameName)
    firstFontSecondDesignerFrame.appendChild(firstFontSecondDesignerInnerFrame)
    if (
      fontElements[0].texts[language].designers[1].descriptionHTML.length > 0
    ) {
      firstFontSecondDesignerFrame.appendChild(
        firstFontSecondDesignerDescription
      )
    }
    firstFontSecondDesignerInnerFrame.appendChild(firstFontSecondDesignerAvatar)
    firstFontSecondDesignerInnerFrame.appendChild(
      firstFontSecondDesignerNameFrame
    )
    firstFontSecondDesignerNameFrame.appendChild(firstFontSecondDesignerName)
    firstFontSecondDesignerNameFrame.appendChild(firstFontSecondDesignerCompany)
  }

  secondFontFirstDesignerFrame.appendChild(secondFontFirstDesignerFrameName)
  secondFontFirstDesignerFrame.appendChild(secondFontFirstDesignerInnerFrame)
  if (fontElements[1].texts[language].designers[0].descriptionHTML.length > 0) {
    secondFontFirstDesignerFrame.appendChild(secondFontFirstDesignerDescription)
  }
  secondFontFirstDesignerInnerFrame.appendChild(secondFontFirstDesignerAvatar)
  secondFontFirstDesignerInnerFrame.appendChild(
    secondFontFirstDesignerNameFrame
  )
  secondFontFirstDesignerNameFrame.appendChild(secondFontFirstDesignerName)
  secondFontFirstDesignerNameFrame.appendChild(secondFontFirstDesignerCompany)
  if (fontElements[1].texts[language].designers[1] !== undefined) {
    secondFontSecondDesignerFrame.appendChild(secondFontSecondDesignerFrameName)
    secondFontSecondDesignerFrame.appendChild(
      secondFontSecondDesignerInnerFrame
    )
    if (
      fontElements[1].texts[language].designers[1].descriptionHTML.length > 0
    ) {
      secondFontSecondDesignerFrame.appendChild(
        secondFontSecondDesignerDescription
      )
    }
    secondFontSecondDesignerInnerFrame.appendChild(
      secondFontSecondDesignerAvatar
    )
    secondFontSecondDesignerInnerFrame.appendChild(
      secondFontSecondDesignerNameFrame
    )
    secondFontSecondDesignerNameFrame.appendChild(secondFontSecondDesignerName)
    secondFontSecondDesignerNameFrame.appendChild(
      secondFontSecondDesignerCompany
    )
  }
  recomendations.appendChild(recomendationsTitle)
  recomendations.appendChild(recomendationsList)
  recomendationsList.appendChild(recomendationsListItemFirst)
  recomendationsList.appendChild(recomendationsListItemSecond)
  recomendationsList.appendChild(recomendationsListItemThird)
  figma.currentPage.appendChild(articleFrame)

  nodes.push(articleFrame)
  figma.currentPage.selection = nodes
  figma.viewport.scrollAndZoomIntoView(nodes)
}
