import colors from '@kanton-basel-stadt/designsystem/dist/configs/colors.ts'
import { ContrastChecker } from './ContrastChecker'

export default {
  title: '3. Tailwind Tools/Contrast Checker',
  render: (args) =>
    ContrastChecker(colors, args.foregroundColor, args.backgroundColor),
  argTypes: {
    foregroundColor: {
      control: { type: 'select' },
      name: 'Foreground color',
      options: ['all', 'green', 'blue', 'gray', 'purple', 'red', 'white'],
    },
    backgroundColor: {
      control: { type: 'select' },
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
}
