import { getProjectSingle } from '@/services/project'

export default async function ProjectSingle({ params }: { params: { slug: string } }) {
	const project = await getProjectSingle(params.slug)

	return (
		<main className="container">
			{project && (
				<>
					<h1>{project.title.rendered}</h1>
					<h2>
						{project.acf.client} | {project.acf.medium}
					</h2>
					<div dangerouslySetInnerHTML={{ __html: project.content.rendered }}></div>
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
