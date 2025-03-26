import { TemplateResult } from 'lit'

export default function defineStory(
  component: (...args: any[]) => TemplateResult,
  args: object,
  defaultArgs: object,
  figmaUrl: string
) {
  return {
    StoryDefinition: {
      render: (args: object) => component(...Object.values(args)),
      argTypes: args,
    },
    DefaultStory: {
      args: defaultArgs,
      parameters: figmaUrl
        ? {
            design: {
              type: 'figma',
              url: figmaUrl,
            },
          }
        : undefined,
    },
  }
}
