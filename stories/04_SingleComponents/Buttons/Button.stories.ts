import { Button } from './Button'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../../helpers/defineStory'
import { html } from 'lit'

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
    iconPlacement: {
      name: 'Icon placement',
      options: ['No icon', 'Icon left', 'Icon right', 'Icon only'],
      control: 'radio',
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: iconsForButton,
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
    size: {
      name: 'Size',
      options: ['Standard', 'Small'],
      control: 'radio',
    },
    variant: {
      name: 'Variant',
      options: ['Standard', 'Strong', 'Feedback', 'Success', 'Failure'],
      control: 'radio',
    },
  },
  {
    label: 'Click me!',
    iconPlacement: 'Icon left',
    iconName: 'baselstab',
    decorator: 'No decorator',
    size: 'Standard',
    variant: 'Standard',
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
  render: (args) => html`
    ${Button(
      args.label,
      args.iconPlacement,
      args.iconName,
      args.decorator,
      args.size,
      args.variant
    )}
    <p class="mt-30 text-xs text-gray-700">
      Notices:<br />
      - The control "Icon" below only proposes icons that make sense for a
      button. We have more icons in the chapter "Icons" of the left menu.<br />
      - Some option combinations do not make much sense, such as using a "Close"
      decorator with a "Success" variant.<br />
    </p>
  `,
}
