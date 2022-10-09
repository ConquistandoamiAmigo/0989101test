import type Author from './author'

type PostType = {
  slug: string
  title: string
  coverImage: string
  author: Author
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
