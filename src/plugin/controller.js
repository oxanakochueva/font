// import * as reactFigma from 'react-figma'

import { fonts, pairs } from '../app/font_library.js'
import josefin_sans_cardo from '../app/assets/cover.png'

figma.showUI(__uiFiles__.ui)
figma.ui.resize(668, 628)

// figma.showUI(__uiFiles__.worker, { visible: false })
// figma.ui.postMessage({ pluginMessage: { type: 'yo' } })

figma.ui.onmessage = async msg => {
  console.log('FIGMA JUST GOT A MESSAGE, YO', msg)
  renderTestImage(msg.bytes)
  // await testAwaitFunction()
  //   // new Promise(resolve => resolve('yo')).then(bla => console.log('PROM'))

  // const newBytes = await new Promise((resolve, reject) => {
  //   console.log('message pending 1')
  //   figma.ui.onmessage = value => resolve(value)
  // })
}

function testAwaitFunction() {
  figma.ui.postMessage(josefin_sans_cardo)

  console.log('message send and we are waiting for response')

  // Wait for the worker's response.
  // const newBytes = await new Promise((resolve, reject) => {
  //   console.log('message pending 1')
  //   figma.ui.onmessage = value => resolve(value)
  // })
}

testAwaitFunction()

// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index
// }
//
// function showFonts(fonts) {
//   figma.ui.postMessage({
//     type: 'get-font-list',
//     message: fonts
//   })
//
//   let styles = []
//   let names = []
//
//   fonts.forEach((font, i) => {
//     styles.push(font.fontName.style)
//     names.push(font.fontName.family)
//   })
//
//   styles = styles.filter(onlyUnique)
//
//   console.log(styles, names)
// }

// async function invertImages(node) {
//   const newFills = []
//
//   for (const paint of node.fills) {
//     if (paint.type === 'IMAGE') {
//       // Get the (encoded) bytes for this image.
//       const image = figma.getImageByHash(paint.imageHash)
//       const bytes = await image.getBytesAsync()
//
//       // Create an invisible iframe to act as a "worker" which
//       // will do the task of decoding and send us a message
//       // when it's done.
//       figma.showUI(__html__, { visible: false })
//
//       // Send the raw bytes of the file to the worker.
//       figma.ui.postMessage(bytes)
//
//       // Wait for the worker's response.
//       const newBytes = await new Promise((resolve, reject) => {
//         figma.ui.onmessage = value => resolve(value)
//       })
//
//       // Create a new paint for the new image.
//       const newPaint = JSON.parse(JSON.stringify(paint))
//       newPaint.imageHash = figma.createImage(newBytes).hash
//       newFills.push(newPaint)
//     }
//   }
//   node.fills = newFills
// }

// let newPaintOutside = 'default value not changed'

// async function exportTest() {
//   // newPaintOutside = await prepareImage()
//
//   newPaintOutside = await new Promise((resolve, reject) => {
//     console.log('message pending 1')
//     prepareImage().then(() => resolve(value))
//   })
// }

