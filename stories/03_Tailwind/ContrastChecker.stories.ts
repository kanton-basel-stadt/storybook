import colors from '@kanton-basel-stadt/designsystem/dist/configs/colors'
import { ContrastChecker } from './ContrastChecker'

export default {
  title: '3. Tailwind tools/Contrast checker',
  render: (args) =>
    ContrastChecker(colors, args.foregroundColor, args.backgroundColor),
  argTypes: {
    foregroundColor: {
      control: 'select',
      name: 'Foreground color',
      options: ['all', 'green', 'blue', 'gray', 'purple', 'red', 'white'],
    },
    backgroundColor: {
      control: 'select',
      name: 'Background color',
      options: ['all', 'green', 'blue', 'gray', 'purple', 'red', 'white'],
    },
  },
}

export const Default = {
  args: {
    foregroundColor: 'green',
    backgroundColor: 'gray',
  },
  name: 'Contrast checker',
}