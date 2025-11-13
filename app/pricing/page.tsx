import type { Metadata } from 'next'
import { PricingClient } from './page-client'

export const metadata: Metadata = {
	title: 'REFLA – УСЛУГИ',
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

export default function PricingPage() {
	return <PricingClient />
}
