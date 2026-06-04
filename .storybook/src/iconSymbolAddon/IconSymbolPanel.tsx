import { type API, useAddonState, useChannel } from 'storybook/manager-api'
import * as React from 'react'
import toPascalCase from '../../../helpers/toPascalCase'
import toKebabCase from '../../../helpers/toKebabCase'

export const PANEL_ID = 'icon-symbol-panel'

export const IconSymbolPanel: React.FC<{ api: API }> = () => {
  const [{ icons, isNamedImports }, setIconsState] = useAddonState(PANEL_ID, {
    icons: [],
    isNamedImports: false,
  })

  const [{ code }, setCodeState] = useAddonState('storybook/html', {
    code: null,
  })

  React.useEffect(() => {
    if (code === null) {
      return
    }

    let alteredCode = code
    if (isNamedImports) {
      alteredCode = code.replace(
        /<(\/?)icon-symbol-([a-z0-9_\-]+)/gm,
        (_, closingSlash: string | undefined, iconName: string) => {
          return `<${closingSlash}IconSymbol${toPascalCase(iconName)}`
        }
      )
    } else {
      alteredCode = code.replace(
        /<(\/?)IconSymbol([a-zA-Z0-9_\-]+)/gm,
        (_, closingSlash: string | undefined, iconName: string) => {
          console.log(iconName, toKebabCase(iconName))

          return `<${closingSlash}icon-symbol-${toKebabCase(iconName)}`
        }
      )
    }

    if (alteredCode !== code) {
      setCodeState({ code: alteredCode })
    }
  }, [code, isNamedImports])

  useChannel({
    'icons-symbols/update': ({ icons }) => {
      setIconsState((state) => ({ ...state, icons }))
    },
  })

  function toggleNamedImports() {
    setIconsState({
      icons,
      isNamedImports: !isNamedImports,
    })
  }

  if (icons.length === 0) {
    return (
      <div style={{ padding: 10, fontSize: 16 }}>
        No icons found in this component.
      </div>
    )
  }

  return (
    <div style={{ padding: 10, fontSize: 16 }}>
      <div>
        <label htmlFor="namedImports" className="checkbox">
          <input
            type="checkbox"
            name="namedImports"
            id="namedImports"
            onInput={toggleNamedImports}
          />
          Use named imports? This may be necessary for frameworks like
          SvelteKit, Vue3+ or Astro.
        </label>
      </div>

      <hr className="my-10" />

      <p>
        Use the following code in your JS (component or entry) to import all
        icons used in this component:
      </p>
      <code
        style={{
          display: 'block',
          padding: 10,
          backgroundColor: 'rgb(251,251,251)',
          whiteSpace: 'pre',
        }}
      >
        {icons
          .map((i) =>
            isNamedImports
              ? `import IconSymbol${toPascalCase(i)} from '@kanton-basel-stadt/designsystem/icons/symbol/${i.replace('icon-symbol-', '')}'`
              : `import '@kanton-basel-stadt/designsystem/icons/symbol/${i.replace('icon-symbol-', '')}'`
          )
          .join('\n')}
      </code>
    </div>
  )
}
