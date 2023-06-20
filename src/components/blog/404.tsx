import { BlogPost } from '@/interfaces/blog'

export default function BlogSingle({ post }: { post: BlogPost }) {
	return (
		<>
			<h1>404</h1>
			<div className="col-12 col-md-8">
				<p>Post not found.</p>
			</div>
		</>
	)
}
