export default function HomeIntro() {
	return (
		<section id="hero" className="container-fluid row align-items-center">
			<div className="order-2 order-md-1 col-10 offset-1 offset-md-0 col-md-8 hero-text d-flex flex-column justify-content-end">
				<h1>
					Chris<em>Silich</em>
				</h1>
				<h2>
					Creative <em>Technologist</em>
				</h2>
			</div>
			<div className="order-1 order-md-2 offset-1 offset-md-0 col-10 col-md-4 hero-image">
				{/* <scroll-parallax direction="y" speed="-0.1"> */}
				<img className="img-fluid" src="/images/Chris-11.jpg" />
				{/* </scroll-parallax> */}
			</div>
		</section>
	)
}
