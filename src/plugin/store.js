let currentPair = {}
let imagesForExport = []

function getStoreCurrentPair() {
  return currentPair
}

function setStoreCurrentPair(newCurrentPair) {
  currentPair = newCurrentPair
}

function getStoreImagesForExport() {
  return imagesForExport
}

function setStoreImagesForExport(newImagesForExport) {
  imagesForExport = newImagesForExport
}

export {
  getStoreCurrentPair,
  setStoreCurrentPair,
  getStoreImagesForExport,
  setStoreImagesForExport
}
