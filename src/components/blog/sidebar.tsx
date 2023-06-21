import { BlogPost } from '@/interfaces/blog'

export default function BlogSidebar({ posts }: { posts: BlogPost[] }) {
	return (
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
	)
}
