# Changelog

## 2026

### May

- use designsystem 1.2.0
- refactor the structure and the content of the documentation

## 2025

### June

- Use the correct chapter number for showcase pages.
- Use the correct ID for skipping the contrast checker in accessibility checks.
- Use correct paths on about page; add chapter numbers.
- Fix import of `IconLitWrapper` after documentation restructuring.
- Restructure documentation and fix links from Figma.
- Add documentation for named imports for icons.

### May

- Improve documentation; make stepper flexible; add clarity to radios.
- Update footer to match Figma.
- Adapt the search header to match Figma.
- Align the contrast checker title in the test runner with the story title.
- Add an empty form showcase page (work in progress).
- Fix the numbering of chapters in components.
- Add contribution doc boilerplates; move 404 page to its own chapter.

### March

- Fix icon gathering in `withIcons` decorator; add icon documentation.
- Fix access of `.values` when collecting icons; refactor the icon collection to search recursively.
- Fix font loading and icon panel in the built Storybook.
- Export built CSS to the correct path for Storybook.
- Update dependencies; fix warning about relative base directory.
- Fix font building in dev and production; lint fixes; convenience scripts.
- **General overhaul:** simplify parts of the setup; add the icons panel; add tests; dependency updates; bugfixes.

### January

- Fix email image paths.
- Document test and lint commands in README.
- Tweak GitHub Actions (remove unnecessary `if`; run jobs sequentially; reorder build steps).
- Add automated tests for validation and accessibility.
- Fix the logo on the About page; update dependencies.
- Fix icon SVG classes so styling applies to any SVG, not only direct children.
- Adjust Event teaser structure for design and screen-reader support.
- Add a Contact Teaser email to the component.
- Remove the Module Figma file; use singular “file” wording.
- Add `isSmall` control to email the text component.
- Code style fixes; remove Vue debugging output from email stories.
- Add more controls for email components.
- Add an event-teaser-list; fix the height and placement of event teaser rows.
- Update `.gitignore` to ignore `node_modules`.

## 2024

### December

- Fix image and icon URLs in email templates.
- Use the correct URL in README.
- **Several improvements:** add ESLint and fix issues; add accessibility documentation; use the npm-published unplugin.
- Update DDS (design system); extend docs; improve container.
- Styling fixes.
- Update dependencies and migrate to a newer Storybook version.
- **Several improvements and updates:** new stories; dependency updates; component restructuring; tutorials.

### October

- Add a help box and textarea; adjust input story defaults.
- Add the reversed variant of the toggle switch.
- Batch-add stories.

### September

- Fix the header logo link in theme.
- Fix Tailwind config viewer path.
- Fix the logo path in the theme.
- Bump DDS version.
- **Initial commit:** first Storybook on GitHub with page header and footer, Tailwind utilities, and initial documentation.
