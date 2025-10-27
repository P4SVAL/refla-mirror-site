// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { brandFont, bodyFont } from '../styles/fonts'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div
			className={`${brandFont.variable} ${bodyFont.variable}`}
			style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', width: '100%' }}
		>
			<Header />
			<main className='container app-main'>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	)
}
