import Image from 'next/image'
import Intro from '@/components/home/intro'
import About from '@/components/home/about'
import PortfolioList from '@/components/home/portfolio-list'
import Contact from '@/components/home/contact'
import Background from '@/components/background'

export default function Home() {
	return (
		<>
			<Intro />

			<About />

			<PortfolioList />

			<Contact />

			<Background />
		</>
	)
}
