let state = {
  search: {
    input_text: 'what is now in input',
    query: 'what you searched for'
  },
  language: 'en',
  font: {
    primary: 'sans-serif',
    secondary: 'serif'
  },
  view: 'letters',
  pairs: [
    {
      id: josefin_cardo,
      favourite: false
    },
    {
      id: josefin_cardo,
      favourite: false
    }
  ]
}

const props = {
  language: ['en', 'ru']
  font: ['sans-serif', 'serif', 'mono']
  view: ['letters', 'words', 'phrase']
}
