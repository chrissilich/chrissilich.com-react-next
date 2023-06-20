import { BlogPost } from '@/interfaces/blog'

export default function BlogSingle({ post }: { post: BlogPost }) {
	return (
		<>
			<h1 className="pb-5">{post.title.rendered}</h1>
			<hr />
			<div className="col-12 col-md-8">
				<p>
					<em>Posted on {new Date(post.date).toLocaleDateString()}</em>
				</p>
				<div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
			</div>
		</>
	)
}