// async function prepareImage(imageFile) {
//   // imageRectangle.fills[0].type = 'IMAGE'
//
//   // Create an invisible iframe to act as a "worker" which
//   // will do the task of decoding and send us a message
//   // when it's done.
//   // figma.showUI(__uiFiles__.worker, { visible: false })
//
//   // Send the raw bytes of the file to the worker.
//   // figma.ui.postMessage(imageFile)
//
//   console.log('message send and we are waiting for response')
//
//   // Wait for the worker's response.
//   // const newBytes = await new Promise((resolve, reject) => {
//   //   console.log('message pending 1')
//   //   figma.ui.onmessage = value => resolve(value)
//   // })
//   //
//   // console.log('new bytes from promise', newBytes)
//   //
//   // renderTestImage(newBytes)
//
//   // prettier-ignore
//   const newBytesPrepared = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,70,0,0,0,70,8,6,0,0,0,113,46,226,132,0,0,4,66,73,68,65,84,120,94,237,156,235,81,227,48,16,128,181,54,230,55,116,0,21,0,191,163,48,164,2,160,2,72,5,119,84,112,80,193,113,21,28,87,1,164,2,103,98,133,191,164,131,11,21,92,126,163,216,123,179,70,206,195,248,109,231,101,75,51,153,201,76,28,203,250,188,47,173,180,2,182,198,54,28,14,79,93,215,61,53,12,227,4,0,142,16,241,84,117,127,20,122,140,49,99,108,162,62,35,198,216,59,0,244,91,173,22,125,95,75,131,85,246,98,219,246,129,101,89,183,140,177,75,130,0,0,7,101,250,67,196,137,97,24,125,198,88,239,227,227,163,223,233,116,8,224,74,218,74,192,56,142,115,1,0,63,24,99,23,43,121,106,117,83,0,120,113,93,247,207,249,249,249,75,213,253,84,10,102,56,28,222,34,34,1,9,171,70,213,207,29,190,223,24,0,30,90,173,214,83,85,29,85,2,70,73,200,239,13,0,89,25,160,82,96,108,219,62,178,44,139,128,172,84,101,10,72,193,147,148,242,161,140,13,42,12,230,245,245,245,155,235,186,247,101,13,106,129,65,103,253,203,4,0,238,138,170,87,110,48,202,211,144,29,249,158,245,9,55,124,221,35,231,252,46,239,51,228,2,163,84,231,153,49,22,196,31,121,251,219,212,245,35,41,229,117,30,213,202,12,70,65,177,183,192,192,22,133,59,150,82,118,178,194,201,4,166,6,80,2,152,153,225,164,130,169,17,148,92,112,82,193,8,33,222,118,208,166,164,169,27,217,28,82,43,154,143,69,182,68,48,66,136,159,59,228,125,210,96,132,127,79,244,86,177,96,84,120,79,193,91,157,219,29,231,252,49,106,128,145,96,200,174,236,237,237,189,109,113,240,86,213,203,154,72,41,207,162,60,85,36,24,33,4,73,10,165,11,154,208,250,156,243,78,120,160,95,192,52,68,133,150,56,32,98,167,221,110,83,158,103,214,190,128,17,66,252,221,225,32,174,168,132,143,57,231,199,177,96,154,40,45,1,12,0,232,46,78,56,151,36,166,161,210,50,11,252,22,165,102,6,102,48,24,92,25,134,65,19,196,198,182,69,91,51,3,227,56,206,51,0,92,53,150,202,231,192,103,30,202,7,163,230,67,100,116,27,223,164,148,135,52,85,240,193,52,217,232,70,72,130,31,13,251,96,180,26,45,225,241,213,201,7,35,132,248,199,24,43,181,24,86,35,29,156,112,206,15,193,182,237,83,203,178,40,181,160,155,34,0,0,103,32,132,160,164,54,165,23,116,155,131,233,130,227,56,143,0,240,77,83,153,19,64,196,95,36,49,148,224,222,182,5,179,77,191,167,30,129,169,99,234,178,20,88,0,24,19,152,38,206,166,19,193,5,96,176,20,222,154,254,153,36,70,131,137,120,185,26,76,140,196,107,48,9,96,180,241,13,193,209,94,41,222,113,140,40,242,213,9,170,175,128,250,122,74,16,33,53,254,148,96,48,24,220,26,134,81,247,165,216,188,209,214,157,78,59,68,197,48,148,118,208,137,170,47,100,62,19,85,10,140,158,97,207,249,244,56,231,87,1,24,157,172,90,72,82,209,138,100,176,124,66,197,16,148,247,109,124,147,82,30,211,182,144,217,130,155,78,88,249,50,225,171,17,125,89,92,137,164,138,17,178,53,141,109,158,231,93,7,149,44,122,81,127,46,6,75,91,65,150,192,52,121,69,50,113,27,136,114,221,77,156,109,39,111,28,34,48,170,246,168,81,182,38,44,45,75,198,119,209,226,54,204,67,61,113,206,187,97,143,19,187,157,85,45,219,214,122,61,155,138,79,167,211,105,246,237,172,202,214,212,62,26,142,82,161,64,114,18,183,204,215,121,249,150,114,46,237,118,59,182,24,45,17,140,170,102,35,67,188,107,133,91,105,65,234,136,115,126,150,116,81,106,245,137,46,203,73,192,87,35,56,213,21,114,5,188,106,0,39,51,148,216,56,38,78,120,116,177,104,138,233,218,37,111,69,222,103,58,157,222,39,85,179,69,13,55,213,248,198,49,82,19,78,218,162,182,149,65,32,5,111,116,222,67,92,161,86,154,219,42,12,134,110,76,170,101,154,230,189,97,24,55,105,29,173,249,247,190,148,178,155,181,148,184,82,137,89,188,217,6,79,1,9,143,105,140,136,221,112,237,81,145,151,82,74,98,194,29,110,16,208,118,30,147,18,6,68,149,44,166,105,222,32,226,170,139,54,250,136,248,80,133,132,100,154,93,23,17,189,168,255,144,13,218,223,223,167,29,161,151,158,231,81,78,185,148,161,86,6,149,206,169,234,73,41,159,242,122,154,60,227,170,84,149,210,58,166,195,187,16,241,2,17,143,0,224,68,121,52,130,21,117,120,23,3,128,145,231,121,239,136,56,50,77,115,180,206,195,187,254,3,16,194,8,88,119,124,180,233,0,0,0,0,73,69,78,68,174,66,96,130])
//
//   console.log('new bytes prepared', newBytesPrepared)
//
//   // Create a new paint for the new image.
//   // const newPaint = JSON.parse(JSON.stringify(node.fills[0]))
//   // newPaint.imageHash = figma.createImage(newBytes).hash
//
//   // console.log('after create image', newPaint)
//
//   // renderTestImage(newBytesPrepared)
//
//   const newPaint = getNewPaint(newBytesPrepared)
//
//   console.log('newPaint', newPaint)
//
//   return newPaint
// }

function renderTestImage(newBytes) {
  let imageRectangle = figma.createRectangle()
  imageRectangle.resize(688, 367)
  imageRectangle.cornerRadius = 20

  const newFills = []

  for (const paint of imageRectangle.fills) {
    newFills.push(getNewPaint(paint, newBytes))
  }

  imageRectangle.fills = newFills

  console.log('ENDED', newFills)
}

