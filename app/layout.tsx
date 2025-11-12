import type { Metadata } from 'next'
import 'app/globals.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { brandFont, bodyFont } from 'styles/fonts'

export const metadata: Metadata = {
	title: 'REFLA – ОТРАЖЕНИЕ В ВАШ ДОМ',
	description:
		'REFLA — установка зеркал на входные двери. Красиво, безопасно, быстро.',
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{
				url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪞</text></svg>",
			},
		],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={`${brandFont.variable} ${bodyFont.variable}`}>
				<Header />
				<main className='container app-main'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
