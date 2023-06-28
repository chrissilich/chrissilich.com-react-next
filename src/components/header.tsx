'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({ mode = 'default' }: { mode?: string }) {
	const [scrollY, setScrollY] = useState(0)
	const [windowHeight, setWindowHeight] = useState(0)

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const handleResize = () => setWindowHeight(window.innerHeight)
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<header className={`mode-${mode} ` + (scrollY > windowHeight ? 'show' : '')}>
			<div className="branding">
				<Link href="/">
					<h1>
						Chris Silich
						<span>Creative Technologist</span>
					</h1>
				</Link>
			</div>
			<nav>
				<Link href="/#home-portfolio-list">Projects</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/#home-contact">Contact</Link>
			</nav>
		</header>
	)
}
