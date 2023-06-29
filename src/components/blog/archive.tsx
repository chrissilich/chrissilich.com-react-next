import { BlogPost } from '@/interfaces/blog'
import Link from 'next/link'

export default function BlogArchive({ posts }: { posts: BlogPost[] }) {
	return (
		<section className="blog-archive">
			<h1 className="shadow">Blog Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<h3>{post.title.rendered}</h3>
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
						<Link href={'/blog/' + post.slug} className="expand-clickable-area">
							Read Post
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}