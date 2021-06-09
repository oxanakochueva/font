let currentPair = {}
let recommendedPairs = []
let language = 'latin'
let imagesForExport = []

function getStoreCurrentPair() {
  console.log('STORE GET PAIR', currentPair)
  return currentPair
}

function setStoreCurrentPair(newCurrentPair) {
  currentPair = newCurrentPair
  console.log('STORE PAIR', currentPair)
}

function getStoreRecomendedPairs() {
  console.log('STORE GET REC', recommendedPairs)
  return recommendedPairs
}

function setStoreRecomendedPairs(newRecommendedPairs) {
  recommendedPairs = newRecommendedPairs
  console.log('STORE REC', recommendedPairs)
}

function getStoreLanguage() {
  return language
}

function setStoreLanguage(newLanguage) {
  language = newLanguage
}

function getStoreImagesForExport() {
  return imagesForExport
}

function setStoreImagesForExport(newImagesForExport) {
  imagesForExport = newImagesForExport
}

export {
  getStoreLanguage,
  setStoreLanguage,
  getStoreCurrentPair,
  setStoreCurrentPair,
  getStoreRecomendedPairs,
  setStoreRecomendedPairs,
  getStoreImagesForExport,
  setStoreImagesForExport
}
