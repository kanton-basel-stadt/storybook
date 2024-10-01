import COLORS from '@kanton-basel-stadt/designsystem/dist/configs/colors'
import { Grid } from './Grid'

const numbersOneToTwelve = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  9,
  10,
  11,
  12,
]

export default {
  title: '6. Components/Page Frame/Grid',
  render: (args) => Grid(
    args.numberOfColsXS,
    args.numberOfColsSM,
    args.numberOfColsMD,
    args.numberOfColsLG,
    args.numberOfColsXL,
    args.numberOfColsXXL,
    args.gapSize
  ),
  argTypes: {
    numberOfColsXS: {
      control: { type: 'select' },
      name: 'Number of grid columns on XS',
      options: numbersOneToTwelve
    },
    numberOfColsSM: {
      control: { type: 'select' },
      name: 'Number of grid columns on SM',
      options: numbersOneToTwelve
    },
    numberOfColsMD: {
      control: { type: 'select' },
      name: 'Number of grid columns on MD',
      options: numbersOneToTwelve
    },
    numberOfColsLG: {
      control: { type: 'select' },
      name: 'Number of grid columns on LG',
      options: numbersOneToTwelve
    },
    numberOfColsXL: {
      control: { type: 'select' },
      name: 'Number of grid columns on XL',
      options: numbersOneToTwelve
    },
    numberOfColsXXL: {
      control: { type: 'select' },
      name: 'Number of grid columns on XXL',
      options: numbersOneToTwelve
    },
    gapSize: {
      control: { type: 'select' },
      name: 'Gap size in px',
      options: [
        0,
        1,
        2,
        3,
        5,
        6,
        8,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
        120,
        140,
        220,
      ]
    }
  },
}

export const Default = {
  args: {
    numberOfColsXS: 6,
    numberOfColsSM: 6,
    numberOfColsMD: 6,
    numberOfColsLG: 6,
    numberOfColsXL: 6,
    numberOfColsXXL: 6,
    gapSize: 20,
  },
}
