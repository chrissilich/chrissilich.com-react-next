import Link from 'next/link'

export default function HomeContact() {
	return (
		<section id="contact" className="home-contact">
			<div className="home-contact-content">
				<h2 className="shadow">Contact</h2>
				<div className="columns">
					<div>
						<h3>Résumé</h3>
						<p>
							<Link target="_blank" href="./pdf/resume-chris-silich.pdf">
								Download/view PDF
							</Link>
						</p>
					</div>
					<div>
						<h3>Email</h3>
						<p>
							<Link target="_blank" href="mailto:chris.silich@gmail.com">
								chris.silich@gmail.com
							</Link>
						</p>
					</div>
					<div>
						<h3>Phone</h3>
						<p>
							<Link target="_blank" href="tel:6788511069">
								(678) 851-1069
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
