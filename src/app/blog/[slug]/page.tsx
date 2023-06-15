import { getPostSingle } from '@/services/blog'

// import Image from 'next/image'
// import styles from '@/app/page.module.css'

export default async function BlogSingle({ params }: { params: { slug: string } }) {
	console.log('slug', params.slug)
	const post = await getPostSingle(params.slug)

	return (
		<>
			{post && (
				<main>
					<h1>Blog Single</h1>
					<p>{post.title.rendered}</p>
					<p>{post.content.rendered}</p>
				</main>
			)}
			{!post && (
				<main>
					<h1>Blog Single</h1>
					<p>Post not found.</p>
				</main>
			)}
		</>
	)
}
