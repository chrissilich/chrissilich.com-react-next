import Header from '@/components/header'
import BlogSingle from '@/components/blog/single'
import Blog404 from '@/components/blog/404'
import BlogSidebar from '@/components/blog/sidebar'
import Background from '@/components/background'
import Footer from '@/components/footer'

import { getPostSingle, getPostArchive } from '@/services/blog'
import Link from 'next/link'

export default async function BlogSinglePage({ params }: { params: { slug: string } }) {
	const post = await getPostSingle(params.slug)
	const posts = await getPostArchive()

	return (
		<>
			<Header />

			<section className="blog-single">
				<div className="columns">
					{post && <BlogSingle post={post} />}
					{!post && <Blog404 />}
					<BlogSidebar posts={posts} />
				</div>
				<hr />
				<Link href="/blog">← Back to Blog Archive</Link>
			</section>

			<Background />

			<Footer />
		</>
	)
}
