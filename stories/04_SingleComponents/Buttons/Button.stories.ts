import { Button } from './Button'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../../helpers/defineStory'

const excludedIconNames = [
  'alva-still',
  'arrow-east-thin',
  'bettingenkelch',
  'breadcrumb',
  'card',
  'check',
  'circle-check',
  'circle-error',
  'circle-ko',
  'circle-ok',
  'circle-warning',
  'cloud-upload',
  'easy-to-read',
  'file',
  'hands',
  'hinweise_no_rounded',
  'hinweise_rounded',
  'map-pin-coloured',
  'pin',
  'play',
  'print',
]
const iconsForButton = IconsIndex.iconNames.filter(
  (iconName) => !excludedIconNames.includes(iconName)
)
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
        'No decorator',
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
      options: ['No flavour', 'Strong', 'Feedback', 'Success', 'Failure'],
      control: 'radio',
    },
  },
  {
    label: 'Click me!',
    iconName: 'baselstab',
    iconPlacement: 'Icon left',
    size: 'Standard',
    decorator: 'No decorator',
    flavour: 'No flavour',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24154-24737'
)

export default {
  title: '4. Single components/Buttons/Standard',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Standard',
}
