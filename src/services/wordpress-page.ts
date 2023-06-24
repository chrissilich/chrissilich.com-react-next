import { PAGE_ENDPOINT_SINGLE } from './endpoints'
import { WordpressPage } from '@/interfaces/wordpress-page'

export const getWordpressPage = async (slug: string) => {
	const response = await fetch(PAGE_ENDPOINT_SINGLE + slug, {
		next: { revalidate: 60 },
	})
	const data: WordpressPage[] = await response.json()
	if (data.length > 0) {
		return data[0]
	} else {
		return null
	}
}
