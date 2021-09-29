type BaseFeed<Version extends number> = {
  /** The URL of the version of the format the feed uses. This should appear at the very top, though we recognize that not all JSON generators allow for ordering. */
  version: `https://jsonfeed.org/version/${Version}`
}

export default BaseFeed
