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
			</head>
			<body>
				{children}
				{/* Todo: add Google Analytics */}
			</body>
		</html>
	)
}
