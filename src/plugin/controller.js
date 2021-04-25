import { fonts } from '../app/library/fonts_library.js'
import { pairs } from '../app/library/pairs_library.js'
import { paragraphs } from '../app/library/paragraphs.js'
import { designers } from '../app/library/designers.js'
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

        // ///тут надо поменять на кавер и без ключей
        // imagesForExportQuantity = Object.keys(pair.images).length
        //
        // Object.keys(pair.images).forEach((key, i) => {
        //   figma.ui.postMessage({ type: key, data: pair.images[key] })
        // })
        renderFigmaTemplate()
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
function rowCenterSpaceBetween() {
  let frame = figma.createFrame()
  frame.fills = background
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'CENTER'
  frame.primaryAxisAlignItems = 'SPACE_BETWEEN'
  frame.itemSpacing = 6
  return frame
}

////
function rowCenterCenter() {
  let frame = figma.createFrame()
  // frame.cornerRadius = 7
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'CENTER'
  frame.itemSpacing = 6
  frame.fills = background
  return frame
}
////
function columnFixed() {
  let frame = figma.createFrame()
  // pairInfoFrame.x = 44
  // pairInfoFrame.y = 97
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'FIXED'
  frame.layoutAlign = 'STRETCH'
  // pairInfoFrame.itemSpacing = 60 //не у всех
  // pairInfoFrame.paddingTop = 20 //не у всех
  // pairInfoFrame.paddingRight = 40 //не у всех
  // pairInfoFrame.paddingBottom = 40 //не у всех
  // pairInfoFrame.paddingLeft = 40 //не у всех
  frame.fills = background
  return frame
}

function columnAuto() {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 15
  frame.fills = background
  return frame
}

//////заголовок
function headingText(heading) {
  let name = figma.createText()
  name.fontSize = 40
  name.fontName = { family: fontElements[0].heading, style: 'Bold' }
  name.fills = black
  name.characters = heading
  return name
}
//////подзаголовок
function subheadingText(text) {
  let name = figma.createText()
  name.fontSize = 20
  name.fontName = { family: fontElements[0].heading, style: 'Bold' }
  name.fills = black
  name.characters = text
  return name
}

//////подпись
function subText(text) {
  let name = figma.createText()
  name.fontSize = 10
  name.fontName = { family: fontElements[1].heading, style: 'Regular' }
  name.fills = black
  name.characters = text
  return name
}

//основной текст (добавить цикл)
function mainText(text) {
  paragraph = figma.createText()
  paragraph.fontSize = 16
  paragraph.fontName = {
    family: fontElements[1].heading,
    style: 'Regular'
  }
  paragraph.lineHeight = {
    value: 160,
    unit: 'PERCENT'
  }
  paragraph.layoutAlign = 'STRETCH'
  paragraph.fills = black
  paragraph.characters = text
}

//
//
//
//
//
//
//

function renderMainFrame(background) {
  //фрейм самого экспорта
  let frame = figma.createFrame()
  frame.x = figma.viewport.center.x
  frame.y = figma.viewport.center.y
  frame.paddingTop = 23
  frame.itemSpacing = 23
  frame.resize(768, 1659)
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'FIXED'
  frame.counterAxisAlignItems = 'CENTER'
  frame.fills = background

  return frame
}

function renderPairInfoFrame(background) {
  let frame = figma.createFrame()
  frame.x = 44
  frame.y = 97
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'FIXED'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 60
  frame.paddingTop = 20
  frame.paddingRight = 40
  frame.paddingBottom = 40
  frame.paddingLeft = 40
  frame.fills = background

  return frame
}

function renderPairFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.itemSpacing = 23
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'FIXED'
  frame.layoutAlign = 'STRETCH'
  frame.fills = background

  return frame
}

function renderHeading(pair, black) {
  let text = figma.createText()
  text.fontSize = 40
  text.fontName = { family: pair.data.folder, style: 'Bold' }
  text.fills = black
  text.characters = pair.data.heading

  return text
}

function renderTopBarFrame(background) {
  let frame = figma.createFrame()
  frame.fills = background
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'CENTER'
  frame.primaryAxisAlignItems = 'SPACE_BETWEEN'
  frame.itemSpacing = 6
  frame.strokeWeight = 1
  frame.resize(688, 36)

  return frame
}

function renderButtonBack() {
  let button = figma.createFrame()
  button.cornerRadius = 7
  button.layoutMode = 'HORIZONTAL'
  button.primaryAxisSizingMode = 'AUTO'
  button.counterAxisSizingMode = 'AUTO'
  button.counterAxisAlignItems = 'CENTER'
  button.itemSpacing = 6
  button.paddingTop = 10
  button.paddingRight = 10
  button.paddingBottom = 10
  button.paddingLeft = 10

  return button
}

