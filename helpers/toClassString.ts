import { ClassInfo } from 'lit-html/directives/class-map'

export default function (classes: ClassInfo) {
  return Object.entries(classes)
    .map(([key, value]) => {
      if (!value) {
        return null
      }

      return key
    })
    .filter((v) => !!v)
    .join(' ')
}
