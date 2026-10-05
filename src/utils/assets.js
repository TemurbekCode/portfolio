// Resolves paths like "images/profile/profile.jpg" (relative to src/assets/)
// to a built URL. Returns null when the file does not exist yet, so a
// missing image never breaks the build or the page.
const files = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function asset(path) {
  if (!path) return null
  return files[`../assets/${path}`] ?? null
}
