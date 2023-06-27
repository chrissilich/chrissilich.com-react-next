import Link from 'next/link'

export default function HomeContact() {
	return (
		<section id="home-contact" className="text-block container-fluid">
			<div className="offset-1 col-10 offset-lg-2 col-lg-8 row">
				<h2 className="mb-5">Contact</h2>
				<div className="col col-md-6">
					<h3>Résumé</h3>
					<p>
						<Link target="_blank" href="./pdf/resume-chris-silich-front-end-dev.pdf">
							Download/view PDF
						</Link>
					</p>
				</div>
				<div className="col col-md-6">
					<h3>Email</h3>
					<p>
						<Link target="_blank" href="mailto:chris.silich@gmail.com">
							chris.silich@gmail.com
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}