function getNewPaint(paint, newBytes) {
  console.log('getNewPaint', newBytes)

  // blendMode: "NORMAL"
  // filters: {
  // contrast: 0
  // exposure: 0
  // highlights: 0
  // saturation: 0
  // shadows: 0
  // temperature: 0
  // tint: 0
  // }
  // imageHash: "551c20175b1b0b5e27aebd3a9bb0709bec53a94c"
  // imageTransform: (2) [Array(3), Array(3)]
  // opacity: 1
  // scaleMode: "FILL"
  // scalingFactor: 0.5
  // type: "IMAGE"
  // visible: true

  // const newPaint = JSON.parse(JSON.stringify(paint))

  const newPaint = {}

  newPaint.blendMode = 'NORMAL'
  newPaint.type = 'IMAGE'

  console.log('before')
  newPaint.imageHash = figma.createImage(newBytes).hash
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

// figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
// figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Josefin Sans', style: 'Regular' })
// figma.loadFontAsync({ family: 'Josefin Sans', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Abril Fatface', style: 'Regular' })
//
// figma.loadFontAsync({ family: 'Alegreya', style: 'Regular' })
// figma.loadFontAsync({ family: 'Alegreya', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Archivo', style: 'Regular' })
// figma.loadFontAsync({ family: 'Archivo', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Bitter', style: 'Regular' })
// figma.loadFontAsync({ family: 'Bitter', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Cabin', style: 'Regular' })
// figma.loadFontAsync({ family: 'Cabin', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Cardo', style: 'Regular' })
// figma.loadFontAsync({ family: 'Cardo', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Domine', style: 'Regular' })
// figma.loadFontAsync({ family: 'Domine', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Fira Mono', style: 'Regular' })
// figma.loadFontAsync({ family: 'Fira Mono', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Fira Sans', style: 'Regular' })
// figma.loadFontAsync({ family: 'Fira Sans', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Karla', style: 'Regular' })
// figma.loadFontAsync({ family: 'Karla', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Kreon', style: 'Regular' })
// figma.loadFontAsync({ family: 'Kreon', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Lato', style: 'Regular' })
// figma.loadFontAsync({ family: 'Lato', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Lora', style: 'Regular' })
// figma.loadFontAsync({ family: 'Lora', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Merriweather', style: 'Regular' })
// figma.loadFontAsync({ family: 'Merriweather', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Montserrat', style: 'Regular' })
// figma.loadFontAsync({ family: 'Montserrat', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Nunito', style: 'Regular' })
// figma.loadFontAsync({ family: 'Nunito', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Open Sans', style: 'Regular' })
// figma.loadFontAsync({ family: 'Open Sans', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Playfair', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Prompt', style: 'Regular' })
// figma.loadFontAsync({ family: 'Prompt', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'PT Sans', style: 'Regular' })
// figma.loadFontAsync({ family: 'PT Sans', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Raleway', style: 'Regular' })
// figma.loadFontAsync({ family: 'Raleway', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
// figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Rokkitt', style: 'Regular' })
// figma.loadFontAsync({ family: 'Rokkitt', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Source Sans Pro', style: 'Regular' })
// figma.loadFontAsync({ family: 'Source Sans Pro', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Space Mono', style: 'Regular' })
// figma.loadFontAsync({ family: 'Space Mono', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Ubuntu', style: 'Regular' })
// figma.loadFontAsync({ family: 'Ubuntu', style: 'Bold' })
//
// figma.loadFontAsync({ family: 'Yeseva One', style: 'Regular' })

// async function renderFigmaTemplate(currentPairId, language) {
//   console.log(currentPairId)
//
//   let currentPair
//   let fontElements = []
//
//   pairs.forEach((pair, i) => {
//     if (pair.id === currentPairId) {
//       currentPair = pair
//     }
//   })
//
//   Object.keys(fonts).forEach((key, i) => {
//     if (key === currentPair.fonts[0] || key === currentPair.fonts[1]) {
//       fontElements.push(fonts[key])
//     }
//   })
//
//   const nodes = []
//
//   let background = [{ type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }]
//
//   let black = [{ type: 'SOLID', color: { r: 0.165, g: 0.161, b: 0.129 } }]
//
//   //фрейм самого экспорта
//   let articleFrame = figma.createFrame()
//   articleFrame.x = 150
//   articleFrame.paddingTop = 23
//   articleFrame.itemSpacing = 23
//   articleFrame.resize(768, 1659)
//   articleFrame.layoutMode = 'VERTICAL'
//   articleFrame.primaryAxisSizingMode = 'AUTO'
//   articleFrame.counterAxisSizingMode = 'FIXED'
//   articleFrame.counterAxisAlignItems = 'CENTER'
//   articleFrame.fills = [
//     { type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }
//   ]
//
//   ////фрейм верхнего блока с кнопками
//   // let topBarFrame = figma.createFrame()
//   // topBarFrame.fills = background
//   // topBarFrame.layoutMode = 'HORIZONTAL'
//   // topBarFrame.primaryAxisSizingMode = 'AUTO'
//   // topBarFrame.counterAxisSizingMode = 'AUTO'
//   // topBarFrame.counterAxisAlignItems = 'CENTER'
//   // topBarFrame.primaryAxisAlignItems = 'SPACE_BETWEEN'
//   // topBarFrame.itemSpacing = 6
//   // topBarFrame.strokeWeight = 1
//   // topBarFrame.resize(688, 36)
//
//   //////фрейм кнопки назад
//   // let buttonBack = figma.createFrame()
//   // buttonBack.cornerRadius = 7
//   // buttonBack.layoutMode = 'HORIZONTAL'
//   // buttonBack.primaryAxisSizingMode = 'AUTO'
//   // buttonBack.counterAxisSizingMode = 'AUTO'
//   // buttonBack.counterAxisAlignItems = 'CENTER'
//   // buttonBack.itemSpacing = 6
//   // buttonBack.paddingTop = 10
//   // buttonBack.paddingRight = 10
//   // buttonBack.paddingBottom = 10
//   // buttonBack.paddingLeft = 10
//
//   ////////иконка кнопки назад
//   // let buttonBackIcon = figma.createVector()
//   // buttonBackIcon.resize(7, 8)
//   // buttonBackIcon.vectorPaths[
//   //   {
//   //     windingRule: 'EVENODD',
//   //     data:
//   //       'M4.35355 0.646447C4.54882 0.841709 4.54882 1.15829 4.35355 1.35355L1.70711 4L4.35355 6.64645C4.54882 6.84171 4.54882 7.15829 4.35355 7.35355C4.15829 7.54882 3.84171 7.54882 3.64645 7.35355L0.646446 4.35355C0.451184 4.15829 0.451184 3.84171 0.646446 3.64645L3.64645 0.646447C3.84171 0.451184 4.15829 0.451184 4.35355 0.646447Z'
//   //   }
//   // ]
//   // buttonBackIcon.fills = black
//
//   ////////текст кнопки назад
//   // let buttonBackText = figma.createText()
//   // buttonBackText.characters = 'Back'
//   // buttonBackText.fontSize = 14
//   // buttonBackText.fills = black
//
//   //////фрейм кнопки экспорт
//   // let buttonExport = figma.createFrame()
//   // buttonExport.cornerRadius = 7
//   // buttonExport.layoutMode = 'HORIZONTAL'
//   // buttonExport.primaryAxisSizingMode = 'AUTO'
//   // buttonExport.counterAxisSizingMode = 'AUTO'
//   // buttonExport.counterAxisAlignItems = 'CENTER'
//   // buttonExport.itemSpacing = 6
//   // buttonExport.paddingTop = 10
//   // buttonExport.paddingRight = 10
//   // buttonExport.paddingBottom = 10
//   // buttonExport.paddingLeft = 10
//
//   ////////текст кнопки экспорт
//   // let buttonExportText = figma.createText()
//   // buttonExportText.characters = 'Export to artboard'
//   // buttonExportText.fontSize = 14
//   // buttonExportText.fills = black
//
//   ////////иконка кнопки эккспорт
//   // let buttonExportIcon = figma.createVector()
//   // buttonExportIcon.resize(7, 8)
//
//   ////фрейм пары
//   // let pairInfoFrame = figma.createFrame()
//   // pairInfoFrame.x = 44
//   // pairInfoFrame.y = 97
//   // pairInfoFrame.layoutMode = 'VERTICAL'
//   // pairInfoFrame.primaryAxisSizingMode = 'AUTO'
//   // pairInfoFrame.counterAxisSizingMode = 'FIXED'
//   // pairInfoFrame.layoutAlign = 'STRETCH'
//   // pairInfoFrame.itemSpacing = 60
//   // pairInfoFrame.paddingTop = 20
//   // pairInfoFrame.paddingRight = 40
//   // pairInfoFrame.paddingBottom = 40
//   // pairInfoFrame.paddingLeft = 40
//   // pairInfoFrame.fills = [
//   //   { type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }
//   // ]
//
//   //////заголовок статьи
//   // let articleName = figma.createText()
//   // articleName.characters = currentPair.heading
//   // articleName.fontSize = 40
//   // articleName.fontName = { family: fontElements[0].heading, style: 'Bold' }
//
//   //
//   //
//   //
//   //
//   //////картинка пары
//   let imageRectangle = figma.createRectangle()
//   imageRectangle.resize(688, 367)
//   imageRectangle.cornerRadius = 20
//   //
//   const newImageRectangleFills = []
//   //
//   for (const paint of imageRectangle.fills) {
//     // newImageRectangleFills.push(await prepareImage(`${currentPairId}`))
//     newImageRectangleFills.push(await prepareImage(`${currentPairId}`))
//   }
//   //
//   console.log('newImageRectangleFills', newImageRectangleFills)
//   //
//   imageRectangle.fills = newImageRectangleFills
//
//   //
//   //
//   //
//   //
//
//   // console.log('preloaded image data', preloadedImageData)
//
//   // imageRectangle.fills[0].imageHash = preloadedImageData
//
//   // imageRectangle.fills[0] = prepareImage(imageRectangle)
//   // console.log('returned data', prepareImage(imageRectangle))
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//
//   //////фрейм шрифта внутри пары
//   // let fontInfoFrame = figma.createFrame()
//   // fontInfoFrame.layoutMode = 'VERTICAL'
//   // fontInfoFrame.itemSpacing = 23
//   // fontInfoFrame.primaryAxisSizingMode = 'AUTO'
//   // fontInfoFrame.counterAxisSizingMode = 'FIXED'
//   // fontInfoFrame.layoutAlign = 'STRETCH'
//   // fontInfoFrame.fills = [
//   //   { type: 'SOLID', color: { r: 0.965, g: 0.956, b: 0.952 } }
//   // ]
//
//   ////////название первого шрифта
//   // let firstFontName = figma.createText()
//   // firstFontName.characters = fontElements[0].heading
//   // firstFontName.fontSize = 40
//   // firstFontName.fontName = { family: fontElements[0].heading, style: 'Bold' }
//
//   ////////описание первого шрифта
//   // let firstFontDescription = figma.createText()
//   // firstFontDescription.characters = fontElements[0].texts[language].description
//   // firstFontDescription.fontSize = 16
//   // firstFontDescription.fontName = {
//   //   family: fontElements[1].heading,
//   //   style: 'Regular'
//   // }
//   // firstFontDescription.layoutAlign = 'STRETCH'
//
//   ////////дизайнер первого шрифта
//   //////////заголовок дизайнера
//   // let firstDesignerFrameName = figma.createText()
//   // firstDesignerFrameName.characters =
//   //   fontElements[0].texts[language].designer.heading
//   // firstDesignerFrameName.fontSize = 20
//   // firstDesignerFrameName.fontName = {
//   //   family: fontElements[0].heading,
//   //   style: 'Bold'
//   // }
//   // firstDesignerFrameName.fills = black
//
//   //////////фрейм блока
//   // let firstDesignerFrame = figma.createFrame()
//   // firstDesignerFrame.layoutMode = 'VERTICAL'
//   // firstDesignerFrame.primaryAxisSizingMode = 'AUTO'
//   // firstDesignerFrame.counterAxisSizingMode = 'AUTO'
//   // firstDesignerFrame.layoutAlign = 'STRETCH'
//   // firstDesignerFrame.itemSpacing = 15
//   // firstDesignerFrame.fills = background
//
//   //////////фрейм с аватаром и именем
//   // let firstDesignerInnerFrame = figma.createFrame()
//   // firstDesignerInnerFrame.layoutMode = 'HORIZONTAL'
//   // firstDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
//   // firstDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
//   // firstDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
//   // firstDesignerInnerFrame.itemSpacing = 6
//   // firstDesignerInnerFrame.fills = background
//
//   ////////////аватар
//   // let firstDesignerAvatar = figma.createEllipse()
//   // firstDesignerAvatar.resize(35, 35)
//
//   ////////////фрейм с именем и компанией
//   // let firstDesignerNameFrame = figma.createFrame()
//   // firstDesignerNameFrame.layoutMode = 'VERTICAL'
//   // firstDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
//   // firstDesignerNameFrame.counterAxisSizingMode = 'AUTO'
//   // firstDesignerNameFrame.layoutAlign = 'STRETCH'
//   // firstDesignerNameFrame.itemSpacing = 4
//   // firstDesignerNameFrame.fills = background
//
//   //////////////имя
//   // let firstDesignerName = figma.createText()
//   // firstDesignerName.characters = fontElements[0].texts[language].designer.name
//   // firstDesignerName.fontSize = 16
//   // firstDesignerName.fontName = {
//   //   family: fontElements[0].heading,
//   //   style: 'Bold'
//   // }
//   // firstDesignerName.fills = black
//
//   //////////////компания
//   // let firstDesignerCompany = figma.createText()
//   // firstDesignerCompany.characters =
//   //   fontElements[0].texts[language].designer.company
//   // firstDesignerCompany.fontSize = 10
//   // firstDesignerCompany.fontName = {
//   //   family: fontElements[1].heading,
//   //   style: 'Regular'
//   // }
//   // firstDesignerCompany.fills = black
//
//   //////////описание
//   // let firstDesignerDescription = figma.createText()
//   // firstDesignerDescription.characters =
//   //   fontElements[0].texts[language].designer.descriptionHTML
//   // firstDesignerDescription.layoutAlign = 'STRETCH'
//   // firstDesignerDescription.fontSize = 12
//   // firstDesignerDescription.fontName = {
//   //   family: fontElements[1].heading,
//   //   style: 'Regular'
//   // }
//   // firstDesignerDescription.fills = background
//   // firstDesignerDescription.fills = black
//
//   ////////название второго шрифта
//   // let secondFontName = figma.createText()
//   // secondFontName.characters = fontElements[1].heading
//   // secondFontName.fontSize = 40
//   // secondFontName.fontName = { family: fontElements[0].heading, style: 'Bold' }
//
//   ////////описание второго шрифта
//   // let secondFontDescription = figma.createText()
//   // secondFontDescription.characters = fontElements[1].texts[language].description
//   // secondFontDescription.fontSize = 16
//   // secondFontDescription.fontName = {
//   //   family: fontElements[1].heading,
//   //   style: 'Regular'
//   // }
//   // secondFontDescription.layoutAlign = 'STRETCH'
//
//   ////////дизайнер второго шрифта
//   //////////заголовок дизайнера
//   // let secondDesignerFrameName = figma.createText()
//   // secondDesignerFrameName.characters =
//   //   fontElements[0].texts[language].designer.heading
//   // secondDesignerFrameName.fontSize = 20
//   // secondDesignerFrameName.fontName = {
//   //   family: fontElements[0].heading,
//   //   style: 'Bold'
//   // }
//   // secondDesignerFrameName.fills = black
//
//   //////////фрейм блока
//   // let secondDesignerFrame = figma.createFrame()
//   // secondDesignerFrame.layoutMode = 'VERTICAL'
//   // secondDesignerFrame.primaryAxisSizingMode = 'AUTO'
//   // secondDesignerFrame.counterAxisSizingMode = 'AUTO'
//   // secondDesignerFrame.layoutAlign = 'STRETCH'
//   // secondDesignerFrame.itemSpacing = 15
//   // secondDesignerFrame.fills = background
//
//   //////////фрейм с аватаром и именем
//   // let secondDesignerInnerFrame = figma.createFrame()
//   // secondDesignerInnerFrame.layoutMode = 'HORIZONTAL'
//   // secondDesignerInnerFrame.primaryAxisSizingMode = 'AUTO'
//   // secondDesignerInnerFrame.counterAxisSizingMode = 'AUTO'
//   // secondDesignerInnerFrame.counterAxisAlignItems = 'CENTER'
//   // secondDesignerInnerFrame.itemSpacing = 6
//   // secondDesignerInnerFrame.fills = background
//
//   ////////////аватар
//   // let secondDesignerAvatar = figma.createEllipse()
//   // secondDesignerAvatar.resize(35, 35)
//
//   ////////////фрейм с именем и компанией
//   // let secondDesignerNameFrame = figma.createFrame()
//   // secondDesignerNameFrame.layoutMode = 'VERTICAL'
//   // secondDesignerNameFrame.primaryAxisSizingMode = 'AUTO'
//   // secondDesignerNameFrame.counterAxisSizingMode = 'AUTO'
//   // secondDesignerNameFrame.layoutAlign = 'STRETCH'
//   // secondDesignerNameFrame.itemSpacing = 4
//   // secondDesignerNameFrame.fills = background
//
//   //////////////имя
//   // let secondDesignerName = figma.createText()
//   // secondDesignerName.characters = fontElements[1].texts[language].designer.name
//   // secondDesignerName.fontSize = 16
//   // secondDesignerName.fontName = {
//   //   family: fontElements[0].heading,
//   //   style: 'Bold'
//   // }
//   // secondDesignerName.fills = black
//
//   //////////////компания
//   // let secondDesignerCompany = figma.createText()
//   // secondDesignerCompany.characters =
//   //   fontElements[1].texts[language].designer.company
//   // secondDesignerCompany.fontSize = 10
//   // secondDesignerCompany.fontName = {
//   //   family: fontElements[1].heading,
//   //   style: 'Regular'
//   // }
//   // secondDesignerCompany.fills = black
//
//   //////////описание
//   // let secondDesignerDescription = figma.createText()
//   // secondDesignerDescription.characters =
//   //   fontElements[1].texts[language].designer.descriptionHTML
//   // secondDesignerDescription.layoutAlign = 'STRETCH'
//   // secondDesignerDescription.fontSize = 12
//   // secondDesignerDescription.fontName = {
//   //   family: fontElements[1].heading,
//   //   style: 'Regular'
//   // }
//   // secondDesignerDescription.fills = background
//   // secondDesignerDescription.fills = black
//
//   ////копирайт
//   // let copyright = figma.createText()
//   // copyright.characters = 'Information from fonts.google.com'
//   // copyright.fills = [{ type: 'SOLID', color: { r: 0.62, g: 0.62, b: 0.62 } }]
//   // copyright.fontSize = 12
//   // copyright.fontName = {
//   //   family: fontElements[1].heading,
//   //   style: 'Regular'
//   // }
//   // copyright.resize(688, 14)
//
//   ////рекомендации пар
//   // let recomendations = figma.createFrame()
//   // recomendations.layoutMode = 'VERTICAL'
//   // recomendations.primaryAxisSizingMode = 'AUTO'
//   // recomendations.counterAxisSizingMode = 'AUTO'
//   // recomendations.layoutAlign = 'STRETCH'
//   // recomendations.itemSpacing = 15
//   // recomendations.fills = background
//
//   //////заголовок
//   // let recomendationsTitle = figma.createText()
//   // recomendationsTitle.characters = 'Other pairings'
//   // recomendationsTitle.fontSize = 20
//   // recomendationsTitle.fontName = {
//   //   family: fontElements[0].heading,
//   //   style: 'Bold'
//   // }
//   // recomendationsTitle.fills = black
//
//   //////ссылки на пары
//   // let recomendationsList = figma.createFrame()
//   // recomendationsList.layoutMode = 'HORIZONTAL'
//   // recomendationsList.primaryAxisSizingMode = 'AUTO'
//   // recomendationsList.counterAxisSizingMode = 'AUTO'
//   // recomendationsList.primaryAxisAlignItems = 'SPACE_BETWEEN'
//   // recomendationsList.itemSpacing = 20
//   // recomendationsList.fills = background
//
//   ////////  пары
//   // let recomendationsListItemFirst = figma.createRectangle()
//   // recomendationsListItemFirst.resize(215.9, 115)
//   // recomendationsListItemFirst.cornerRadius = 7
//   // let recomendationsListItemSecond = figma.createRectangle()
//   // recomendationsListItemSecond.resize(215.9, 115)
//   // recomendationsListItemSecond.cornerRadius = 7
//   // let recomendationsListItemThird = figma.createRectangle()
//   // recomendationsListItemThird.resize(215.9, 115)
//   // recomendationsListItemThird.cornerRadius = 7
//
//   // articleFrame.appendChild(topBarFrame)
//   // articleFrame.appendChild(pairInfoFrame)
//   // pairInfoFrame.appendChild(articleName)
//   // pairInfoFrame.appendChild(imageRectangle)
//   // pairInfoFrame.appendChild(fontInfoFrame)
//   // pairInfoFrame.appendChild(recomendations)
//   // pairInfoFrame.appendChild(copyright)
//   // fontInfoFrame.appendChild(firstFontName)
//   // fontInfoFrame.appendChild(firstFontDescription)
//   // fontInfoFrame.appendChild(firstDesignerFrame)
//   // fontInfoFrame.appendChild(secondFontName)
//   // fontInfoFrame.appendChild(secondFontDescription)
//   // fontInfoFrame.appendChild(secondDesignerFrame)
//   // topBarFrame.appendChild(buttonBack)
//   // topBarFrame.appendChild(buttonExport)
//   // buttonBack.appendChild(buttonBackIcon)
//   // buttonBack.appendChild(buttonBackText)
//   // buttonExport.appendChild(buttonExportText)
//   // buttonExport.appendChild(buttonExportIcon)
//   // firstDesignerFrame.appendChild(firstDesignerFrameName)
//   // firstDesignerFrame.appendChild(firstDesignerInnerFrame)
//   // firstDesignerFrame.appendChild(firstDesignerDescription)
//   // firstDesignerInnerFrame.appendChild(firstDesignerAvatar)
//   // firstDesignerInnerFrame.appendChild(firstDesignerNameFrame)
//   // firstDesignerNameFrame.appendChild(firstDesignerName)
//   // firstDesignerNameFrame.appendChild(firstDesignerCompany)
//   // secondDesignerFrame.appendChild(secondDesignerFrameName)
//   // secondDesignerFrame.appendChild(secondDesignerInnerFrame)
//   // secondDesignerFrame.appendChild(secondDesignerDescription)
//   // secondDesignerInnerFrame.appendChild(secondDesignerAvatar)
//   // secondDesignerInnerFrame.appendChild(secondDesignerNameFrame)
//   // secondDesignerNameFrame.appendChild(secondDesignerName)
//   // secondDesignerNameFrame.appendChild(secondDesignerCompany)
//   // recomendations.appendChild(recomendationsTitle)
//   // recomendations.appendChild(recomendationsList)
//   // recomendationsList.appendChild(recomendationsListItemFirst)
//   // recomendationsList.appendChild(recomendationsListItemSecond)
//   // recomendationsList.appendChild(recomendationsListItemThird)
//   // figma.currentPage.appendChild(articleFrame)
//   //
//   // nodes.push(articleFrame)
//   // figma.currentPage.selection = nodes
//   // figma.viewport.scrollAndZoomIntoView(nodes)
//
//   console.log('END')
// }

//
//
//
//
//

// function asyncRenderFigmaTemplate(preparedImage) {
//   let imageRectangle = figma.createRectangle()
//   imageRectangle.resize(688, 367)
//   imageRectangle.cornerRadius = 20
//   //
//   const newImageRectangleFills = []
//   //
//   for (const paint of imageRectangle.fills) {
//     // newImageRectangleFills.push(await prepareImage(`${currentPairId}`))
//     newImageRectangleFills.push(preparedImage)
//   }
//   //
//   console.log('newImageRectangleFills', newImageRectangleFills)
//   //
//   imageRectangle.fills = newImageRectangleFills
// }

// function asyncRenderFigmaTemplatePromise() {
//   // prepareImage(`${msg.type}`)
//
//   // prettier-ignore
//   const newBytesPrepared = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,70,0,0,0,70,8,6,0,0,0,113,46,226,132,0,0,4,66,73,68,65,84,120,94,237,156,235,81,227,48,16,128,181,54,230,55,116,0,21,0,191,163,48,164,2,160,2,72,5,119,84,112,80,193,113,21,28,87,1,164,2,103,98,133,191,164,131,11,21,92,126,163,216,123,179,70,206,195,248,109,231,101,75,51,153,201,76,28,203,250,188,47,173,180,2,182,198,54,28,14,79,93,215,61,53,12,227,4,0,142,16,241,84,117,127,20,122,140,49,99,108,162,62,35,198,216,59,0,244,91,173,22,125,95,75,131,85,246,98,219,246,129,101,89,183,140,177,75,130,0,0,7,101,250,67,196,137,97,24,125,198,88,239,227,227,163,223,233,116,8,224,74,218,74,192,56,142,115,1,0,63,24,99,23,43,121,106,117,83,0,120,113,93,247,207,249,249,249,75,213,253,84,10,102,56,28,222,34,34,1,9,171,70,213,207,29,190,223,24,0,30,90,173,214,83,85,29,85,2,70,73,200,239,13,0,89,25,160,82,96,108,219,62,178,44,139,128,172,84,101,10,72,193,147,148,242,161,140,13,42,12,230,245,245,245,155,235,186,247,101,13,106,129,65,103,253,203,4,0,238,138,170,87,110,48,202,211,144,29,249,158,245,9,55,124,221,35,231,252,46,239,51,228,2,163,84,231,153,49,22,196,31,121,251,219,212,245,35,41,229,117,30,213,202,12,70,65,177,183,192,192,22,133,59,150,82,118,178,194,201,4,166,6,80,2,152,153,225,164,130,169,17,148,92,112,82,193,8,33,222,118,208,166,164,169,27,217,28,82,43,154,143,69,182,68,48,66,136,159,59,228,125,210,96,132,127,79,244,86,177,96,84,120,79,193,91,157,219,29,231,252,49,106,128,145,96,200,174,236,237,237,189,109,113,240,86,213,203,154,72,41,207,162,60,85,36,24,33,4,73,10,165,11,154,208,250,156,243,78,120,160,95,192,52,68,133,150,56,32,98,167,221,110,83,158,103,214,190,128,17,66,252,221,225,32,174,168,132,143,57,231,199,177,96,154,40,45,1,12,0,232,46,78,56,151,36,166,161,210,50,11,252,22,165,102,6,102,48,24,92,25,134,65,19,196,198,182,69,91,51,3,227,56,206,51,0,92,53,150,202,231,192,103,30,202,7,163,230,67,100,116,27,223,164,148,135,52,85,240,193,52,217,232,70,72,130,31,13,251,96,180,26,45,225,241,213,201,7,35,132,248,199,24,43,181,24,86,35,29,156,112,206,15,193,182,237,83,203,178,40,181,160,155,34,0,0,103,32,132,160,164,54,165,23,116,155,131,233,130,227,56,143,0,240,77,83,153,19,64,196,95,36,49,148,224,222,182,5,179,77,191,167,30,129,169,99,234,178,20,88,0,24,19,152,38,206,166,19,193,5,96,176,20,222,154,254,153,36,70,131,137,120,185,26,76,140,196,107,48,9,96,180,241,13,193,209,94,41,222,113,140,40,242,213,9,170,175,128,250,122,74,16,33,53,254,148,96,48,24,220,26,134,81,247,165,216,188,209,214,157,78,59,68,197,48,148,118,208,137,170,47,100,62,19,85,10,140,158,97,207,249,244,56,231,87,1,24,157,172,90,72,82,209,138,100,176,124,66,197,16,148,247,109,124,147,82,30,211,182,144,217,130,155,78,88,249,50,225,171,17,125,89,92,137,164,138,17,178,53,141,109,158,231,93,7,149,44,122,81,127,46,6,75,91,65,150,192,52,121,69,50,113,27,136,114,221,77,156,109,39,111,28,34,48,170,246,168,81,182,38,44,45,75,198,119,209,226,54,204,67,61,113,206,187,97,143,19,187,157,85,45,219,214,122,61,155,138,79,167,211,105,246,237,172,202,214,212,62,26,142,82,161,64,114,18,183,204,215,121,249,150,114,46,237,118,59,182,24,45,17,140,170,102,35,67,188,107,133,91,105,65,234,136,115,126,150,116,81,106,245,137,46,203,73,192,87,35,56,213,21,114,5,188,106,0,39,51,148,216,56,38,78,120,116,177,104,138,233,218,37,111,69,222,103,58,157,222,39,85,179,69,13,55,213,248,198,49,82,19,78,218,162,182,149,65,32,5,111,116,222,67,92,161,86,154,219,42,12,134,110,76,170,101,154,230,189,97,24,55,105,29,173,249,247,190,148,178,155,181,148,184,82,137,89,188,217,6,79,1,9,143,105,140,136,221,112,237,81,145,151,82,74,98,194,29,110,16,208,118,30,147,18,6,68,149,44,166,105,222,32,226,170,139,54,250,136,248,80,133,132,100,154,93,23,17,189,168,255,144,13,218,223,223,167,29,161,151,158,231,81,78,185,148,161,86,6,149,206,169,234,73,41,159,242,122,154,60,227,170,84,149,210,58,166,195,187,16,241,2,17,143,0,224,68,121,52,130,21,117,120,23,3,128,145,231,121,239,136,56,50,77,115,180,206,195,187,254,3,16,194,8,88,119,124,180,233,0,0,0,0,73,69,78,68,174,66,96,130])
//
//   const newPaint = {}
//
//   newPaint.blendMode = 'NORMAL'
//   newPaint.type = 'IMAGE'
//   newPaint.imageHash = figma.createImage(newBytesPrepared).hash
//
//   newPaint.filters = {
//     contrast: 0,
//     exposure: 0,
//     highlights: 0,
//     saturation: 0,
//     shadows: 0,
//     temperature: 0,
//     tint: 0
//   }
//
//   newPaint.opacity = 1
//   newPaint.scaleMode = 'FILL'
//   newPaint.scalingFactor = 0.5
//
//   newPaint.imageTransform = [
//     [1, 0, 0],
//     [0, 1, 0]
//   ]
//
//   newPaint.visible = true
//
//   return newPaint
//
//   // setTimeout(function() {
//   // resolve(newPaint)
//   // }, 250)
// }

// const asyncRenderFigmaTemplatePromise = new Promise((resolve, reject) => {
//   // prepareImage(`${msg.type}`)
//
//   // prettier-ignore
//   const newBytesPrepared = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,70,0,0,0,70,8,6,0,0,0,113,46,226,132,0,0,4,66,73,68,65,84,120,94,237,156,235,81,227,48,16,128,181,54,230,55,116,0,21,0,191,163,48,164,2,160,2,72,5,119,84,112,80,193,113,21,28,87,1,164,2,103,98,133,191,164,131,11,21,92,126,163,216,123,179,70,206,195,248,109,231,101,75,51,153,201,76,28,203,250,188,47,173,180,2,182,198,54,28,14,79,93,215,61,53,12,227,4,0,142,16,241,84,117,127,20,122,140,49,99,108,162,62,35,198,216,59,0,244,91,173,22,125,95,75,131,85,246,98,219,246,129,101,89,183,140,177,75,130,0,0,7,101,250,67,196,137,97,24,125,198,88,239,227,227,163,223,233,116,8,224,74,218,74,192,56,142,115,1,0,63,24,99,23,43,121,106,117,83,0,120,113,93,247,207,249,249,249,75,213,253,84,10,102,56,28,222,34,34,1,9,171,70,213,207,29,190,223,24,0,30,90,173,214,83,85,29,85,2,70,73,200,239,13,0,89,25,160,82,96,108,219,62,178,44,139,128,172,84,101,10,72,193,147,148,242,161,140,13,42,12,230,245,245,245,155,235,186,247,101,13,106,129,65,103,253,203,4,0,238,138,170,87,110,48,202,211,144,29,249,158,245,9,55,124,221,35,231,252,46,239,51,228,2,163,84,231,153,49,22,196,31,121,251,219,212,245,35,41,229,117,30,213,202,12,70,65,177,183,192,192,22,133,59,150,82,118,178,194,201,4,166,6,80,2,152,153,225,164,130,169,17,148,92,112,82,193,8,33,222,118,208,166,164,169,27,217,28,82,43,154,143,69,182,68,48,66,136,159,59,228,125,210,96,132,127,79,244,86,177,96,84,120,79,193,91,157,219,29,231,252,49,106,128,145,96,200,174,236,237,237,189,109,113,240,86,213,203,154,72,41,207,162,60,85,36,24,33,4,73,10,165,11,154,208,250,156,243,78,120,160,95,192,52,68,133,150,56,32,98,167,221,110,83,158,103,214,190,128,17,66,252,221,225,32,174,168,132,143,57,231,199,177,96,154,40,45,1,12,0,232,46,78,56,151,36,166,161,210,50,11,252,22,165,102,6,102,48,24,92,25,134,65,19,196,198,182,69,91,51,3,227,56,206,51,0,92,53,150,202,231,192,103,30,202,7,163,230,67,100,116,27,223,164,148,135,52,85,240,193,52,217,232,70,72,130,31,13,251,96,180,26,45,225,241,213,201,7,35,132,248,199,24,43,181,24,86,35,29,156,112,206,15,193,182,237,83,203,178,40,181,160,155,34,0,0,103,32,132,160,164,54,165,23,116,155,131,233,130,227,56,143,0,240,77,83,153,19,64,196,95,36,49,148,224,222,182,5,179,77,191,167,30,129,169,99,234,178,20,88,0,24,19,152,38,206,166,19,193,5,96,176,20,222,154,254,153,36,70,131,137,120,185,26,76,140,196,107,48,9,96,180,241,13,193,209,94,41,222,113,140,40,242,213,9,170,175,128,250,122,74,16,33,53,254,148,96,48,24,220,26,134,81,247,165,216,188,209,214,157,78,59,68,197,48,148,118,208,137,170,47,100,62,19,85,10,140,158,97,207,249,244,56,231,87,1,24,157,172,90,72,82,209,138,100,176,124,66,197,16,148,247,109,124,147,82,30,211,182,144,217,130,155,78,88,249,50,225,171,17,125,89,92,137,164,138,17,178,53,141,109,158,231,93,7,149,44,122,81,127,46,6,75,91,65,150,192,52,121,69,50,113,27,136,114,221,77,156,109,39,111,28,34,48,170,246,168,81,182,38,44,45,75,198,119,209,226,54,204,67,61,113,206,187,97,143,19,187,157,85,45,219,214,122,61,155,138,79,167,211,105,246,237,172,202,214,212,62,26,142,82,161,64,114,18,183,204,215,121,249,150,114,46,237,118,59,182,24,45,17,140,170,102,35,67,188,107,133,91,105,65,234,136,115,126,150,116,81,106,245,137,46,203,73,192,87,35,56,213,21,114,5,188,106,0,39,51,148,216,56,38,78,120,116,177,104,138,233,218,37,111,69,222,103,58,157,222,39,85,179,69,13,55,213,248,198,49,82,19,78,218,162,182,149,65,32,5,111,116,222,67,92,161,86,154,219,42,12,134,110,76,170,101,154,230,189,97,24,55,105,29,173,249,247,190,148,178,155,181,148,184,82,137,89,188,217,6,79,1,9,143,105,140,136,221,112,237,81,145,151,82,74,98,194,29,110,16,208,118,30,147,18,6,68,149,44,166,105,222,32,226,170,139,54,250,136,248,80,133,132,100,154,93,23,17,189,168,255,144,13,218,223,223,167,29,161,151,158,231,81,78,185,148,161,86,6,149,206,169,234,73,41,159,242,122,154,60,227,170,84,149,210,58,166,195,187,16,241,2,17,143,0,224,68,121,52,130,21,117,120,23,3,128,145,231,121,239,136,56,50,77,115,180,206,195,187,254,3,16,194,8,88,119,124,180,233,0,0,0,0,73,69,78,68,174,66,96,130])
//
//   const newPaint = {}
//
//   newPaint.blendMode = 'NORMAL'
//   newPaint.type = 'IMAGE'
//   newPaint.imageHash = figma.createImage(newBytesPrepared).hash
//
//   newPaint.filters = {
//     contrast: 0,
//     exposure: 0,
//     highlights: 0,
//     saturation: 0,
//     shadows: 0,
//     temperature: 0,
//     tint: 0
//   }
//
//   newPaint.opacity = 1
//   newPaint.scaleMode = 'FILL'
//   newPaint.scalingFactor = 0.5
//
//   newPaint.imageTransform = [
//     [1, 0, 0],
//     [0, 1, 0]
//   ]
//
//   newPaint.visible = true
//
//   // return newPaint
//
//   // setTimeout(function() {
//   resolve(newPaint)
//   // }, 250)
// })

// const promise = new Promise((resolve, reject) => {
//   resolve()
// })

// figma.ui.onmessage = msg => {
//   console.log('FIGMA JUST GOT A MESSAGE, YO')
//
//   let fontPairIds = []
//
//   pairs.forEach((pair, i) => {
//     fontPairIds.push(pair.id)
//   })
//
//   // if (msg.type === 'get-font-list') {
//   //   let fontsPromise = figma.listAvailableFontsAsync()
//   //
//   //   fontsPromise.then(showFonts)
//   // } else if (msg.type === 'image-in-bytes') {
//   //   console.log('IMAGE IN BYTES MESSAGE, YO')
//   if (fontPairIds.includes(msg.type)) {
//     console.log('RENDER MESSAGE, YO')
//
//     new Promise(resolve => resolve('yo')).then(bla => console.log('PROM'))
//
//     // asyncRenderFigmaTemplatePromise.then(
//     //   console.log('preparedImage')
//     //   // preparedImage => {
//     //   // console.log('preparedImage', preparedImage)
//     //   // asyncRenderFigmaTemplate(preparedImage)
//     //   // }
//     // )
//   } else {
//     console.log('unknown message')
//   }
//
//   // figma.closePlugin()
// }
