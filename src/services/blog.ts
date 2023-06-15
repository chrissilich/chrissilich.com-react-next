import { BLOG_ENDPOINT, BLOG_ENDPOINT_SINGLE } from './endpoints'
import { BlogPost } from '@/interfaces/blog'

export const getPostArchive = async () => {
	const response = await fetch(BLOG_ENDPOINT, {
		next: { revalidate: 60 },
	})
	const data: BlogPost[] = await response.json()
	return data
}

export const getPostSingle = async (slug: string) => {
	const response = await fetch(BLOG_ENDPOINT_SINGLE + slug, {
		next: { revalidate: 60 },
	})
	const data: BlogPost[] = await response.json()
	if (data.length > 0) {
		return data[0]
	} else {
		return null
	}
}
