import Extension from './extension'

type ExtensionMap = Partial<
  Record<'feed' | 'author' | 'item' | 'attachment' | 'hub', Extension>
>

export default ExtensionMap
