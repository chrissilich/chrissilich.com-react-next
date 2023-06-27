import { BlogPost } from '@/interfaces/blog'
import Link from 'next/link'

export default function BlogArchive({ posts }: { posts: BlogPost[] }) {
	return (
		<section id="blog-archive" className="container">
			<h1>Blog Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<h4>{post.title.rendered}</h4>
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
						<Link href={'/blog/' + post.slug}>Read Post</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
