import { BlogPost } from '@/interfaces/blog'

export default function BlogSingle({ post }: { post: BlogPost }) {
	return (
		<article id="main-content">
			<h1>{post.title.rendered}</h1>
			<hr />
			<div className="gutenberg-content">
				<p>
					<em>
						Posted{' '}
						{new Date(post.date).toLocaleString('en-US', {
							weekday: 'long',
							day: 'numeric',
							year: 'numeric',
							month: 'long',
						})}
					</em>
				</p>
				<div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
			</div>
		</article>
	)
}
