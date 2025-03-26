import { useChannel } from '@storybook/preview-api'
import type { DecoratorFunction } from '@storybook/types'
import { WebComponentsRenderer } from '@storybook/web-components'

export const withIconsSymbols: DecoratorFunction<WebComponentsRenderer> = (
  storyFn
) => {
  const emit = useChannel({})

  const storyFnOutput = storyFn()

  function onlyUnique<T>(value: T, index: number, array: T[]) {
    return array.indexOf(value) === index
  }

  // @ts-expect-error We know it's there because we checked.
  const icons: string[] = storyFnOutput.values
    .map((v: { values: string[] }) => v.values)
    .filter((v: string[]) => v && v.length > 0)
    .map((v: { values?: string[] }[]) => (v[0].values ? v[0].values[0] : ''))
    .filter((e: string) => e && e.startsWith('<icon-symbol-'))
    .map((i: string) => i.replace(/<icon-symbol-([a-z0-9\-_]+)\s?.*\/>/g, '$1'))
    .filter(onlyUnique<string>)

  emit('icons-symbols/update', { icons })

  return storyFnOutput
}
