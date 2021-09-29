# JSON Feed 1.1 Types

TypeScript types for JSON Feed 1.1.

## Installation

```
npm install --save-dev @json-feed-types/1.1
```

## Usage

```
import Feed from '@json-feed-types/1.1'

const feed: Feed = {
  version: 'https://jsonfeed.org/version/1.1',
  title: 'JSON Feed',
  icon: 'https://micro.blog/jsonfeed/avatar.jpg',
  home_page_url: 'https://www.jsonfeed.org/',
  feed_url: 'https://www.jsonfeed.org/feed.json',
  items: [
    {
      id: 'http://jsonfeed.micro.blog/2020/08/07/json-feed-version.html',
      title: 'JSON Feed version 1.1',
      content_html:
        '<p>We&rsquo;ve updated the spec to <a href="https://jsonfeed.org/version/1.1">version 1.1</a>. Itâ€™s a minor update to JSON Feed, clarifying a few things in the spec and adding a couple new fields such as <code>authors</code> and <code>language</code>.</p>\n\n<p>For version 1.1, we&rsquo;re starting to move to the more specific MIME type <code>application/feed+json</code>. Clients that parse HTML to discover feeds should prefer that MIME type, while still falling back to accepting <code>application/json</code> too.</p>\n\n<p>The <a href="https://jsonfeed.org/code/">code page</a> has also been updated with several new code libraries and apps that support JSON Feed.</p>\n',
      date_published: '2020-08-07T11:44:36-05:00',
      url: 'https://www.jsonfeed.org/2020/08/07/json-feed-version.html',
    },
  ],
}
```

### Extensions

> Publishers can use custom objects in JSON Feeds. Names must start with an \_ character followed by a letter. Custom objects can appear anywhere in a feed.

The JSON Feed types are generic. To define extensions, provide a map:

```
type CustomFeed = Feed<{
  feed: {
    _meta: {
      copyright: string
    }
  }
  author: {
    _meta: {
      id: string
    }
  }
  item: {
    _meta: {
      type: 'SHORT_EPISODE' | 'LONG_EPISODE' | 'SPECIAL_EVENT'
    }
  }
  attachment: {
    _image?: {
      dimensions: [width: number, height: number]
    }
  }
  hub: {
    _meta: {
      instructions: string
    }
  }
}>
```

The map of extensions can be passed to any of the types, or you can access them via your custom `Feed` type:

```
type CustomItem = CustomFeed['Item']
```

## Types

- [Feed](./types/feed.ts)
- [Attachment](./types/attachment.ts)
- [Author](./types/author.ts)
- [Hub](./types/hub.ts)
- [Item](./types/item.ts)
