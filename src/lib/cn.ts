/**
 * Lightweight class name utility. Accepts any mix of strings, arrays,
 * and falsy values and returns a single trimmed class string.
 *
 * For more complex needs, install `clsx` + `tailwind-merge`.
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ').trim()
}
