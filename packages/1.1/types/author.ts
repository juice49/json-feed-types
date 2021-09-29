import { RequireAtLeastOne } from 'type-fest'
import { ExtensionMap } from '@json-feed-types/common'

type Author<Extensions extends ExtensionMap = {}> = Extensions['author'] &
  RequireAtLeastOne<{
    /** The author’s name. */
    name?: string
    /** The URL of a site owned by the author. It could be a blog, micro-blog, Twitter account, and so on. Ideally the linked-to page provides a way to contact the author, but that’s not required. The URL could be a mailto: link, though we suspect that will be rare. */
    url?: string
    /** The URL for an image for the author. As with icon, it should be square and relatively large — such as 512 x 512 pixels — and should use transparency where appropriate, since it may be rendered on a non-white background. */
    avatar?: string
  }>

export default Author
