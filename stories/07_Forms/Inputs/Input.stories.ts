import { Input } from './Input'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Input,
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
    type: {
      name: 'Type',
      control: 'select',
      options: ['text', 'date', 'number', 'email', 'password', 'tel', 'week'],
      description: 'Nur für Variante «Standard» relevant (HTML input type).',
    },
    variant: {
      name: 'Variante',
      control: 'select',
      options: [
        'default',
        'chf',
        'percent',
        'number-with-arrows',
        'textarea',
        'freetext-icon',
      ],
      description:
        '220 px max., CHF, %, number, Textarea, Freitext mit «mehr-text»-Ecke.',
    },
  },
  {
    label: 'Label',
    value: '',
    name: 'my-input',
    id: 'input-123',
    type: 'text',
    variant: 'default',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=28822-8603&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '7. Forms/Inputs/Text, percentage, amount',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Input',
}

export const CHFBetrag = {
  ...DefaultStory,
  args: {
    label: 'Betrag',
    value: '1’234.50',
    name: 'amount-chf',
    id: 'input-chf',
    type: 'text',
    variant: 'chf',
  },
}

export const Prozent = {
  ...DefaultStory,
  name: '%',
  args: {
    label: 'Anteil',
    value: '12.5',
    name: 'percent',
    id: 'input-percent',
    type: 'text',
    variant: 'percent',
  },
}

export const ZahlenfeldMitNavigationspfeilen = {
  ...DefaultStory,
  name: 'Zahlenfeld mit Navigationspfeilen',
  args: {
    label: 'Anzahl',
    value: '42',
    name: 'count',
    id: 'input-number',
    type: 'number',
    variant: 'number-with-arrows',
  },
}

export const Textarea = {
  ...DefaultStory,
  args: {
    label: 'Label',
    value: '',
    name: 'my-textarea',
    id: 'textarea-123',
    type: 'text',
    variant: 'textarea',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=28822-8603&t=w3NqFs5FkutCgMQS-4',
    },
  },
}

export const FreitextIconUntenRechts = {
  ...DefaultStory,
  name: 'Freitext (Icon unten rechts)',
  args: {
    label: 'Freitext',
    value:
      'Lorem ipsum dolor sit amet. Optional längerer Text; Stift-Icon nur dekorativ unten rechts.',
    name: 'notes',
    id: 'input-freetext',
    type: 'text',
    variant: 'freetext-icon',
  },
}
