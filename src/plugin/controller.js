import regeneratorRuntime from 'regenerator-runtime'

import { pairs } from '../app/library/pairs_library.js'
import { fonts } from '../app/library/fonts_library.js'
import { designers } from '../app/library/designers.js'

import { renderFigmaTemplate } from './render'
import { loadFonts } from './fonts'

let currentPair = {}
// let currentDesigners = {}
let currentImages = []
let imagesForExportQuantity = 0
let imagesForExport = {}

figma.showUI(__html__)
figma.ui.resize(668, 628)

figma.ui.onmessage = msg => {
  console.log('FIGMA JUST GOT A MESSAGE, YO', msg)

  if (msg.type === 'image-in-bytes') {
    console.log(msg.name, msg.bytes)
    // saveImageDataOrExportToFigma(msg.name, msg.bytes)
  } else if (msg.type === 'font-pair-export') {
    // console.log(msg.pair, pairs, pairs[msg.pair], pairs[`${msg.pair}`])
    // pairs.forEach((pair, i) => {
    //   if (pair.id === msg.pair) {
    //     currentPair.id = msg.pair
    //     currentPair.language = msg.language
    //     currentImages.push({
    //       id: msg.pair
    //       // image: currentPair.cover
    //     })
    //
    //     pairs.forEach((pair, i) => {
    //       if (pair.id === msg.pair) {
    //         currentPair.data = pair
    //         // load cover
    //
    //         currentPair.data.fonts.forEach((fontId, i) => {
    //           let currentFont = {}
    //
    //           fonts.forEach((font, i) => {
    //             if (font.id === fontId) {
    //               currentFont = font
    //
    //               font.designers.forEach((designerId, i) => {
    //                 designers.forEach((designer, i) => {
    //                   currentImages.push({
    //                     id: designer.id
    //                     // image: designer.userpic
    //                   })
    //                 })
    //
    //                 // load userpic
    //               })
    //             }
    //           })
    //         })
    //       }
    //     })
    //   }
    // })
    // Promise.all(
    //   figma.currentPage.selection.map(selected => invertIfApplicable(selected))
    // ).then(() => figma.closePlugin())
    // Promise.all(currentImages.map(image => preloadImageData(image))) //.then(() =>
    // console.log('promise done')
    // )
    // preloadImageData(currentImages).then(text =>
    //   console.log('promise done', text)
    // )
  } else {
    console.log('unknown message')
  }
}

let test = ['blablabla', 'lalalal']

Promise.all(test.map(t => preloadImageData(t)))

// function preloadImagesData(currentImages) {
//   const promises = currentImages.map((image, i) => {
//     return preloadImageData()
//   })
//
//   return Promise.all(promises)
// }

async function preloadImageData(t) {
  // console.log('test', t)
  return 'test'
  // return new Promise((resolve, reject) => {
  // resolve('test')
  // })
}

// ///тут надо поменять на кавер и без ключей
// imagesForExportQuantity = 1

// Object.keys(pair.images).forEach((key, i) => {
//   figma.ui.postMessage({ type: key, data: pair.images[key] })
// })

// figma.ui.postMessage({ type: pair, data: pair.cover })
// renderFigmaTemplate(currentPair)

loadFonts()
