import { useChannel } from '@storybook/preview-api'
import type { DecoratorFunction } from '@storybook/types'
import { WebComponentsRenderer } from '@storybook/web-components'

export const withIconsSymbols: DecoratorFunction<WebComponentsRenderer> = (
  storyFn,
  context
) => {
  const emit = useChannel({})

  function onlyUnique<T>(value: T, index: number, array: T[]) {
    return array.indexOf(value) === index
  }

  if (context.component) {
    emit('icons-symbols/update', {
      icons: Array.from(context.component.matchAll(/\$\{Icon\("([a-z\-_]+)"/g))
        .map((m) => m[1])
        .filter(onlyUnique<string>),
    })
  }

  return storyFn()
}
