import { MEDIA_ENDPOINT } from './endpoints'
import { Media } from '@/interfaces/media'

export const getMedia = async (id: Number) => {
	const response = await fetch(MEDIA_ENDPOINT + id, {
		next: { revalidate: 600 },
	})
	const data: Media = await response.json()
	return data
}
