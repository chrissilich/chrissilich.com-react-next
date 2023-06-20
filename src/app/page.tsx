import Header from '@/components/header'
import Intro from '@/components/home/intro'
import About from '@/components/home/about'
import PortfolioList from '@/components/home/portfolio-list'
import BlogRecent from '@/components/home/blog-recent'
import Contact from '@/components/home/contact'
import Footer from '@/components/footer'
import Background from '@/components/background'

import { getPostArchive } from '@/services/blog'

export default function Home() {
	return (
		<>
			<Header mode="home" />

			<Intro />

			<About />

			<PortfolioList />

			<BlogRecent />

			<Contact />

			<Footer />

			<Background />
		</>
	)
}
