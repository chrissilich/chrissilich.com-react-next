import { getProjectSingle } from '@/services/project'

import Header from '@/components/header'
import ProjectSingle from '@/components/project/single'
import Project404 from '@/components/project/404'
import Background from '@/components/background'
import Footer from '@/components/footer'

export default async function ProjectSinglePage({ params }: { params: { slug: string } }) {
	const project = await getProjectSingle(params.slug)

	return (
		<>
			<Header />

			{project && <ProjectSingle project={project} />}
			{!project && <Project404 />}

			<Background />
			<Footer />
		</>
	)
}
