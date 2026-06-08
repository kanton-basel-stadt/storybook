import { Hint } from './Hint'
import { loremIpsum } from 'lorem-ipsum'
import { html } from 'lit'

export default {
  title: '6. Forms/Building blocks/Hint box',
  render(args: HintStoryArgs) {
    const hints = args.multipleHints ? args.hintsMany : [args.hintSingle]
    return Hint(hints)
  },
  argTypes: {
    multipleHints: {
      name: 'Multiple hints',
      description:
        'Use several hints as a bullet list instead of one paragraph.',
      control: 'boolean',
    },
    hintSingle: {
      name: 'Hint (single)',
      control: 'text',
      if: { arg: 'multipleHints', eq: false },
    },
    hintsMany: {
      name: 'Hints (multiple)',
      control: 'object',
      if: { arg: 'multipleHints', eq: true },
    },
  },
  args: {
    multipleHints: false,
    hintSingle: loremIpsum({ count: 2 }),
    hintsMany: [
      loremIpsum({ count: 1 }),
      loremIpsum({ count: 1 }),
      loremIpsum({ count: 1 }),
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=32116-39665&t=uE07ro0CYT8jUMKb-4',
    },
  },
}

export const Default = {
  name: 'Hint box',
  render: (args) => html`
    ${Hint(args.hintsMany)}
    <p class="mt-30 text-xs text-gray-700">
      Notices:<br />
      - This hint bubble is to be included into a bubble containing it.
    </p>
  `,
}

type HintStoryArgs = {
  multipleHints: boolean
  hintSingle: string
  hintsMany: string[]
}
