type ExtensionEntry = string | number | boolean

type Extension = Record<
  `_${string}`,
  Record<string, ExtensionEntry | ExtensionEntry[]>
>

export default Extension
