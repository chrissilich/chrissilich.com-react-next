import Header from '@/components/header'
import Footer from '@/components/footer'
import Background from '@/components/background'
import { getWordpressPage } from '@/services/wordpress-page'

export default async function WordpressPage({ params }: { params: { slug: string } }) {
	const page = await getWordpressPage(params.slug)

	return (
		<>
			<Header />
			{page && (
				<>
					<pre>Wordpress Page (slug: {params.slug})</pre>
					<h1>{page.title.rendered}</h1>
					<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
				</>
			)}
			<Footer />
			<Background />
		</>
	)
}

// this all needs to be redone in blog post 4 AND in the blog branch
