import { fontsToLoad } from '../app/library/load_fonts.js'

function loadFonts() {
  fontsToLoad.forEach((fontToLoad, i) => {
    figma.loadFontAsync({ family: fontToLoad.family, style: fontToLoad.style })
  })
}

export { loadFonts }
