import Link from 'next/link'

// Простой подвал сайта с копирайтом и быстрыми ссылками
export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className='footer'>
			<div className='container container-footer footer__inner'>
				{/* Копирайт */}
				<div>
					<b className='brand-text'>REFLA</b> – установка зеркал на входные
					двери, все права защищены created by vexel © {year} г.
				</div>

				{/* Быстрые ссылки */}
				<nav className='footer__nav' aria-label='Быстрые ссылки'>
					<Link href='/privacy/'>Политика конфиденциальности</Link>
				</nav>
			</div>
		</footer>
	)
}
