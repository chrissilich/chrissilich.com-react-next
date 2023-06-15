import { PROJECT_ENDPOINT, PROJECT_ENDPOINT_SINGLE } from './endpoints'
import { Project } from '@/interfaces/project'
import { getMedia } from '@/services/media'

export const getProjectArchive = async () => {
	const response = await fetch(PROJECT_ENDPOINT, {
		next: { revalidate: 60 },
	})
	const projects: Project[] = await response.json()

	await Promise.all(
		projects.map(async (project) => {
			if (project.acf.main_image) {
				project.main_image_media = await getMedia(project.acf.main_image)
				console.log('got image')
			}
		})
	)
	console.log('done with images')
	return projects
}

export const getProjectSingle = async (slug: string) => {
	const response = await fetch(PROJECT_ENDPOINT_SINGLE + slug, {
		next: { revalidate: 60 },
	})
	const data: Project[] = await response.json()
	if (data.length > 0) {
		return data[0]
	} else {
		return null
	}
}
