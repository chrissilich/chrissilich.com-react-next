'use client'
import Image from 'next/image'
import { useRef, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function HomeIntro() {
	// Animation logic
	const nameElementRef = useRef<HTMLHeadingElement>(null)
	const jobTitleElementRef = useRef<HTMLHeadingElement>(null)
	const imageParentElementRef = useRef<HTMLDivElement>(null)
	const imageElementRef = useRef<HTMLImageElement>(null)

	useLayoutEffect(() => {
		if (typeof window === 'undefined') return

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			// skip all the animations
			gsap.set([nameElementRef.current, jobTitleElementRef.current, imageParentElementRef.current], {
				opacity: 1,
			})
			return
		}

		gsap.registerPlugin(SplitText)

		let splitH1 = new SplitText(nameElementRef.current, {
			type: 'chars',
		})

		let splitH2 = new SplitText(jobTitleElementRef.current, {
			type: 'chars',
		})
		gsap.from(splitH1.chars, {
			x: -10,
			y: '18vw',
			rotation: -90,
			transformOrigin: 'bottom left',
			duration: 0.75,
			stagger: { amount: 0.5, from: 'end' },
		})
		gsap.from(splitH2.chars, {
			x: -10,
			y: '10vw',
			delay: 0.5,
			rotation: -90,
			transformOrigin: 'bottom left',
			duration: 1.4,
			ease: 'power4.easeOut',
			stagger: { amount: 0.5, from: 'end' },
		})
		gsap.from(imageParentElementRef.current, {
			x: '-50%',
			y: 100,
			delay: 1,
			duration: 1.25,
			ease: 'power4.easeOut',
		})
		gsap.from(imageElementRef.current, {
			x: '110%',
			// y: 100,
			delay: 1,
			duration: 1.25,
			ease: 'power4.easeOut',
			// opacity: 0,
		})

		gsap.set([nameElementRef.current, jobTitleElementRef.current, imageParentElementRef.current], { opacity: 1 })
	}, [])

	return (
		<section className="home-intro">
			{/* <ParallaxProvider> */}
			{/* <Parallax speed={20}> */}
			<div ref={imageParentElementRef} className="home-intro-headshot overflow-hidden" style={{ opacity: 0 }}>
				<Image
					ref={imageElementRef}
					alt="Chris looking exceptionally thoughtful"
					src="/images/Chris-11.jpg"
					width={667}
					height={1000}
					className="img-fluid"
					priority
				/>
			</div>
			{/* </Parallax> */}
			{/* </ParallaxProvider> */}

			<div className="home-intro-text">
				<div className="overflow-hidden">
					<h1 style={{ opacity: 0 }} ref={nameElementRef}>
						Chris<em>Silich</em>
					</h1>
				</div>
				<div className="overflow-hidden">
					<h2 style={{ opacity: 0 }} ref={jobTitleElementRef}>
						Creative <em>Technologist</em>
					</h2>
				</div>
			</div>
		</section>
	)
}
