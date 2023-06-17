import { Project } from '@/interfaces/project'
import Image from 'next/image'

export default async function HomePortfolioListItem({ project }: { project: Project }) {
	return (
		<>
			<section id={project.slug} className={'project-item row ' + project.acf.flipped ? 'flipped' : ''}>
				<a id={project.slug}></a>
				<a href={'projects/' + project.slug} className={'project row '}>
					<div
						className={
							'offsetter col d-none d-lg-block ' + project.acf.project_pad
								? 'col-lg-' + project.acf.project_pad
								: 'col-lg-1'
						}
					></div>
					<div
						className={
							'details col d-flex flex-column justify-content-center col-10 col-md-6 offset-1 offset-md-0 ' +
							project.acf.description_columns
								? 'col-lg-' + project.acf.description_columns
								: 'col-lg-5'
						}
					>
						<h3>{project.title.rendered}</h3>
						<h4>{project.acf.medium}</h4>
						<p>{project.acf.description_on_home}</p>
						<p className="see-project">
							See Project <span>&rarr;</span>
						</p>
					</div>
					<div
						className={
							'image-holder col col-10 col-md-6 offset-1 offset-md-0 ' + project.acf.image_columns
								? 'col-lg-' + project.acf.image_columns
								: 'col-lg-5'
						}
					>
						{/* <scroll-parallax class="scroll-parallax-parent" direction="y" speed="0.1"> */}
						<div className="image">
							{project.main_image_media && (
								<Image
									src={project.main_image_media.source_url}
									width={600}
									height={400}
									alt={project.title.rendered}
								/>
							)}
						</div>
						{/* </scroll-parallax> */}
					</div>
				</a>
			</section>
		</>
	)
}
