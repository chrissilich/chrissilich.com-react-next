import { BlogPost } from '@/interfaces/blog'
import Link from 'next/link'

export default function BlogSidebar({ posts }: { posts: BlogPost[] }) {
	return (
		<aside className="col-12 col-md-4 pt-1 ps-5">
			<h2>More Blog Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
					</li>
				))}
			</ul>
		</aside>
	)
}
