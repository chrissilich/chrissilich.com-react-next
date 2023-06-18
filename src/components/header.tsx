'use client'
import { useEffect, useState } from 'react'

export default function Header({ mode = 'default' }: { mode: string }) {
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
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<header className={`container-fluid mode-${mode} ` + (scrollY > windowHeight ? 'show' : '')}>
			<div className="container">
				<div className="row ">
					<div className="col">
						<a href="/">
							<h1>Chris Silich</h1>
							<h2>Creative Technologist</h2>
						</a>
					</div>
					<nav className="col d-flex justify-content-evenly">
						<a href="/#projects">Projects</a>
						<a href="/blog">Blog</a>
						<a href="/#contact">Contact</a>
					</nav>
				</div>
			</div>
		</header>
	)
}
