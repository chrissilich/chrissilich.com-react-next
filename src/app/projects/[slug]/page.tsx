import { getProjectSingle } from '@/services/project'

import Header from '@/components/header'
import Background from '@/components/background'
import Footer from '@/components/footer'

export default async function ProjectSingle({ params }: { params: { slug: string } }) {
	const project = await getProjectSingle(params.slug)

	return (
		<>
			<Header />

			{project && (
				<section className="project-single container">
					<div>
						<h1>
							{project.acf.alternate_title_an_page
								? project.acf.alternate_title_an_page
								: project.title.rendered}
						</h1>
						<h2>
							<em>Client:</em> {project.acf.client}
						</h2>
						<h3>{project.acf.medium}</h3>

						<hr />

						<div
							className="content row"
							dangerouslySetInnerHTML={{ __html: project.content.rendered }}
						></div>
					</div>
				</section>
			)}

			{!project && (
				<>
					<h1>404</h1>
					<p>Project not found.</p>
				</>
			)}

			<Background />
			<Footer />
		</>
	)
}
