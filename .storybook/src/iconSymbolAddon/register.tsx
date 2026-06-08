import { addons, types, useAddonState } from 'storybook/manager-api'
import { AddonPanel } from 'storybook/internal/components'
import { PANEL_ID, IconSymbolPanel } from './IconSymbolPanel'
import * as React from 'react'

addons.register(PANEL_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: () => {
      const [{ icons, isNamedImports }] = useAddonState(PANEL_ID, {
        icons: [],
        isNamedImports: false,
      })

      return `Used icons from DDS (${icons.length} | ${isNamedImports ? 'named' : 'anonymous'} imports)`
    },
    render: ({ active }) => (
      <AddonPanel active={active}>
        <IconSymbolPanel api={api} />
      </AddonPanel>
    ),
  })
})
