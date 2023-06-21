import Header from '@/components/header'
import BlogSingle from '@/components/blog/single'
import Blog404 from '@/components/blog/404'
import BlogSidebar from '@/components/blog/sidebar'
import Background from '@/components/background'
import Footer from '@/components/footer'

import { getPostSingle, getPostArchive } from '@/services/blog'

export default async function BlogSinglePage({ params }: { params: { slug: string } }) {
	const post = await getPostSingle(params.slug)
	const posts = await getPostArchive()

	return (
		<>
			<Header />

			<section id="blog-single" className="container">
				<div className="row">
					{post && <BlogSingle post={post} />}
					{!post && <Blog404 />}
					<BlogSidebar posts={posts} />
				</div>

				<a href="/blog">Back to Blog Archive</a>
			</section>

			<Background />

			<Footer />
		</>
	)
}
