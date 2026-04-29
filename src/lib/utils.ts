/** Format a number with locale-aware thousands separators */
export const formatNumber = (n: number, locale = 'en-US') =>
  new Intl.NumberFormat(locale).format(n)

/** Clamp a number between min and max */
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

/** Debounce a function */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/** Sleep for a given number of milliseconds */
export const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))
