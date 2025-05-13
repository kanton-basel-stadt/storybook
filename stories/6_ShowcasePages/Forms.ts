import { html } from 'lit'
import { PageHeader } from '../4_ComponentsForWeb/PageFrame/PageHeader'
import { PageFooter } from '../4_ComponentsForWeb/PageFrame/PageFooter'
import { Title } from '../4_ComponentsForWeb/Typography/Title'
import { StepperNav } from '../4_ComponentsForWeb/FormElements/BuildingBlocks/StepperNav'
import { Breadcrumbs } from '../4_ComponentsForWeb/PageFrame/Breadcrumbs'

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
  ${StepperNav()} ${PageFooter()}
`
