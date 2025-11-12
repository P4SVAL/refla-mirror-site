import type { Metadata } from 'next'
import { PricingClient } from './page-client'

export const metadata: Metadata = {
	title: 'REFLA – УСЛУГИ',
	description:
		'Услуги, калькулятор стоимости установки зеркал на входные двери. Прозрачная смета и быстрое оформление заявки.',
}

export default function PricingPage() {
	return <PricingClient />
}
