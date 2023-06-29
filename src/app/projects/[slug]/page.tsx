import { getProjectSingle } from '@/services/project'

import Header from '@/components/header'
import ProjectSingle from '@/components/project/single'
import Project404 from '@/components/project/404'
import Background from '@/components/background'
import Footer from '@/components/footer'

export const metadata = {
	title: 'Project - Chris Silich',
	description: 'Creative Technologist Portfolio',
}

export default async function ProjectSinglePage({ params }: { params: { slug: string } }) {
	const project = await getProjectSingle(params.slug)

	metadata.title = project?.title.rendered + ' - Project - Chris Silich' || 'Project - Chris Silich'

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
