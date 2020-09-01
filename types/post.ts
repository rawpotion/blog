import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string;
    author: string;
    origin: string;
  }
  content: string
}

export default PostType
