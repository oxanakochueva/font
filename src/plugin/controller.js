import regeneratorRuntime from 'regenerator-runtime'

import { pairs } from '../app/library/pairs_library.js'
import { fonts } from '../app/library/fonts_library.js'
import { designers } from '../app/library/designers.js'

import { renderFigmaTemplate } from './render'
import { loadFonts } from './fonts'
import { saveImageDataOrExportToFigma } from './images'
import { setStoreCurrentPair, setStoreImagesForExport } from './store'

figma.showUI(__html__)
figma.ui.resize(668, 628)

figma.ui.onmessage = msg => {
  console.log('FIGMA JUST GOT A MESSAGE, YO', msg)

  if (msg.type === 'image-in-bytes') {
    // console.log(msg.id, msg.bytes)
    saveImageDataOrExportToFigma(msg.id, msg.bytes)
  } else if (msg.type === 'font-pair-export') {
    // console.log(msg.pair)
    let newCurrentImages = []

    pairs.forEach((pair, i) => {
      if (pair.id === msg.pair) {
        setStoreCurrentPair({
          id: pair.id,
          fonts: pair.fonts,
          folder: pair.folder,
          heading: pair.heading,
          language: msg.language
        })

        newCurrentImages.push({
          id: msg.pair,
          image: pair.cover,
          loaded: false
        })

        pair.fonts.forEach((fontId, i) => {
          fonts.forEach((font, i) => {
            if (font.id === fontId) {
              font.designers.forEach((designerId, i) => {
                designers.forEach((designer, i) => {
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

        setStoreImagesForExport(newCurrentImages)
      }
    })

    // console.log(currentImages)
    // preloadImageData(currentImages).then(text =>
    //   console.log('promise done', text)
    // )

    // imagesForExportQuantity = currentImages.length

    newCurrentImages.forEach((image, i) => {
      figma.ui.postMessage({ id: image.id, image: image.image })
    })
  } else {
    console.log('unknown message')
  }
}

loadFonts()
