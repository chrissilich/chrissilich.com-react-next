import { getPostArchive } from '@/services/blog'

// import Image from 'next/image'
// import styles from '@/app/page.module.css'

export default async function BlogArchive() {
	const posts = await getPostArchive()

	return (
		<main>
			<h1>Blog Archive</h1>
			<ul>
				{posts.map((post) => (
					<li>
						{post.title.rendered}
						<a href={'/blog/' + post.slug}>Read More</a>
					</li>
				))}
			</ul>
		</main>
	)
}
