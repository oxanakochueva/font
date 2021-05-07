import { fonts } from '../app/library/fonts_library.js'
import { paragraphs } from '../app/library/paragraphs.js'
import { designers } from '../app/library/designers.js'

function mainFrame(background) {
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

function pairInfoFrame(background) {
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

function pairFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.itemSpacing = 23
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'FIXED'
  frame.layoutAlign = 'STRETCH'
  frame.fills = background

  return frame
}

function heading(pair, black) {
  let text = figma.createText()
  text.fontSize = 40
  text.fontName = { family: pair.data.folder, style: 'Bold' }
  text.fills = black
  text.characters = pair.data.heading

  return text
}

function topBarFrame(background) {
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

function buttonBack() {
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

function textToButtonBack(black) {
  let text = figma.createText()
  text.characters = 'Back'
  text.fontSize = 14
  text.fills = black

  return text
}

function buttonExport() {
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

function textToButtonExport(black) {
  let text = figma.createText()
  text.characters = 'Export to artboard'
  text.fontSize = 14
  text.fills = black

  return text
}

function pairImage() {
  let image = figma.createRectangle()
  image.resize(688, 367)
  image.cornerRadius = 20
  // image.fills = getNewFills(image, imagesForExport)

  return image
}

function fontName(heading) {
  let text = figma.createText()
  text.characters = heading
  text.fontSize = 40
  text.fontName = { family: heading, style: 'Bold' }
  return text
}

function paragraph(font, paragraph, black) {
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

function designerHeading(font, black) {
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

function designerFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 15
  frame.fills = background

  return frame
}

function currentFontDesignerFrame(background) {
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

function currentFontDesignerNameFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 4
  frame.fills = background

  return frame
}

function currentFontDesignerName(designer, font, black) {
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

function currentFontDesignerCompany(company, font, black) {
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

function currentFontDesignerDescription(description, font, black) {
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

function recomendationsFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.layoutAlign = 'STRETCH'
  frame.itemSpacing = 15
  frame.fills = background

  return frame
}

function recomendationsListFrame(background) {
  let frame = figma.createFrame()
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.primaryAxisAlignItems = 'SPACE_BETWEEN'
  frame.itemSpacing = 20
  frame.fills = background

  return frame
}

function recomendationsHeading(font, black) {
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

function copyrightText(font, grey) {
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
  let recomendationsImageFirst = getRecomendationsImage()
  let recomendationsImageSecond = getRecomendationsImage()
  let recomendationsImageThird = getRecomendationsImage()

  let copyrightText = renderCopyrightText(currentPair, grey)

  arrayOfRecomendationsImages.push(
    recomendationsImageFirst,
    recomendationsImageSecond,
    recomendationsImageThird
  )

  fontElements.forEach((font, fontIndex) => {
    let pairFrame = renderPairFrame(background)
    let fontName = renderFontName(font.heading)
    fontPairNames.push(fontName)

    paragraphs.forEach((paragraph, i) => {
      if (paragraph.font_id === font.id) {
        let pairParagraph = renderParagraph(font.heading, paragraph, black)
        arrayOfFontParagraphs[fontIndex].push(pairParagraph)
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

  pairInfoFrame.appendChild(copyrightText)

  nodes.push(mainFrame)
  figma.currentPage.selection = nodes
  figma.viewport.scrollAndZoomIntoView(nodes)
}

export { renderFigmaTemplate }
