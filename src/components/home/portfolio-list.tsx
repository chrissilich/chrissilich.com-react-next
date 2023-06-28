import PortfolioListItem from './portfolio-list-item'
import { getProjectArchive } from '@/services/project'

export default async function HomePortfolioList() {
	const projects = await getProjectArchive()

	return (
		<section id="portfolio" className="home-portfolio-list">
			<h2 className="fat">Selected Projects</h2>

			{projects.map((project, index) => (
				<PortfolioListItem key={index} project={project} />
			))}
		</section>
	)
}
