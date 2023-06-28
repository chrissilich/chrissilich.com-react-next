import { Project } from '@/interfaces/project'
import Image from 'next/image'

export default async function HomePortfolioListItem({ project }: { project: Project }) {
	return (
		<div
			id={project.slug}
			className={`project-item ${project.acf.flipped ? 'project-item--flipped' : ''} project-item--pad-${
				project.acf.project_pad
			}`}
		>
			<div className={`details details--size-${project.acf.description_columns}`}>
				<h3>{project.title.rendered}</h3>
				<h4>{project.acf.medium}</h4>
				<p>{project.acf.description_on_home}</p>
				<a href={'projects/' + project.slug} className="see-project expand-clickable-area">
					See Project <span>&rarr;</span>
				</a>
			</div>
			<div className={`image-holder image-holder--size-${project.acf.image_columns}`}>
				<div className="image">
					{project.main_image_media && (
						<>
							<Image
								src={project.main_image_media.source_url}
								width={800}
								height={
									800 *
									(project.main_image_media.media_details.height /
										project.main_image_media.media_details.width)
								}
								alt={project.title.rendered}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
