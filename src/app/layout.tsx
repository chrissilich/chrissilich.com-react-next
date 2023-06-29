import '@/scss/index.scss'

export const metadata = {
	title: 'Chris Silich',
	description: 'Creative Technologist Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Chris Silich – Creative Technologist Portfolio</title>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<a className="skip-to-content-link" href="#main-content">
					Skip to content
				</a>
				{children}
			</body>
		</html>
	)
}
