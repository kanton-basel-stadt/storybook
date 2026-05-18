import { Radio } from './Radio'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Radio,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    value: {
      name: 'Value',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    id: {
      name: 'ID',
      control: 'text',
    },
    fieldState: {
      name: 'Field state',
      control: 'select',
      options: ['default', 'inactive', 'validated', 'error'],
      description:
        'inactive = disabled (gray fill); validated = selected + circle-check; error = red outline + circle-error.',
    },
  },
  {
    label: 'Radiobutton',
    value: 'option-a',
    name: 'demo-radio',
    id: 'radio-demo',
    fieldState: 'default',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24420-67804&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '7. Forms/Inputs/Radio',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Radio',
}

/** inactive — node 2202:37961 */
export const Inactive = {
  ...DefaultStory,
  args: {
    ...DefaultStory.args,
    fieldState: 'inactive',
  },
}

/** validated — selected radio + Check (symbol 2256:36734; Hover-Mock unter 2202:37976) */
export const Validated = {
  ...DefaultStory,
  args: {
    ...DefaultStory.args,
    fieldState: 'validated',
  },
}

/** error — node 2202:37964 */
export const ErrorState = {
  ...DefaultStory,
  args: {
    ...DefaultStory.args,
    fieldState: 'error',
  },
}
