import Header from '@/components/header'
import Footer from '@/components/footer'

import { getPostSingle } from '@/services/blog'

// import Image from 'next/image'
// import styles from '@/app/page.module.css'

export default async function BlogSingle({ params }: { params: { slug: string } }) {
	const post = await getPostSingle(params.slug)

	return (
		<>
			<Header />
			<main className="container">
				{post && (
					<>
						<h1>{post.title.rendered}</h1>
						<h2>Posted on {new Date(post.date).toLocaleDateString()}</h2>
						<div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
					</>
				)}
				{!post && (
					<>
						<h1>404</h1>
						<p>Post not found.</p>
					</>
				)}
				<a href="/blog">Back to Archive</a>
			</main>
			<Footer />
		</>
	)
}
