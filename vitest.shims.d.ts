/// <reference types="@vitest/browser-playwright" />

declare module 'vitest/browser' {
  interface BrowserCommands {
    validateHtml: (html: string, storyId: string) => Promise<void>
  }
}
