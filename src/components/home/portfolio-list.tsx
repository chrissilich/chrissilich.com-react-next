import PortfolioListItem from './portfolio-list-item'
import { getProjectArchive } from '@/services/project'

export default async function HomePortfolioList() {
	const projects = await getProjectArchive()

	return (
		<section id="home-portfolio-list">
			<a id="projects"></a>

			<h2>Selected Works</h2>
			{projects.map((project, index) => (
				<PortfolioListItem key={index} project={project} />
			))}
		</section>
	)
}
