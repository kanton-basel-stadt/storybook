import { StepperNav } from './StepperNav'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  StepperNav,
  {
    numberOfSteps: {
      name: 'Number of steps',
      control: 'number',
    },
    activeStep: {
      name: 'Active',
      control: 'number',
    },
  },
  {
    numberOfSteps: 5,
    activeStep: 2,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24379-27691&t=FznYmIANb8uB5p92-1'
)

export default {
  title:
    '4. Components for the web/Form elements/Building blocks/Stepper navigation',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Stepper navigation',
}
