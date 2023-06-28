import { getProjectArchive } from '@/services/project'

import Image from 'next/image'
import Link from 'next/link'

export default async function ProjectArchive() {
	const projects = await getProjectArchive()

	return (
		<main className="container">
			<h1>Project Archive</h1>
			<ul>
				{projects.map((project) => (
					<li key={project.id}>
						<h1>{project.title.rendered}</h1>
						<h2>
							{project.acf.client} | {project.acf.medium}
						</h2>
						{project.main_image_media && (
							<Image
								src={project.main_image_media.source_url}
								width={500}
								height={500}
								alt={project.title.rendered}
							/>
						)}
						<Link href={'/projects/' + project.slug}>See Project</Link>
					</li>
				))}
			</ul>
		</main>
	)
}