import Header from '@/components/header'
import Intro from '@/components/home/intro'
import About from '@/components/home/about'
import PortfolioList from '@/components/home/portfolio-list'
import Contact from '@/components/home/contact'
import Footer from '@/components/footer'
import Background from '@/components/background'

export default function Home() {
	return (
		<>
			<Header mode="home" />

			<Intro />

			<About />

			<PortfolioList />

			<Contact />

			<Footer />

			<Background />
		</>
	)
}
