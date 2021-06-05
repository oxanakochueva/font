import { fontsToLoad } from '../libraries/fonts_to_load.js'

function loadFonts() {
  fontsToLoad.forEach((fontToLoad, i) => {
    figma.loadFontAsync({ family: fontToLoad.family, style: fontToLoad.style })
  })
}

export { loadFonts }
