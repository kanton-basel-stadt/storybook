import { ClassInfo } from 'lit-html/directives/class-map'

export default function(classes: ClassInfo) {
  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(' ')
}
