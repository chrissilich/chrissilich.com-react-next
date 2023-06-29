import { getPostArchive } from '@/services/blog'
import Link from 'next/link'

export default async function BlogRecent() {
	const posts = await getPostArchive()
	// reduce to the 3 most recent posts
	const recentPosts = posts.slice(0, 3)

	return (
		<section className="home-blog-recent">
			<h2 className="fat">Recent Blog Posts</h2>

			{recentPosts.map((post) => (
				<p key={post.id}>
					<Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link> &mdash;{' '}
					<em>Posted {new Date(post.date).toLocaleDateString()}</em>
				</p>
			))}
		</section>
	)
}
