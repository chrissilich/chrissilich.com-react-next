'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({ mode = 'default' }: { mode?: string }) {
	const [scrollY, setScrollY] = useState(0)
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY)
		window.addEventListener('scroll', handleScroll)
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<header className={`mode-${mode} ` + (scrollY > windowWidth * (9 / 16) ? 'show' : '')}>
			<div className="branding">
				<Link href="/">
					<h1>
						Chris Silich
						<span>Creative Technologist</span>
					</h1>
				</Link>
			</div>
			<nav>
				<Link href="/#portfolio">Projects</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/#contact">Contact</Link>
			</nav>
		</header>
	)
}