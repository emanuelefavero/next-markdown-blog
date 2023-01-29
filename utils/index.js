// Sort posts by date descending
export function sortByDate(a, b) {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

// Sort posts by date ascending
// export function sortByDateAscending(a, b) {
//   return new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
// }
