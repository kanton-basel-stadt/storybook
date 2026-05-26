import { html } from 'lit'
import { PageHeader } from '../05_CombinedComponents/PageHeader'
import { PageFooter } from '../05_CombinedComponents/PageFooter'
import { Title } from '../04_SingleComponents/Typography/Title'
import { StepperNav } from '../06_Forms/BuildingBlocks/StepperNav'
import { Breadcrumbs } from '../05_CombinedComponents/Breadcrumbs'
import { Fieldset } from '../06_Forms/BuildingBlocks/Fieldset'
import { Container } from '../05_CombinedComponents/Container'
import { Input } from '../06_Forms/Inputs/Input'
import { Checkbox } from '../06_Forms/Inputs/Checkbox'
import { Radio } from '../06_Forms/Inputs/Radio'

export const Forms = () => html`
  ${PageHeader()}
  ${Breadcrumbs([
    {
      label: 'Starter',
      href: '/',
    },
  ])}
  <div class="container mt-30">${Title('Form example', 'h1')}</div>
  <div class="mt-20 border-t border-gray-200 bg-green-50">
    ${Container(
      html`
        ${StepperNav(8, 1)}
        ${Fieldset(
          'My first field set',
          html`
            <div class="grid w-full grid-cols-1 gap-20 md:grid-cols-3">
              <div class="min-w-0">
                ${Input(
                  'First name',
                  'John',
                  'first-name',
                  'first-name-id',
                  'text'
                )}
              </div>
              <div class="min-w-0">
                ${Input(
                  'Last name',
                  'Doe',
                  'last-name',
                  'last-name-id',
                  'text'
                )}
              </div>
              <div class="min-w-0">
                ${Checkbox(
                  'Remember me',
                  'remember-me',
                  'remember-me',
                  'remember-me-id'
                )}
              </div>
            </div>
          `
        )}
        ${Fieldset(
          'My second field set',
          html`
            <div class="grid w-full grid-cols-1 gap-20 md:grid-cols-3">
              <div class="[&_.input]:max-w-full min-w-0 [&_.input]:w-full">
                ${Input('Email', '', 'email', 'email-id', 'email')}
              </div>
              <div class="[&_.input]:max-w-full min-w-0 [&_.input]:w-full">
                ${Input(
                  'Password',
                  '1234',
                  'password',
                  'password-id',
                  'password'
                )}
              </div>
              <div class="[&_.input]:max-w-full min-w-0 [&_.input]:w-full">
                ${Input(
                  'Phone number',
                  '+41 61 654 85 65',
                  'phone-number',
                  'phone-number-id',
                  'tel'
                )}
              </div>
              <div class="min-w-0">
                ${Radio(
                  'default',
                  'Male',
                  'gender-male',
                  'gender-male',
                  'gender-id'
                )}
                ${Radio(
                  'default',
                  'Female',
                  'gender-female',
                  'gender-female',
                  'gender-id'
                )}
              </div>
            </div>
          `
        )}
        ${Fieldset(
          'My third field set',
          html`
            <div class="grid w-full grid-cols-1 gap-20 md:grid-cols-3">
              <div class="[&_.input]:max-w-full min-w-0 [&_.input]:w-full">
                ${Input('Street', '', 'street', 'street-id', 'text')}
              </div>
              <div class="[&_.input]:max-w-full min-w-0 [&_.input]:w-full">
                ${Input('City', '', 'city', 'city-id', 'text')}
              </div>
              <div class="[&_.input]:max-w-full min-w-0 [&_.input]:w-full">
                ${Input('Zip code', '', 'zip-code', 'zip-code-id', 'text')}
              </div>
              <div class="[&_.input]:max-w-full min-w-0 [&_.input]:w-full">
                ${Input(
                  'Date of birth',
                  '',
                  'date-of-birth',
                  'date-of-birth-id',
                  'date'
                )}
              </div>
            </div>
          `
        )}
      `,
      false
    )}
    ${PageFooter()}
  </div>
`
