import ProjectListItem from './project-list-item'
import { getProjectArchive } from '@/services/project'

export default async function HomeProjectList() {
	const projects = await getProjectArchive()

	return (
		<section id="portfolio" className="home-project-list">
			<h2 className="fat">Selected Projects</h2>

			{projects.map((project, index) => (
				<ProjectListItem key={index} project={project} />
			))}
		</section>
	)
}
