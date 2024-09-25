import { html } from 'lit'
import COLORS from '@kanton-basel-stadt/designsystem/dist/configs/colors'
import './ContrastChecker.css'

type COLOUR_NAMES = 'red' | 'blue' | 'green' | 'purple' | 'gray'

type rgbColor = { r: number; g: number; b: number }

const RED = 0.2126
const GREEN = 0.7152
const BLUE = 0.0722

const GAMMA = 2.4

function hexToRgb(hex: string): rgbColor | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null
}

function luminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA)
  })
  return a[0] * RED + a[1] * GREEN + a[2] * BLUE
}

function calculateContrast(rgb1: rgbColor, rgb2: rgbColor) {
  const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b)
  const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  return (brightest + 0.05) / (darkest + 0.05)
}

export const ContrastChecker = (
  colors: typeof COLORS,
  selectedForgroundColor: 'all' | 'white' | COLOUR_NAMES,
  selectedBackgroundColor: 'all' | 'white' | COLOUR_NAMES,
) => {
  const mappedColors: { [key: string]: string } = {}
  Object.entries(colors).forEach(([name, shades]) => {
    Object.entries(shades).forEach(([shadeNumber, hex]) => {
      mappedColors[`${name as string}-${shadeNumber as string}`] = hex as string
    })
  })

  function getSelectedColorShades(selectedColor: 'all' | 'white' | COLOUR_NAMES) {
    if (selectedColor === 'all') {
      return mappedColors
    }

    if (selectedColor === 'white') {
      return {
        'white': '#ffffff',
      }
    }

    return colors[selectedColor]
  }

  const selectedForegroundShades = getSelectedColorShades(selectedForgroundColor)
  const selectedBackgroundShades = getSelectedColorShades(selectedBackgroundColor)

  const numberOfForegroundColors = Object.keys(selectedForegroundShades).length
  const numberOfBackgroundColors = Object.keys(selectedBackgroundShades).length

  let hasPrintedBackgroundLabel = false

  return html`
    <table class="w-full" style="width: ${220 + numberOfForegroundColors * 50}px;">
      <tr>
        <td colspan="3" rowspan="3">&nbsp;</td>
        <td class="border border-gray-300 h-50" colspan="${numberOfForegroundColors}">
          Foreground colors
        </td>
      </tr>
      <tr>
        ${Object.keys(selectedForegroundShades).map(key => html`<td class="rotated-text border border-gray-600 h-[120px]">
          ${selectedForgroundColor !== 'all' && selectedForgroundColor !== 'white' ? selectedForgroundColor + '-' : null}${key}
        </td>`)}
      </tr>
      <tr>
        ${Object.values(selectedForegroundShades).map(color => html`<td class="size-50 border border-gray-600" style="background-color: ${color}">&nbsp;</td>`)}
      </tr>
      ${Object.entries(selectedBackgroundShades).map(([shade, bgHex]) => {
        const backgroundLabel = !hasPrintedBackgroundLabel ? html`
          <td class="border border-gray-300 w-50" rowspan="${numberOfBackgroundColors}">
            <div class="rotated-text">
              Background colors
            </div>
          </td>
        ` : ''

        hasPrintedBackgroundLabel = true
        
        return html`
          <tr>
            ${backgroundLabel}
            <td class="size-50 border border-gray-600 w-[120px]">
              ${selectedBackgroundColor !== 'all' && selectedBackgroundColor !== 'white' ? selectedBackgroundColor + '-' : null}${shade}
            </td>
            <td class="size-[50px] border border-gray-600" style="background-color: ${bgHex}">&nbsp;</td>
            
            ${Object.values(selectedForegroundShades).map(fgHex => {
              const fgRgb = hexToRgb(fgHex)
              const bgRgb = hexToRgb(bgHex)
              
              const contrast = calculateContrast(fgRgb, bgRgb)
              
              return html`
                <td class="text-center size-[50px] border border-gray-600" style="background-color: ${contrast > 4.5 ? '#B8D6BE' : '#FF6854'};">
                  ${Math.round(contrast * 100) / 100}
                </td>
              `
            })}
          </tr>
        `
      })}
    </table>
  `
}
