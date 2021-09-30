import { BaseFeed } from '@json-feed-types/common'
import { ExtensionMap } from '@json-feed-types/common'
import Author from './author'
import Item from './item'
import Hub from './hub'

type Feed<Extensions extends ExtensionMap = {}> = BaseFeed<1.1> &
  Extensions['feed'] & {
    /** The name of the feed, which will often correspond to the name of the website (blog, for instance), though not necessarily. */
    title: string
    /** (strongly recommended) The URL of the resource that the feed describes. This resource may or may not actually be a “home” page, but it should be an HTML page. If a feed is published on the public web, this should be considered as required. But it may not make sense in the case of a file created on a desktop computer, when that file is not shared or is shared only privately. */
    home_page_url?: string
    /** (strongly recommended) The URL of the feed, and serves as the unique identifier for the feed. As with home_page_url, this should be considered required for feeds on the public web. */
    feed_url?: string
    /** Provides more detail, beyond the title, on what the feed is about. A feed reader may display this text. */
    description?: string
    /** A description of the purpose of the feed. This is for the use of people looking at the raw JSON, and should be ignored by feed readers. */
    user_comment?: string
    /** The URL of a feed that provides the next n items, where n is determined by the publisher. This allows for pagination, but with the expectation that reader software is not required to use it and probably won’t use it very often. next_url must not be the same as feed_url, and it must not be the same as a previous next_url (to avoid infinite loops). */
    next_url?: string
    /** The URL of an image for the feed suitable to be used in a timeline, much the way an avatar might be used. It should be square and relatively large — such as 512 x 512 pixels — so that it can be scaled-down and so that it can look good on retina displays. It should use transparency where appropriate, since it may be rendered on a non-white background. */
    icon?: string
    /** The URL of an image for the feed suitable to be used in a source list. It should be square and relatively small, but not smaller than 64 x 64 pixels (so that it can look good on retina displays). As with icon, this image should use transparency where appropriate, since it may be rendered on a non-white background. */
    favicon?: string
    /**
     * New feeds should use authors, even if only 1 author is needed. Existing feeds can include both author and authors for compatibility with existing feed readers. Feed readers should always prefer authors if present.
     *
     * @deprecated 1.1
     */
    author?: Author<Extensions>
    /** Specifies one or more feed authors. The author object has several members. */
    authors?: Author<Extensions>[]
    /**
     * The primary language for the feed in the format specified in RFC 5646. The value is usually a 2-letter language tag from ISO 639-1, optionally followed by a region tag.
     *
     * @example 'en'
     * @example 'en-US'
     * */
    language?: string
    /** Whether or not the feed is finished — that is, whether or not it will ever update again. A feed for a temporary event, such as an instance of the Olympics, could expire. If the value is true, then it’s expired. Any other value, or the absence of expired, means the feed may continue to update. */
    expired?: boolean
    /** Describes endpoints that can be used to subscribe to real-time notifications from the publisher of this feed. Each object has a type and url, both of which are required. */
    hubs?: Hub<Extensions>[]
    items: Item<Extensions>[]
  }

export default Feed
