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

function renderButtonBackIcon(black) {
  const vector = figma.createVector()
  vector.resize(6, 10)
  vector.fills = black
  vector.strokes = []

  vector.vectorPaths = [
    {
      windingRule: 'EVENODD',
      data:
        'M 4.35355 0.646447 C 4.54882 0.841709 4.54882 1.15829 4.35355 1.35355 L 1.70711 4 L 4.35355 6.64645 C 4.54882 6.84171 4.54882 7.15829 4.35355 7.35355 C 4.15829 7.54882 3.84171 7.54882 3.64645 7.35355 L 0.646446 4.35355 C 0.451184 4.15829 0.451184 3.84171 0.646446 3.64645 L 3.64645 0.646447 C 3.84171 0.451184 4.15829 0.451184 4.35355 0.646447 Z'
    }
  ]

  return vector
}

function renderButtonBackText(black) {
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

function renderButtonExportIcon(black) {
  const vector = figma.createVector()
  vector.resize(6, 10)
  vector.fills = black
  vector.strokes = []

  vector.vectorPaths = [
    {
      windingRule: 'EVENODD',
      data:
        'M 1 4.99902 C 1.27614 4.99902 1.5 5.22288 1.5 5.49902 L 1.5 8.4992 L 7.50037 8.4992 L 7.50037 5.49902 C 7.50037 5.22288 7.72423 4.99902 8.00037 4.99902 C 8.27651 4.99902 8.50037 5.22288 8.50037 5.49902 L 8.50037 8.4992 C 8.50037 9.0515 8.05265 9.4992 7.50037 9.4992 L 1.5 9.4992 C 0.947724 9.4992 0.5 9.0515 0.5 8.4992 L 0.5 5.49902 C 0.5 5.22288 0.723858 4.99902 1 4.99902 Z'
    },
    {
      windingRule: 'EVENODD',
      data:
        'M 4.83023 0.624038 C 4.79516 0.593212 4.75661 0.56804 4.71585 0.548623 C 4.70175 0.541883 4.68741 0.53585 4.67289 0.53052 C 4.64255 0.519378 4.61084 0.511092 4.57806 0.505989 C 4.55234 0.501976 4.5264 0.499987 4.50049 0.5 C 4.4746 0.499988 4.44867 0.501978 4.42296 0.505989 C 4.37815 0.512979 4.33255 0.52679 4.29039 0.54617 C 4.28816 0.547197 4.28739 0.547561 4.28517 0.548623 C 4.24441 0.568039 4.20586 0.593212 4.1708 0.624038 L 2.07691 2.40067 C 1.86635 2.57932 1.84049 2.89485 2.01915 3.10541 C 2.1978 3.31597 2.51333 3.34183 2.72389 3.16317 L 4.00051 2.07998 L 4.00051 5.90026 C 4.00051 6.1764 4.22437 6.40026 4.50051 6.40026 C 4.77665 6.40026 5.00051 6.1764 5.00051 5.90026 L 5.00051 2.07998 L 6.27713 3.16317 C 6.48769 3.34183 6.80322 3.31597 6.98188 3.10541 C 7.16053 2.89485 7.13467 2.57932 6.92411 2.40067 L 4.83023 0.624038 Z'
    }
  ]

  return vector
}

function renderButtonExportText(black) {
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

  // Вынести в одну функцию это и
  fonts.forEach((font, i) => {
    if (font.id === currentPair.fonts[0]) {
      fontElements.push(font)
    }
  })
  // это
  fonts.forEach((font, i) => {
    if (font.id === currentPair.fonts[1]) {
      fontElements.push(font)
    }
  })
  // а это в другую
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

  const mainFrame = renderMainFrame(background)

  const pairFrames = []
  const pairHeading = renderHeading(currentPair, black)
  const topBarFrame = renderTopBarFrame(background)
  const buttonBack = renderButtonBack()
  const buttonBackIcon = renderButtonBackIcon(black)
  const buttonBackText = renderButtonBackText(black)
  const buttonExport = renderButtonExport()
  const buttonExportIcon = renderButtonExportIcon(black)
  const buttonExportText = renderButtonExportText(black)
  const pairInfoFrame = renderPairInfoFrame(background)
  const pairImage = renderPairImage()

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

  // лучше тоже вынести в функцию
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

          designerFrame = renderDesignerFrame(background)

          designerHeading = renderDesignerHeading(firstFontFontFamily, black)

          designerFrame.appendChild(designerHeading)

          designerFrame.appendChild(currentFontDesignerFrame)
          if (designer.descriptionHTML.length > 0) {
            let currentFontDesignerDescription = renderCurrentFontDesignerDescription(
              designer.descriptionHTML,
              secondFontFontFamily,
              black
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
  buttonBack.appendChild(buttonBackIcon)
  buttonBack.appendChild(buttonBackText)
  buttonExport.appendChild(buttonExportText)
  buttonExport.appendChild(buttonExportIcon)

  pairInfoFrame.appendChild(pairHeading)
  pairInfoFrame.appendChild(pairImage)

  pairFrames.forEach((pairFrame, i) => {
    pairFrame.appendChild(fontPairNames[i])

    arrayOfFontParagraphs[i].forEach((fontParagraph, i) => {
      pairFrame.appendChild(fontParagraph)
    })

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

export { renderFigmaTemplate }