function textTobuttonBack(black) {
  let text = figma.createText()
  text.characters = 'Back'
  text.fontSize = 14
  text.fills = black

  return text
}

function renderButtonExport() {
  let button = figma.createFrame()
  button.cornerRadius = 7
  button.layoutMode = 'HORIZONTAL'
  button.primaryAxisSizingMode = 'AUTO'
  button.counterAxisSizingMode = 'AUTO'
  button.counterAxisAlignItems = 'CENTER'
  button.itemSpacing = 6
  button.paddingTop = 10
  button.paddingRight = 10
  button.paddingBottom = 10
  button.paddingLeft = 10

  return button
}

function textTobuttonExport(black) {
  let text = figma.createText()
  text.characters = 'Export to artboard'
  text.fontSize = 14
  text.fills = black

  return text
}

function renderPairImage() {
  let image = figma.createRectangle()
  image.resize(688, 367)
  image.cornerRadius = 20
  // imageRectangle.fills = getNewFills(imageRectangle, imagesForExport.cover)

  return image
}

function renderFontName(heading) {
  let text = figma.createText()
  text.characters = heading
  text.fontSize = 40
  text.fontName = { family: heading, style: 'Bold' }
  return text
}

function renderParagraph(font, paragraph, black) {
  let text = figma.createText()
  text.characters = paragraph.body
  text.fontSize = 16
  text.fills = black
  text.fontName = {
    family: font,
    style: 'Regular'
  }
  text.lineHeight = {
    value: 160,
    unit: 'PERCENT'
  }
  text.layoutAlign = 'STRETCH'

  return text
}

function renderDesignerHeading(font, black) {
  let text = figma.createText()
  text.characters = 'Designer'
  text.fontSize = 20
  text.fontName = {
    family: font,
    style: 'Bold'
  }
  text.fills = black

  return text
}

function renderDesignerFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 15
  frame.fills = background

  return frame
}

function renderCurrentFontDesignerFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'CENTER'
  frame.itemSpacing = 6
  frame.fills = background

  return frame
}

function getCurrentFontDesignerImage() {
  let avatar = figma.createEllipse()
  avatar.resize(35, 35)

  return avatar
}

function renderCurrentFontDesignerNameFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 4
  frame.fills = background

  return frame
}

function renderCurrentFontDesignerName(designer, font, black) {
  let text = figma.createText()
  text.characters = designer
  text.fontSize = 16
  text.fontName = {
    family: font,
    style: 'Bold'
  }
  text.fills = black

  return text
}

function renderCurrentFontDesignerCompany(company, font, black) {
  let text = figma.createText()
  text.characters = company
  text.fontSize = 10
  text.fontName = {
    family: font,
    style: 'Regular'
  }
  text.fills = black

  return text
}

/////// template

