import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { fonts } from '../libraries/fonts.js'
import { pairs } from '../libraries/pairs.js'
import { paragraphs } from '../libraries/paragraphs.js'
import { designers } from '../libraries/designers.js'
import { notifications } from '../libraries/notifications.js'

import * as styles from './assets/stylesheets/App.scss'
import App from './App'

const languageOptions = ['latin', 'cyrillic']
const viewOptions = ['letters', 'words', 'phrase']
const typeOptions = ['Serif', 'Sans Serif', 'Mono', 'Reset']

pairs.map((pair, i) => {
  pair.view = 'letters'
  return pair
})

const props = {
  fonts,
  pairs,
  paragraphs,
  designers,
  notifications,
  languageOptions,
  viewOptions,
  typeOptions
}

ReactDOM.render(<App {...props} />, document.getElementById('react-page'))
