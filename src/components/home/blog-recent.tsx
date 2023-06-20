import { getPostArchive } from '@/services/blog'

export default async function BlogRecent() {
	const posts = await getPostArchive()
	// reduce to the 3 most recent posts
	const recentPosts = posts.slice(0, 3)

	return (
		<section id="home-blog-recent" className="container py-5">
			<h2 className="fat">Recent Blog Posts</h2>
			{recentPosts.map((post) => (
				<div key={post.id} className="row py-3">
					<div className="col-12 col-md-10 offset-md-1 ">
						<p>
							<a href={`/blog/${post.slug}`}>{post.title.rendered}</a> &mdash;{' '}
							<em>Posted on {new Date(post.date).toLocaleDateString()}</em>
						</p>
					</div>
				</div>
			))}
		</section>
	)
}
