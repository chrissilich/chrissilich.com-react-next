import { getProjectSingle } from '@/services/project'

export default async function ProjectSingle({ params }: { params: { slug: string } }) {
	const project = await getProjectSingle(params.slug)

	return (
		<main className="container">
			{project && (
				<>
					<nav className="container">
						<a href={'/#' + project.slug}>
							<span>←</span> Projects{' '}
						</a>
					</nav>

					<section className="container">
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
							<div
								className="content row"
								dangerouslySetInnerHTML={{ __html: project.content.rendered }}
							></div>
						</div>
					</section>
				</>
			)}

			{!project && (
				<>
					<h1>404</h1>
					<p>Project not found.</p>
				</>
			)}
			<a href="/projects">Back to Archive</a>
		</main>
	)
}
