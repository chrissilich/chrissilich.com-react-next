import Header from '@/components/header'
import Background from '@/components/background'
import Footer from '@/components/footer'

import { getPostArchive } from '@/services/blog'

// import Image from 'next/image'
// import styles from '@/app/page.module.css'

export default async function BlogArchive() {
	const posts = await getPostArchive()

	return (
		<>
			<Header />

			<section id="blog-archive" className="container">
				<h1>Blog</h1>
				<ul>
					{posts.map((post) => (
						<li>
							<h4>{post.title.rendered}</h4>
							<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
							<a href={'/blog/' + post.slug}>Read Post</a>
						</li>
					))}
				</ul>
			</section>

			<Background />

			<Footer />
		</>
	)
}
