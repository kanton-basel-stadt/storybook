import { type API, useAddonState, useChannel } from '@storybook/manager-api'
import * as React from 'react'

export const PANEL_ID = 'icon-symbol-panel'

export const IconSymbolPanel: React.FC<{ api: API }> = () => {
  const [{ icons }, setState] = useAddonState(PANEL_ID, {
    icons: [],
  })

  useChannel({
    'icons-symbols/update': ({ icons }) => {
      setState((state) => ({ ...state, icons }))
    },
  })

  if (icons.length === 0) {
    return (
      <div style={{ padding: 10, fontSize: 16 }}>
        No icons found in this component.
      </div>
    )
  }

  return (
    <div style={{ padding: 10, fontSize: 16 }}>
      Use the following code in your JS (component or entry) to import all icons
      used in this component:
      <code
        style={{
          display: 'block',
          padding: 10,
          backgroundColor: 'rgb(251,251,251)',
          whiteSpace: 'pre',
        }}
      >
        {icons
          .map(
            (i) =>
              `import '@kanton-basel-stadt/designsystem/icons/symbol/${i.replace('icon-symbol-', '')}'`
          )
          .join('\n')}
      </code>
    </div>
  )
}
