import Link from 'next/link'

export default function HomeAbout() {
	return (
		<section id="home-about" className="text-block container-fluid">
			<div className="offset-1 col-10 offset-lg-2 col-lg-8">
				<h2>Who?</h2>
				<p>
					Chris is a talented and thoughtful software developer, graphic designer, and creative technologist,
					open to new opportunities.
				</p>
				<p>
					His tech skills are strongest in{' '}
					<Link href="https://vuejs.org/" target="_blank">
						Vue
					</Link>
					,{' '}
					<Link href="https://sass-lang.com/" target="_blank">
						SCSS
					</Link>
					, and{' '}
					<Link href="https://wordpress.org/" target="_blank">
						Wordpress
					</Link>
					, but he also has plenty of experience in{' '}
					<Link href="https://reactjs.org/" target="_blank">
						React
					</Link>
					,{' '}
					<Link href="https://greensock.com/gsap/" target="_blank">
						GSAP
					</Link>
					,{' '}
					<Link href="https://laravel.com/" target="_blank">
						Laravel
					</Link>
					,{' '}
					<Link href="https://unity.com/" target="_blank">
						Unity
					</Link>
					,{' '}
					<Link href="https://nodejs.org/en/" target="_blank">
						Node
					</Link>
					, and a lot of CSS and UI frameworks.
				</p>
				<p>
					He started his career in graphic design, UX/UI, and motion graphics, which makes him extremely
					detail-oriented, a bit of a perfectionist when it comes to executing a design and upholding a brand.
				</p>
				<p>
					He spent the last nine years in higher education at a portfolio school called the Creative Circus,
					as the director of the design and creative technology programs. This wealth of teaching experience
					makes him a very good communicator, team-member, and leader. At the same time, he freelanced in
					order to stay up-to-date with the industry (and pay the bills!).
				</p>
				<p>
					Chris is also a father, husband, friend, teacher, nerd, artist, technologist, and a bunch of other
					things.
				</p>
			</div>
		</section>
	)
}
