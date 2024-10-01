import { Fieldset } from './Fieldset'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Form elements/Building blocks/Fieldset',
  render: (args) => Fieldset(args.legend, args.content),
  argTypes: {
    legend: {
      name: 'Legend',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    legend: 'Some fieldset',
    content: loremIpsum({ count: 3 }),
  },
}
