import { getPostArchive } from '@/services/blog'
import Link from 'next/link'

export default async function BlogArchive() {
	const posts = await getPostArchive()

	return (
		<main className="container">
			<h1>Blog Archive</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						{post.title.rendered}
						<Link href={'/blog/' + post.slug}>Read Post</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
