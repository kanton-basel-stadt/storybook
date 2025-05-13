import { Grid } from './Grid'
import defineStory from '../../../helpers/defineStory'

const numbersOneToTwelve = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12]

const { StoryDefinition, DefaultStory } = defineStory(
  Grid,
  {
    numberOfColsXS: {
      control: 'select',
      name: 'Number of grid columns on XS',
      options: numbersOneToTwelve,
    },
    numberOfColsSM: {
      control: 'select',
      name: 'Number of grid columns on SM',
      options: numbersOneToTwelve,
    },
    numberOfColsMD: {
      control: 'select',
      name: 'Number of grid columns on MD',
      options: numbersOneToTwelve,
    },
    numberOfColsLG: {
      control: 'select',
      name: 'Number of grid columns on LG',
      options: numbersOneToTwelve,
    },
    numberOfColsXL: {
      control: 'select',
      name: 'Number of grid columns on XL',
      options: numbersOneToTwelve,
    },
    numberOfColsXXL: {
      control: 'select',
      name: 'Number of grid columns on XXL',
      options: numbersOneToTwelve,
    },
    gapSize: {
      control: 'select',
      name: 'Gap size in px',
      options: [
        0, 1, 2, 3, 5, 6, 8, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90,
        100, 120, 140, 220,
      ],
    },
  },
  {
    numberOfColsXS: 6,
    numberOfColsSM: 6,
    numberOfColsMD: 6,
    numberOfColsLG: 6,
    numberOfColsXL: 6,
    numberOfColsXXL: 6,
    gapSize: 20,
  },
  null
)

export default {
  title: '5. Components for the web/Page Frame/Grid',
  ...StoryDefinition,
}

export const Default = DefaultStory
