/**
 * Capitalizes a string
 * @param {string} value - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
