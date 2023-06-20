import { BlogPost } from '@/interfaces/blog'

export default function BlogArchive({ posts }: { posts: BlogPost[] }) {
	return (
		<section id="blog-archive" className="container">
			<h1>Blog Posts</h1>
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
	)
}
