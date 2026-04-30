import { Button } from './Button'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../../helpers/defineStory'

const excludedIconNames = ['alva-still', 'arrow-east-thin', 'bettingenkelch', 'breadcrumb', 'card', 'check', 'circle-check', 'circle-error', 'circle-ko', 'circle-ok', 'circle-warning', 'cloud-upload', 'easy-to-read', 'file', 'hands', 'hinweise_no_rounded', 'hinweise_rounded', 'map-pin-coloured', 'pin', 'play', 'print']
const iconsForButton = IconsIndex.iconNames.filter(iconName => !excludedIconNames.includes(iconName))
const { StoryDefinition, DefaultStory } = defineStory(
  Button,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: iconsForButton,
    },
    iconPlacement: {
      name: 'Icon placement',
      options: ['No icon', 'Icon left', 'Icon right', 'Icon only'],
      control: 'radio',
    },
    size: {
      name: 'Size',
      options: ['Standard', 'Small'],
      control: 'radio',
    },
    decorator: {
      name: 'Decorator',
      options: [
        'Link',
        'Prev',
        'Next',
        'Close',
        'Add',
        'Reload',
        'Check',
      ],
      control: 'radio',
    },
    flavour: {
      name: 'Flavour',
      options: [
        'Strong',
        'Feedback',
        'Success',
        'Failure',
      ],
      control: 'radio',
    },
    styles: {
      name: 'Styles',
      options: [
        'Limited',
        'Super',
        'Action',
      ],
      control: 'check',
    },
    notice: {
      name: 'Notice',
      control: 'text',
    },
  },
  {
    label: 'Click me!',
    iconName: 'baselstab',
    iconPlacement: 'Icon left',
    size: 'Standard',
    decorator: [],
    flavour: [],
    styles: [],
    notice: 'The control "Icon" above only propose icons that make sens for a button. We have more icons in the chapter "Icons".',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24154-24737'
)

export default {
  title: '4. Components for the web/Buttons/Button',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Button',
}
