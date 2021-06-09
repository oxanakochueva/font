// import regeneratorRuntime from 'regenerator-runtime'

import { pairs } from '../libraries/pairs.js'
import { fonts } from '../libraries/fonts.js'
import { designers } from '../libraries/designers.js'

// import { renderFigmaTemplate } from './render'
import { loadFonts } from './fonts'
import { saveImageDataOrExportToFigma } from './images'

import {
  // getStoreCurrentPair,
  // getStoreRecomendedPairs,
  setStoreCurrentPair,
  setStoreRecomendedPairs,
  setStoreImagesForExport
} from './store'

figma.showUI(__html__)
figma.ui.resize(668, 628)

figma.ui.onmessage = msg => {
  console.log('FIGMA JUST GOT A MESSAGE, YO', msg)

  if (msg.type === 'image-in-bytes') {
    saveImageDataOrExportToFigma(msg.id, msg.bytes)
  } else if (msg.type === 'font-pair-export') {
    // console.log(msg.pair)
    let currentPair = {}
    let newCurrentImages = []

    pairs.forEach(pair => {
      if (pair.id === msg.currentPairId) {
        currentPair = pair

        newCurrentImages.push({
          id: msg.currentPairId,
          image: pair.cover,
          loaded: false
        })

        pair.fonts.forEach(fontId => {
          fonts.forEach(font => {
            if (font.id === fontId) {
              font.designers.forEach(designerId => {
                designers.forEach(designer => {
                  if (designer.id === designerId) {
                    newCurrentImages.push({
                      id: designer.id,
                      image: designer.userpic,
                      loaded: false
                    })
                  }
                })
              })
            }
          })
        })
      }
    })

    msg.recommendedPairs.forEach(recomendation => {
      newCurrentImages.push({
        id: recomendation.id,
        image: recomendation.cover,
        loaded: false
      })
    })

    setStoreCurrentPair(currentPair)
    setStoreRecomendedPairs(msg.recommendedPairs)
    setStoreImagesForExport(newCurrentImages)

    newCurrentImages.forEach(image => {
      figma.ui.postMessage({ id: image.id, image: image.image })
    })
  } else if (msg.type === 'set-storage') {
    figma.clientStorage.setAsync('test', { something: msg.id })
  } else if (msg.type === 'get-storage') {
    figma.clientStorage.getAsync('test').then(test => {
      console.log('from controller', test)
      figma.ui.postMessage({ type: 'get-storage', data: test })
    })
    // let test = await figma.clientStorage.getAsync('test') //.then(test => {
    // console.log('from controller', test)
    // //   // post(test)
    // figma.ui.postMessage({ type: 'get-storage', data: test })
    // // })
  } else {
    console.log('unknown message')
  }
}

// function post(data) {
//   figma.ui.postMessage({ type: 'get-storage', data: data })
// }

loadFonts()
