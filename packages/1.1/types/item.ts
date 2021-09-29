import { ExtensionMap } from '@json-feed-types/common'
import Author from './author'
import ItemContent from './item-content'
import Attachment from './attachment'

type Item<Extensions extends ExtensionMap = {}> = Extensions['item'] &
  ItemContent & {
    /** Unique for that item for that feed over time. If an item is ever updated, the id should be unchanged. New items should never use a previously-used id. Ideally, the id is the full URL of the resource described by the item, since URLs make great unique identifiers. */
    id: string
    /** The URL of the resource described by the item. It’s the permalink. This may be the same as the id — but should be present regardless. */
    url?: string
    /** The URL of a page elsewhere. This is especially useful for linkblogs. If url links to where you’re talking about a thing, then external_url links to the thing you’re talking about. */
    external_url?: string
    /** Title is plain text. Microblog items in particular may omit titles. */
    title?: string
    /** Summary is a plain text sentence or two describing the item. This might be presented in a timeline, for instance, where a detail view would display all of content_html or content_text. */
    summary?: string
    /** The URL of the main image for the item. This image may also appear in the content_html — if so, it’s a hint to the feed reader that this is the main, featured image. Feed readers may use the image as a preview (probably resized as a thumbnail and placed in a timeline). */
    image?: string
    /** The URL of an image to use as a banner. Some blogging systems (such as Medium) display a different banner image chosen to go with each post, but that image wouldn’t otherwise appear in the content_html. A feed reader with a detail view may choose to show this banner image at the top of the detail view, possibly with the title overlaid. */
    banner_image?: string
    /** Specifies the date in RFC 3339 format.
     *
     * @example '2010-02-07T14:04:00-05:00'
     */
    date_published?: string
    /** Specifies the modification date in RFC 3339 format.
     *
     * @example '2010-02-07T14:04:00-05:00'
     */
    date_modified?: string
    /** New feeds should use authors, even if only 1 author is needed. Existing feeds can include both author and authors for compatibility with existing feed readers. Feed readers should always prefer authors if present.
     *
     * @deprecated 1.1
     */
    author?: Author<Extensions>
    /** Has the same structure as the top-level authors. If not specified in an item, then the top-level authors, if present, are the authors of the item. */
    authors?: Author<Extensions>[]
    /** Tags can have any plain text values you want. Tags tend to be just one word, but they may be anything. Note: they are not the equivalent of Twitter hashtags. Some blogging systems and other feed formats call these categories. */
    tags?: string[]
    /** The language for this item, using the same format as the top-level language field. The value can be different than the primary language for the feed when a specific item is written in a different language than other items in the feed. */
    language?: string
    /** Lists related resources. Podcasts, for instance, would include an attachment that’s an audio or video file. */
    attachments?: Attachment<Extensions>[]
  }

export default Item
