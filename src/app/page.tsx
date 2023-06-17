import Image from 'next/image'
import Intro from '@/components/home-intro'
import About from '@/components/home-about'
import Contact from '@/components/home-contact'

export default function Home() {
	return (
		<main>
			<Intro />

			<About />

			<a id="projects" name="projects"></a>
			{/* <PortfolioList></PortfolioList> */}

			<Contact />
		</main>
	)
}
