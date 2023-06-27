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
		<header className={`container-fluid mode-${mode} ` + (scrollY > windowHeight ? 'show' : '')}>
			<div className="container">
				<div className="row ">
					<div className="branding col-12 col-md-auto ">
						<Link href="/">
							<h1>
								Chris Silich
								<span>Creative Technologist</span>
							</h1>
						</Link>
					</div>
					<nav className="col-12 col-md-auto d-flex flex-grow-1 justify-content-evenly align-items-center">
						<Link href="/#home-portfolio-list">Projects</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/#home-contact">Contact</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}
