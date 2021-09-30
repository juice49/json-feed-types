import { ExtensionMap } from '@json-feed-types/common'

type Attachment<Extensions extends ExtensionMap = {}> =
  Extensions['attachment'] & {
    /** Specifies the location of the attachment. */
    url: string
    /** Specifies the type of the attachment.
     *
     * @example 'audio/mpeg'
     * */
    mime_type: string
    /** A name for the attachment. Important: if there are multiple attachments, and two or more have the exact same title (when title is present), then they are considered as alternate representations of the same thing. In this way a podcaster, for instance, might provide an audio recording in different formats. */
    title?: string
    /** Specifies how large the file is. */
    size_in_bytes?: number
    /** Specifies how long it takes to listen to or watch, when played at normal speed. */
    duration_in_seconds?: number
  }

export default Attachment
