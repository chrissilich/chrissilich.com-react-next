'use client'

import { useState, useEffect } from 'react'

export default function Background() {
	const [scrollY, setScrollY] = useState(0)
	const [multiplier, setMultiplier] = useState(0.1)

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setMultiplier(0)
			return
		}

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
