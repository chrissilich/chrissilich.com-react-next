import { BlogPost } from '@/interfaces/blog'

export default function BlogSingle({ post }: { post: BlogPost }) {
	return (
		<article id="main-content">
			<h1>{post.title.rendered}</h1>
			<hr />
			<div className="gutenberg-content">
				<p>
					<em>Posted on {new Date(post.date).toLocaleDateString()}</em>
				</p>
				<div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
			</div>
		</article>
	)
}
