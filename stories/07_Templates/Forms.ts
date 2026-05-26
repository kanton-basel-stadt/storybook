import { html } from 'lit'
import { PageHeader } from '../05_CombinedComponents/PageHeader'
import { PageFooter } from '../05_CombinedComponents/PageFooter'
import { Title } from '../04_SingleComponents/Typography/Title'
import { StepperNav } from '../06_Forms/BuildingBlocks/StepperNav'
import { Breadcrumbs } from '../05_CombinedComponents/Breadcrumbs'

export const Forms = () => html`
  ${PageHeader()}
  ${Breadcrumbs([
    {
      label: 'Startseite',
      href: '/',
    },
  ])}
  <div class="container mt-30">${Title('Form example', 'h1')}</div>

  <div class="mt-20 border-t border-gray-200 bg-green-50 py-40">
    <div class="container">Forms boilerplate, add content here.</div>
  </div>
  ${StepperNav(4, 1)} ${PageFooter()}
`
