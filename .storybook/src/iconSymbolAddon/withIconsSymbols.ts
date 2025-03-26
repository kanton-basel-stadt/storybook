import { useChannel } from '@storybook/preview-api'
import type { DecoratorFunction } from '@storybook/types'
import { WebComponentsRenderer } from '@storybook/web-components'

type NestedValues = {
  values?: NestedValues[] | string[] | undefined
}

export const withIconsSymbols: DecoratorFunction<WebComponentsRenderer> = (
  storyFn
) => {
  const emit = useChannel({})

  const storyFnOutput: ReturnType<DecoratorFunction<WebComponentsRenderer>> &
    NestedValues = storyFn()

  function onlyUnique<T>(value: T, index: number, array: T[]) {
    return array.indexOf(value) === index
  }

  function getIcons(o: NestedValues) {
    if (!o.values) {
      return []
    }

    if (o.values.length === 0) {
      return []
    }

    if (typeof o.values[0] === 'string') {
      return o.values
        .filter((e) => typeof e === 'string' && e.startsWith('<icon-symbol-'))
        .map((i: string) =>
          i.replace(/<icon-symbol-([a-z0-9\-_]+)\s?.*\/>/g, '$1')
        )
    }

    return o.values
      .map((e) => getIcons(e))
      .flat()
      .filter(onlyUnique<string>)
  }

  emit('icons-symbols/update', { icons: getIcons(storyFnOutput).flat() })

  return storyFnOutput
}
