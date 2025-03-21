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
      // Theoretically, the StoryDefinition already _is_ a component, since it
      // has a render function. However, we're passing the original component
      // function stringified (since `component` needs to be a string, according
      // to error messages) so we can pick it up in the withIconsSymbols decorator
      // to show _all_ icons in the "Used icons" panel, not just the ones that
      // are currently rendered.
      component: component.toString(),
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
