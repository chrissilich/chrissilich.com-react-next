import PortfolioListItem from './portfolio-list-item'
import { getProjectArchive } from '@/services/project'

export default async function HomePortfolioList() {
	const projects = await getProjectArchive()

	return (
		<>
			<a id="projects"></a>
			<section id="home-portfolio-list" className="container">
				<h2 className="fat">Selected Projects</h2>

				{projects.map((project, index) => (
					<PortfolioListItem key={index} project={project} />
				))}
			</section>
		</>
	)
}
