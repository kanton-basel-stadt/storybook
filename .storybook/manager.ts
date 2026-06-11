import { addons } from 'storybook/manager-api'
import bsTheme from './BsTheme'
import './src/iconSymbolAddon/register'

addons.setConfig({
  theme: bsTheme,
})
