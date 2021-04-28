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
        imagesForExportQuantity = 1
        //
        // Object.keys(pair.images).forEach((key, i) => {
        //   figma.ui.postMessage({ type: key, data: pair.images[key] })
        // })

        figma.ui.postMessage({ type: pair, data: pair.cover })
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

  // console.log(Object.keys(imagesForExport).length, imagesForExportQuantity)

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
  // image.fills = getNewFills(image, imagesForExport)

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

function renderCurrentFontDesignerDescription(description, font, black) {
  let text = figma.createText()
  text.characters = description
  text.layoutAlign = 'STRETCH'
  text.fontSize = 12
  text.fontName = {
    family: font,
    style: 'Regular'
  }
  text.lineHeight = {
    value: 160,
    unit: 'PERCENT'
  }
  text.fills = black

  return text
}

function renderRecomendationsFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 15
  frame.fills = background

  return frame
}

function renderRecomendationsListFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.primaryAxisAlignItems = 'SPACE_BETWEEN'
  frame.itemSpacing = 20
  frame.fills = background

  return frame
}

function renderRecomendationsHeading(font, black) {
  let text = figma.createText()
  text.characters = 'Other pairings'
  text.fontSize = 20
  text.fontName = {
    family: font.data.folder,
    style: 'Bold'
  }
  text.fills = black

  return text
}

function getRecomendationsImage() {
  let image = figma.createRectangle()
  image.resize(215.9, 115)
  image.cornerRadius = 7
  // image.fills = getNewFills(
  //   imageRectangle,
  //   imagesForExport.cover
  // )

  return image
}

function renderCopyrightText(font, grey) {
  let text = figma.createText()
  text.characters = 'Information from fonts.google.com'
  text.fills = grey
  text.fontSize = 12
  text.fontName = {
    family: font.data.folder,
    style: 'Regular'
  }
  text.resize(688, 14)

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
  let designerFrame
  let designerHeading

  let recomendationsFrame = renderRecomendationsFrame(background)
  let recomendationsHeading = renderRecomendationsHeading(currentPair, black)
  let recomendationsListFrame = renderRecomendationsListFrame(background)
  let arrayOfRecomendationsImages = []
  let recomendationsImageFirst = getRecomendationsImage()
  let recomendationsImageSecond = getRecomendationsImage()
  let recomendationsImageThird = getRecomendationsImage()
  arrayOfRecomendationsImages.push(
    recomendationsImageFirst,
    recomendationsImageSecond,
    recomendationsImageThird
  )

  let copyrightText = renderCopyrightText(currentPair, grey)

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
          let currentFontDesignerFrame = renderCurrentFontDesignerFrame(
            background
          )

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

          let currentFontDesignerDescription = renderCurrentFontDesignerDescription(
            designer.descriptionHTML,
            font.heading,
            black
          )

          designerFrame = renderDesignerFrame(background)

          designerHeading = renderDesignerHeading(font.heading, black)

          ////пробую запушить отсюда
          // designerFrame.appendChild(designerHeading)
          designerFrame.appendChild(currentFontDesignerFrame)
          designerFrame.appendChild(currentFontDesignerDescription)
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

    pairFrame.appendChild(designerHeading)

    arrayOfFontDesigners[i].forEach((fontDesignerFrame, i) => {
      pairFrame.appendChild(fontDesignerFrame)
    })

    pairInfoFrame.appendChild(pairFrame)
  })

  pairInfoFrame.appendChild(recomendationsFrame)
  recomendationsFrame.appendChild(recomendationsHeading)
  recomendationsFrame.appendChild(recomendationsListFrame)
  arrayOfRecomendationsImages.forEach((recomendationImage, i) => {
    recomendationsListFrame.appendChild(recomendationImage)
  })

  pairInfoFrame.appendChild(copyrightText)

  nodes.push(mainFrame)
  figma.currentPage.selection = nodes
  figma.viewport.scrollAndZoomIntoView(nodes)
}
