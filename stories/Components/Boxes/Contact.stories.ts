import { Contact } from './Contact'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Boxes/Contact',
  render: (args) => Contact(
    args.name,
    args.description,
    args.phoneNumber,
    args.emailAddress,
    args.additionalInfo,
  ),
  argTypes: {
    name: {
      name: 'Name',
      control: 'text',
    },
    description: {
      name: 'Description',
      control: 'text',
    },
    phoneNumber: {
      name: 'Phone number',
      control: 'text',
    },
    emailAddress: {
      name: 'Email address',
      control: 'text',
    },
    additionalInfo: {
      name: 'Additional info',
      control: 'text',
    },
  }
}

export const Default = {
  args: {
    name: loremIpsum(),
    description: loremIpsum({ count: 2, }),
    phoneNumber: '+41 61 123 45 67',
    emailAddress: 'noreply@bs.ch',
    additionalInfo: loremIpsum({ count: 2, }),
  }
}






