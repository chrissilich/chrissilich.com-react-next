'use client'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function Footer() {
	return (
		<>
			<footer className="container">Copyright Chris Silich &copy; {new Date().getFullYear()}</footer>
			<GoogleAnalytics trackPageViews gaMeasurementId="G-M2FSQTTTVZ" />
		</>
	)
}
