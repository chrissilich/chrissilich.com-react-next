import { BLOG_ENDPOINT, BLOG_ENDPOINT_SINGLE } from './endpoints'
import { BlogPost } from '@/interfaces/blog'

export const getPostArchive = async () => {
	const response = await fetch(BLOG_ENDPOINT)
	const data: BlogPost[] = await response.json()
	return data
}

export const getPostSingle = async (slug: string) => {
	const response = await fetch(BLOG_ENDPOINT_SINGLE + slug)
	const data: BlogPost[] = await response.json() // NOTE this is an array of one item, a single post
	if (data.length > 0) {
		return data[0]
	} else {
		return null
	}
}
