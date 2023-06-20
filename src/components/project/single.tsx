import { Project } from '@/interfaces/project'

export default function ProjectSingle({ project }: { project: Project }) {
	return (
		<>
			<section className="project-single container">
				<h1>
					{project.acf.alternate_title_an_page ? project.acf.alternate_title_an_page : project.title.rendered}
				</h1>
				<h2>
					<em>Client:</em> {project.acf.client}
				</h2>
				<h3>{project.acf.medium}</h3>

				<hr />

				<div className="content row" dangerouslySetInnerHTML={{ __html: project.content.rendered }}></div>
			</section>
		</>
	)
}
