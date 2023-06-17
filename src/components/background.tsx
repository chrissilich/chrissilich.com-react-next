'use client'

import { useState, useEffect } from 'react'

export default function Background() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div
			className="background-grid-effect"
			style={{ backgroundPosition: scrollY * -0.1 + 'px ' + scrollY * 0.1 + 'px' }}
		></div>
	)
}
