import Header from '@/components/header'
import BlogArchive from '@/components/blog/archive'
import Background from '@/components/background'
import Footer from '@/components/footer'

import { getPostArchive } from '@/services/blog'

export const metadata = {
	title: 'Blog - Chris Silich',
	description: 'Creative Technologist Portfolio',
}

export default async function BlogArchivePage() {
	const posts = await getPostArchive()

	return (
		<>
			<Header />

			<BlogArchive posts={posts} />

			<Background />

			<Footer />
		</>
	)
}