function renderFigmaTemplate() {
  console.log('started')

  const { language } = currentPair
  // const articleNameText = currentPair.data.heading
  const articleNameText = currentPair
  let fontElements = []

  fonts.forEach((font, i) => {
    if (font.id === currentPair.data.fonts[0]) {
      fontElements.push(font)
    }
  })

  fonts.forEach((font, i) => {
    if (font.id === currentPair.data.fonts[1]) {
      fontElements.push(font)
    }
  })

  let nodes = []

  let background = [{ type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }]

  let black = [{ type: 'SOLID', color: { r: 0.165, g: 0.161, b: 0.129 } }]

  let grey = [{ type: 'SOLID', color: { r: 0.62, g: 0.62, b: 0.62 } }]

  // let mainFrame = renderMainFrame(background)
  // let pairFrame = renderPairFrame(background)
  // let pairHeading = renderHeading(currentPair, fontElements, black)
  //
  // mainFrame.appendChild(pairFrame)
  // pairFrame.appendChild(pairHeading)

  let mainFrame = renderMainFrame(background)

  let pairFrames = []
  let pairHeading = renderHeading(currentPair, black)
  let topBarFrame = renderTopBarFrame(background)
  let buttonBack = renderButtonBack()
  let buttonBackText = textTobuttonBack(black)
  let buttonExport = renderButtonExport()
  let buttonExportText = textTobuttonExport(black)
  let pairInfoFrame = renderPairInfoFrame(background)
  let pairImage = renderPairImage()
  let fontPairNames = []
  let arrayOfFontParagraphs = [[], []]
  let arrayOfFontDesigners = [[], []]
  let test

  fontElements.forEach((font, i) => {
    let pairFrame = renderPairFrame(background)
    let fontName = renderFontName(font.heading)
    fontPairNames.push(fontName)

    let currentI = i

    paragraphs.forEach((paragraph, i) => {
      if (paragraph.font_id === font.id) {
        let pairParagraph = renderParagraph(font.heading, paragraph, black)

        arrayOfFontParagraphs[currentI].push(pairParagraph)
      }
    })

    font.designers.forEach((fontDesigner, i) => {
      designers.forEach((designer, i) => {
        if (designer.id === fontDesigner) {
          let designerFrame = renderDesignerFrame(background)
          let currentFontDesignerFrame = renderCurrentFontDesignerFrame(
            background
          )
          let designerHeading = renderDesignerHeading(font.heading, black)

          let currentFontDesignerImage = getCurrentFontDesignerImage()

          let currentFontDesignerNameFrame = renderCurrentFontDesignerNameFrame(
            background
          )

          let currentFontDesignerName = renderCurrentFontDesignerName(
            designer.name,
            font.heading,
            black
          )

          let currentFontDesignerCompany = renderCurrentFontDesignerCompany(
            designer.company,
            font.heading,
            black
          )

          ////пробую запушить отсюда
          designerFrame.appendChild(designerHeading)
          designerFrame.appendChild(currentFontDesignerFrame)
          currentFontDesignerFrame.appendChild(currentFontDesignerImage)
          currentFontDesignerFrame.appendChild(currentFontDesignerNameFrame)
          currentFontDesignerNameFrame.appendChild(currentFontDesignerName)
          currentFontDesignerNameFrame.appendChild(currentFontDesignerCompany)

          arrayOfFontDesigners[currentI].push(designerFrame)
        }
      })
    })

    pairFrames.push(pairFrame)
  })

  mainFrame.appendChild(topBarFrame)
  mainFrame.appendChild(pairInfoFrame)
  topBarFrame.appendChild(buttonBack)
  topBarFrame.appendChild(buttonExport)
  buttonBack.appendChild(buttonBackText)
  buttonExport.appendChild(buttonExportText)

  pairInfoFrame.appendChild(pairHeading)
  pairInfoFrame.appendChild(pairImage)

  pairFrames.forEach((pairFrame, i) => {
    pairFrame.appendChild(fontPairNames[i])

    arrayOfFontParagraphs[i].forEach((fontParagraph, i) => {
      pairFrame.appendChild(fontParagraph)
    })

    arrayOfFontDesigners[i].forEach((fontDesignerFrame, i) => {
      pairFrame.appendChild(fontDesignerFrame)
      // fontDesignerFrame.appendChild(currentFontDesignerFrame)
    })

    pairInfoFrame.appendChild(pairFrame)
  })

  // ////фрейм верхнего блока с кнопками
  // let topBarFrame = rowCenterSpaceBetween()
  // topBarFrame.strokeWeight = 1
  // topBarFrame.resize(688, 36)
  // //////фрейм кнопки назад
  // let buttonBack = rowCenterCenter()
  // buttonBack.paddingTop = 10
  // buttonBack.paddingRight = 10
  // buttonBack.paddingBottom = 10
  // buttonBack.paddingLeft = 10
  //
  // ////////иконка кнопки назад
  // let buttonBackIcon = figma.createRectangle()
  // buttonBackIcon.resize(7, 8)
  // buttonBackIcon.fills = getNewFills(buttonBackIcon, imagesForExport.left)
  // // buttonBackIcon.fills = black
  //
  // ////////текст кнопки назад
  // let buttonBackText = figma.createText()
  // buttonBackText.characters = 'Back'
  // buttonBackText.fontSize = 14
  // buttonBackText.fills = black
  // buttonBackText.family = 'PT Sans'
  // //////фрейм кнопки экспорт
  // let buttonExport = rowCenterCenter()
  // buttonExport.cornerRadius = 7
  // buttonExport.paddingTop = 10
  // buttonExport.paddingRight = 10
  // buttonExport.paddingBottom = 10
  // buttonExport.paddingLeft = 10
  //
  // ////////текст кнопки экспорт
  // let buttonExportText = figma.createText()
  // buttonExportText.characters = 'Export to artboard'
  // buttonExportText.fontSize = 14
  // buttonExportText.fills = black
  // buttonExportText.family = 'PT Sans'
  // ////////иконка кнопки экспорт
  // let buttonExportIcon = figma.createRectangle()
  // buttonExportIcon.resize(8, 9)
  // buttonExportIcon.fills = getNewFills(buttonExportIcon, imagesForExport.export)

  //   //////картинка пары
  //   let imageRectangle = figma.createRectangle()
  //   imageRectangle.resize(688, 367)
  //   imageRectangle.cornerRadius = 20
  //   imageRectangle.fills = getNewFills(imageRectangle, imagesForExport.cover)
  //
  //   //////фрейм шрифта внутри пары
  //   let fontInfoFrame = columnFixed()
  //
  //   // articleFrame.appendChild(topBarFrame)
  //   articleFrame.appendChild(pairInfoFrame)
  //   pairInfoFrame.appendChild(articleName)
  //   pairInfoFrame.appendChild(imageRectangle)
  //   pairInfoFrame.appendChild(fontInfoFrame)
  //
  //   let fontItemDesignerFrameName = subheadingText()
  //   fontItemDesignerFrameName.characters = 'Designer'
  //
  //   fontElements.forEach((fontItem, i) => {
  //     // let fontItemInfo = []
  //
  //     let fontItemName = headingText(fontItem.heading)
  //     fontInfoFrame.appendChild(fontItemName)
  //
  //     let fontItemParagraphs = []
  //     paragraphs.forEach((paragraph, i) => {
  //       if (fontItem.id === paragraph.font_id) {
  //         fontItemParagraphs.push(paragraph)
  //       }
  //     })
  //     let fontItemDescription = []
  //     fontItemParagraphs.forEach((fontItemParagraph, i) => {
  //       fontItemParagraph = mainText(fontItemParagraph.body)
  //       fontItemDescription.push(fontItemParagraph)
  //     })
  //     fontInfoFrame.appendChild(fontItemDescription)
  //
  //     let fontItemDesigners = []
  //     fontItem.designers.forEach((fontItemDesigner, i) => {
  //       designers.forEach((designer, i) => {
  //         if (fontItemDesigner === designer.id) {
  //           let fontItemDesignerFrame = columnAuto()
  //
  //           let fontItemDesignerInnerFrame = rowCenterCenter()
  //
  //           let fontItemDesignerAvatar = figma.createEllipse()
  //           fontItemDesignerAvatar.resize(35, 35)
  //
  //           let fontItemDesignerNameFrame = columnAuto()
  //           fontItemDesignerNameFrame.itemSpacing = 4
  //
  //           let fontItemDesignerName = subheadingText(designer.name)
  //           firstFontFirstDesignerName.fontSize = 16
  //
  //           let fontItemDesignerCompany = subText(designer.company)
  //
  //           if (designer.descriptionHTML.length > 0) {
  //             let fontItemDesignerDescription = mainText(designer.descriptionHTML)
  //           }
  //
  //           fontItemDesigners.push(designer)
  //
  //           fontItemDesignerFrame.appendChild(fontItemDesignerInnerFrame)
  //           fontItemDesignerFrame.appendChild(fontItemDesignerFrameName)
  //           fontItemDesignerInnerFrame.appendChild(fontItemDesignerAvatar)
  //           fontItemDesignerInnerFrame.appendChild(fontItemDesignerNameFrame)
  //           fontItemDesignerNameFrame.appendChild(fontItemDesignerName)
  //           fontItemDesignerNameFrame.appendChild(fontItemDesignerCompany)
  //           fontItemDesignerNameFrame.appendChild(fontItemDesignerDescription)
  //
  //           ///или///
  //           fontItemDesignerFrame.appendChild(fontItemDesigners)
  //         }
  //       })
  //     })
  //   })
  //
  //   ////копирайт
  //   let copyright = figma.createText()
  //   copyright.characters = 'Information from fonts.google.com'
  //   copyright.fills = grey
  //   copyright.fontSize = 12
  //   copyright.fontName = {
  //     family: fontElements[1].heading,
  //     style: 'Regular'
  //   }
  //   copyright.resize(688, 14)
  //
  //   ////рекомендации пар
  //   let recomendations = columnAuto()
  //   //////заголовок
  //   let recomendationsTitle = subheadingText()
  //   //////ссылки на пары
  //   let recomendationsList = rowCenterSpaceBetween()
  //   recomendationsList.itemSpacing = 20
  //   ////////  пары
  //
  //   for (var i = 0; i < 3; i++) {
  //     let recomendationsListItem = figma.createRectangle()
  //     recomendationsListItem.resize(215.9, 115)
  //     recomendationsListItem.cornerRadius = 7
  //     recomendationsListItem.fills = getNewFills(
  //       imageRectangle,
  //       imagesForExport.cover
  //     )
  //     recomendationsList.appendChild(recomendationsListItem)
  //   }
  //
  //   pairInfoFrame.appendChild(recomendations)
  //   pairInfoFrame.appendChild(copyright)
  //
  //   recomendations.appendChild(recomendationsTitle)
  //   recomendations.appendChild(recomendationsList)
  //   figma.currentPage.appendChild(articleFrame)
  //
  //   nodes.push(articleFrame)
  //   figma.currentPage.selection = nodes
  //   figma.viewport.scrollAndZoomIntoView(nodes)
}
