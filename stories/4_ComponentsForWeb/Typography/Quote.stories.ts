import { loremIpsum } from 'lorem-ipsum'
import { Quote } from './Quote'

export default {
  title: '4. Components for the web/Typography/Quote',
  render: (args) =>
    Quote(args.title, args.quote, args.imageUrl, args.name, args.role),
  argTypes: {
    title: {
      name: 'Quote title',
      control: 'text',
    },
    quote: {
      name: 'Quote text',
      control: 'text',
    },
    imageUrl: {
      name: 'URL for the image (for full responsiveness, provide srcset in the <img> tag)',
      control: 'text',
    },
    name: {
      name: 'Author name',
      control: 'text',
    },
    role: {
      name: 'Author role',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    title: loremIpsum(),
    quote: loremIpsum({ count: 10 }),
    imageUrl: 'https://thispersondoesnotexist.com',
    name: 'Jackie Example',
    role: 'Head of Examples',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24420-58026&t=FznYmIANb8uB5p92-1',
    },
  },
}
