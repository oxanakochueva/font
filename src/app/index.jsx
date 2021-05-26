import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'

const viewOptions = ['letters', 'words', 'phrase']
const typeOptions = ['Serif', 'Sans Serif', 'Mono', 'Clear']

ReactDOM.render(
  <App viewOptions={viewOptions} typeOptions={typeOptions} />,
  document.getElementById('react-page')
)
