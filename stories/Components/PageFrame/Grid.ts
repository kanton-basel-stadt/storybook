import { html } from 'lit'

export type GridNumberSettings = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

// The classes are written out here so Tailwind can pick them up.

const gridColsClassesXs = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
}

const gridColsClassesSm = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  7: 'sm:grid-cols-7',
  8: 'sm:grid-cols-8',
  9: 'sm:grid-cols-9',
  10: 'sm:grid-cols-10',
  11: 'sm:grid-cols-11',
  12: 'sm:grid-cols-12',
}

const gridColsClassesMd = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
}

const gridColsClassesLg = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
  8: 'lg:grid-cols-8',
  9: 'lg:grid-cols-9',
  10: 'lg:grid-cols-10',
  11: 'lg:grid-cols-11',
  12: 'lg:grid-cols-12',
}

const gridColsClassesXl = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  7: 'xl:grid-cols-7',
  8: 'xl:grid-cols-8',
  9: 'xl:grid-cols-9',
  10: 'xl:grid-cols-10',
  11: 'xl:grid-cols-11',
  12: 'xl:grid-cols-12',
}

const gridColsClassesXxl = {
  1: 'xxl:grid-cols-1',
  2: 'xxl:grid-cols-2',
  3: 'xxl:grid-cols-3',
  4: 'xxl:grid-cols-4',
  5: 'xxl:grid-cols-5',
  6: 'xxl:grid-cols-6',
  7: 'xxl:grid-cols-7',
  8: 'xxl:grid-cols-8',
  9: 'xxl:grid-cols-9',
  10: 'xxl:grid-cols-10',
  11: 'xxl:grid-cols-11',
  12: 'xxl:grid-cols-12',
}

const gapClasses = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  15: 'gap-15',
  20: 'gap-20',
  25: 'gap-25',
  30: 'gap-30',
  35: 'gap-35',
  40: 'gap-40',
  50: 'gap-50',
  60: 'gap-60',
  70: 'gap-70',
  80: 'gap-80',
  90: 'gap-90',
  100: 'gap-100',
  120: 'gap-120',
  140: 'gap-140',
  220: 'gap-220',
}

function getGridClasses(
  numberOfColsXS: GridNumberSettings,
  numberOfColsSM: GridNumberSettings,
  numberOfColsMD: GridNumberSettings,
  numberOfColsLG: GridNumberSettings,
  numberOfColsXL: GridNumberSettings,
  numberOfColsXXL: GridNumberSettings,
) {
  const classes = []

  classes.push(gridColsClassesXs[numberOfColsXS])

  if (numberOfColsSM !== numberOfColsXS) {
    classes.push(gridColsClassesSm[numberOfColsSM])
  }

  if (numberOfColsMD !== numberOfColsSM) {
    classes.push(gridColsClassesMd[numberOfColsMD])
  }

  if (numberOfColsLG !== numberOfColsMD) {
    classes.push(gridColsClassesLg[numberOfColsLG])
  }

  if (numberOfColsXL !== numberOfColsLG) {
    classes.push(gridColsClassesXl[numberOfColsXL])
  }

  if (numberOfColsXXL !== numberOfColsXL) {
    classes.push(gridColsClassesXxl[numberOfColsXXL])
  }

  return classes.join(' ')
}

export const Grid = (
  numberOfColsXS: GridNumberSettings,
  numberOfColsSM: GridNumberSettings,
  numberOfColsMD: GridNumberSettings,
  numberOfColsLG: GridNumberSettings,
  numberOfColsXL: GridNumberSettings,
  numberOfColsXXL: GridNumberSettings,
  gapSize: number
) => {
  return html`
    <div class="container grid ${getGridClasses(numberOfColsXS, numberOfColsSM, numberOfColsMD, numberOfColsLG, numberOfColsXL, numberOfColsXXL)} ${gapClasses[gapSize]}">
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 1</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 2</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 3</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 4</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 5</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 6</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 7</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 8</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 9</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 10</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 11</div>
      <div class="bg-green-200 rounded h-[120px] flex items-center justify-center">Grid element 12</div>
    </div>
  `
}
