import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import 'semantic-ui-css/semantic.min.css'

const req = require.context('../src/', true, /stories.js$/)

addDecorator(withSmartKnobs)
addDecorator(withKnobs)

function loadStories() {
  const files = req.keys()
  files.sort().forEach(filename => req(filename))
}

configure(loadStories, module)
