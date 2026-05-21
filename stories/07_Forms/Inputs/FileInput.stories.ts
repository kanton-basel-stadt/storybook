import { FileInput } from './FileInput'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  FileInput,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    id: {
      name: 'Id',
      control: 'text',
    },
    description: {
      name: 'Description',
      control: 'text',
    },
    accept: {
      name: 'Accept',
      control: 'text',
      description:
        'Optional MIME types or extensions (e.g. ".pdf,.jpg" or "image/*").',
    },
    options: {
      name: 'Options',
      control: 'object',
      description:
        'Optional copy, multiple flag, and demo file rows (success / active / loading / error).',
    },
  },
  {
    label: 'Bezeichnung',
    name: 'upload',
    id: 'file-input-1',
    description: '',
    accept: '',
    options: {
      files: [
        {
          id: 'row-1',
          displayName: 'Dateiname.pdf',
          sizeLabel: 'XXXKB',
          state: 'success',
        },
        {
          id: 'row-2',
          displayName: 'Dateiname.pdf',
          sizeLabel: 'XXXKB',
          state: 'active',
        },
        {
          id: 'row-3',
          displayName: 'Dateiname.pdf',
          sizeLabel: 'XXXKB',
          state: 'loading',
          progress: 42,
        },
        {
          id: 'row-4',
          displayName: 'Dateiname.pdf',
          sizeLabel: 'XXXKB',
          state: 'loading',
          progress: 42,
        },
        {
          id: 'row-5',
          displayName: 'Dateiname.pdf',
          sizeLabel: 'XXXKB',
          state: 'error',
          errorMessage: 'Ungültiges Dateiformat',
        },
        {
          id: 'row-6',
          displayName: 'Dateiname.pdf',
          sizeLabel: 'XXXKB',
          state: 'error',
          errorMessage: 'Ungültiges Dateiformat',
        },
      ],
    },
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24906-22269&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '7. Forms/Inputs/File upload',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'File upload',
}
