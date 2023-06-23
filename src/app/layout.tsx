import '@/scss/index.scss'
import Footer from '@/components/footer'

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
					href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				{children}

				{/* Todo: add Google Analytics */}
			</body>
		</html>
	)
}
