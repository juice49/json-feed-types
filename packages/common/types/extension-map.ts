import Extension from './extension.ts'

type ExtensionMap = Partial<
  Record<'feed' | 'author' | 'item' | 'attachment' | 'hub', Extension>
>

export default ExtensionMap
