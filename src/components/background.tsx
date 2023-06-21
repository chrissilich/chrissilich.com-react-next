'use client'

import { useState, useEffect } from 'react'

export default function Background() {
	const [scrollY, setScrollY] = useState(0)

	// check for prefers reduced motion
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
	const multiplier = prefersReducedMotion ? 0 : 0.1

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div
			className="background-grid-effect"
			style={{ backgroundPosition: scrollY * -multiplier + 'px ' + scrollY * multiplier + 'px' }}
		></div>
	)
}
