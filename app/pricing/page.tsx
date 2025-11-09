import type { Metadata } from 'next'
import { PricingClient } from './page-client'

export const metadata: Metadata = {
	title: 'REFLA – ПРАЙС',
	description:
		'Калькулятор стоимости установки зеркал на входные двери. Прозрачная смета и быстрое оформление заявки.',
}

export default function PricingPage() {
	return (
		<main className='pricing-page'>
			<h1 className='visually-hidden'>Прайс и калькулятор стоимости</h1>
			<PricingClient />
		</main>
	)
}
