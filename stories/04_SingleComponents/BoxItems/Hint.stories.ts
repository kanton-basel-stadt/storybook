import { Hint } from './Hint'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Single components/Box items/Hint-box',
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
  name: 'Hint-box',
}

type HintStoryArgs = {
  multipleHints: boolean
  hintSingle: string
  hintsMany: string[]
}
