import { fonts } from '../app/library/fonts_library.js'
import { pairs } from '../app/library/pairs_library.js'
import { paragraphs } from '../app/library/paragraphs.js'
import { designers } from '../app/library/designers.js'
import { getStoreCurrentPair, getStoreImagesForExport } from './store'
import { getNewFills } from './images'

function getImageBytesFromImagesForExportById(id) {
  const imagesForExport = getStoreImagesForExport()
  let imageBytes

  imagesForExport.forEach((image, i) => {
    if (image.id === id) {
      imageBytes = image.image
    }
  })

  return imageBytes
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
  text.fontName = { family: pair.folder, style: 'Bold' }
  text.fills = black
  text.characters = pair.heading

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

function renderTextToButtonBack(black) {
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

function renderTextToButtonExport(black) {
  let text = figma.createText()
  text.characters = 'Export to artboard'
  text.fontSize = 14
  text.fills = black

  return text
}

function renderPairImage() {
  const currentPair = getStoreCurrentPair()
  const imageBytes = getImageBytesFromImagesForExportById(currentPair.id)
  const rectangle = figma.createRectangle()

  rectangle.resize(688, 367)
  rectangle.cornerRadius = 20
  rectangle.fills = getNewFills(rectangle, imageBytes)

  return rectangle
}

function renderFontName(heading, font) {
  let text = figma.createText()
  text.characters = heading
  text.fontSize = 40
  text.fontName = { family: font, style: 'Bold' }
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

function renderCurrentFontDesignerImage(id) {
  const imageBytes = getImageBytesFromImagesForExportById(id)
  const ellipse = figma.createEllipse()

  ellipse.resize(35, 35)
  ellipse.fills = getNewFills(ellipse, imageBytes)

  return ellipse
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
    family: font.folder,
    style: 'Bold'
  }
  text.fills = black

  return text
}

function renderRecomendationsImage(id) {
  const imageBytes = getImageBytesFromImagesForExportById(id)
  const rectangle = figma.createRectangle()

  rectangle.resize(215.9, 115)
  rectangle.cornerRadius = 7
  rectangle.fills = getNewFills(rectangle, imageBytes)

  return rectangle
}

function renderCopyrightText(font, grey) {
  let text = figma.createText()
  text.characters = 'Information from fonts.google.com'
  text.fills = grey
  text.fontSize = 12
  text.fontName = {
    family: font,
    style: 'Regular'
  }
  text.resize(688, 14)

  return text
}

function renderFigmaTemplate(imagesForExport) {
  const currentPair = getStoreCurrentPair()
  const { language } = currentPair
  const articleNameText = currentPair
  let fontElements = []
  let listOfRecomendations = []

  fonts.forEach((font, i) => {
    if (font.id === currentPair.fonts[0]) {
      fontElements.push(font)
    }
  })

  fonts.forEach((font, i) => {
    if (font.id === currentPair.fonts[1]) {
      fontElements.push(font)
    }
  })

  pairs.forEach((pair, i) => {
    currentPair.recomendationList.forEach((recomendation, i) => {
      if (pair.id === recomendation) {
        listOfRecomendations.push(pair)
      }
    })
  })

  let nodes = []
  const background = [
    { type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }
  ]
  const black = [{ type: 'SOLID', color: { r: 0.165, g: 0.161, b: 0.129 } }]
  const grey = [{ type: 'SOLID', color: { r: 0.62, g: 0.62, b: 0.62 } }]
  const firstFontFontFamily = fontElements[0].heading
  const secondFontFontFamily = fontElements[0].heading

  let mainFrame = renderMainFrame(background)

  let pairFrames = []
  let pairHeading = renderHeading(currentPair, black)
  let topBarFrame = renderTopBarFrame(background)
  let buttonBack = renderButtonBack()
  let buttonBackText = renderTextToButtonBack(black)
  let buttonExport = renderButtonExport()
  let buttonExportText = renderTextToButtonExport(black)
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

  let recomendationsImageFirst = renderRecomendationsImage(
    listOfRecomendations[0].id
  )
  let recomendationsImageSecond = renderRecomendationsImage(
    listOfRecomendations[1].id
  )
  let recomendationsImageThird = renderRecomendationsImage(
    listOfRecomendations[2].id
  )

  let copyrightText = renderCopyrightText(secondFontFontFamily, grey)

  arrayOfRecomendationsImages.push(
    recomendationsImageFirst,
    recomendationsImageSecond,
    recomendationsImageThird
  )

  fontElements.forEach((font, fontIndex) => {
    let pairFrame = renderPairFrame(background)
    let fontName = renderFontName(font.heading, firstFontFontFamily)
    fontPairNames.push(fontName)

    paragraphs.forEach((paragraph, i) => {
      if (paragraph.font_id === font.id) {
        let pairParagraph = renderParagraph(
          secondFontFontFamily,
          paragraph,
          black
        )
        arrayOfFontParagraphs[fontIndex].push(pairParagraph)
      }
    })

    font.designers.forEach((fontDesigner, i) => {
      designers.forEach((designer, i) => {
        if (designer.id === fontDesigner) {
          let currentFontDesignerFrame = renderCurrentFontDesignerFrame(
            background
          )

          let currentFontDesignerImage = renderCurrentFontDesignerImage(
            designer.id
          )

          let currentFontDesignerNameFrame = renderCurrentFontDesignerNameFrame(
            background
          )

          let currentFontDesignerName = renderCurrentFontDesignerName(
            designer.name,
            secondFontFontFamily,
            black
          )

          let currentFontDesignerCompany = renderCurrentFontDesignerCompany(
            designer.company,
            secondFontFontFamily,
            black
          )

          let currentFontDesignerDescription = renderCurrentFontDesignerDescription(
            designer.descriptionHTML,
            secondFontFontFamily,
            black
          )

          designerFrame = renderDesignerFrame(background)

          designerHeading = renderDesignerHeading(firstFontFontFamily, black)

          designerFrame.appendChild(currentFontDesignerFrame)
          console.log(
            'empty',
            currentFontDesignerDescription,
            designer.descriptionHTML.length
          )
          if (designer.descriptionHTML.length > 0) {
            console.log(
              'empty',
              currentFontDesignerDescription,
              currentFontDesignerDescription.length
            )
            designerFrame.appendChild(currentFontDesignerDescription)
          }
          currentFontDesignerFrame.appendChild(currentFontDesignerImage)
          currentFontDesignerFrame.appendChild(currentFontDesignerNameFrame)
          currentFontDesignerNameFrame.appendChild(currentFontDesignerName)
          currentFontDesignerNameFrame.appendChild(currentFontDesignerCompany)

          arrayOfFontDesigners[fontIndex].push(designerFrame)
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
  // recomendationsListFrame.appendChild(recomendationsImageFirst)
  // recomendationsListFrame.appendChild(recomendationsImageSecond)
  // recomendationsListFrame.appendChild(recomendationsImageThird)

  pairInfoFrame.appendChild(copyrightText)

  nodes.push(mainFrame)
  figma.currentPage.selection = nodes
  figma.viewport.scrollAndZoomIntoView(nodes)
}

export { renderFigmaTemplate }
