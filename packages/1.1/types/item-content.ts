import { RequireAtLeastOne } from 'type-fest'

type ItemContent = RequireAtLeastOne<{
  /** One or both must be present. This is the HTML or plain text of the item. Important: the only place HTML is allowed in this format is in content_html. A Twitter-like service might use content_text, while a blog might use content_html. Use whichever makes sense for your resource. (It doesn’t even have to be the same for each item in a feed.) */
  content_html?: string
  content_text?: string
}>

export default ItemContent
