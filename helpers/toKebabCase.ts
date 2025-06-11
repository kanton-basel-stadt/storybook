export default function toKebabCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to camel-Case
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters (except hyphens)
    .replace(/--+/g, '-') // Collapse multiple hyphens
    .toLowerCase()
    .trim()
}
