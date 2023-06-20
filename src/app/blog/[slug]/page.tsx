import Header from '@/components/header'
import Footer from '@/components/footer'

import { getPostSingle, getPostArchive } from '@/services/blog'

// import Image from 'next/image'
// import styles from '@/app/page.module.css'

export default async function BlogSingle({ params }: { params: { slug: string } }) {
	const post = await getPostSingle(params.slug)
	const posts = await getPostArchive()

	return (
		<>
			<Header />

			<section id="blog-single" className="container">
				{post && (
					<div className="row">
						<h1 className="pb-5">{post.title.rendered}</h1>
						<hr />
						<div className="col-12 col-md-8">
							<p>
								<em>Posted on {new Date(post.date).toLocaleDateString()}</em>
							</p>
							<div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
						</div>
						<aside className="col-12 col-md-4 pt-1 ps-5">
							<h2>More Blog Posts</h2>
							<ul>
								{posts.map((post) => (
									<li key={post.id}>
										<a href={`/blog/${post.slug}`}>{post.title.rendered}</a>
									</li>
								))}
							</ul>
						</aside>
					</div>
				)}
				{!post && (
					<>
						<h1>404</h1>
						<p>Post not found.</p>
					</>
				)}
				<a href="/blog">Back to Blog Archive</a>
			</section>

			<Footer />
		</>
	)
}
