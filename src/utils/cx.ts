export function cx(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ')
}
