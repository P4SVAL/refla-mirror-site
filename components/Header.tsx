import Link from 'next/link'
import { useState, useEffect } from 'react'

// Компонент шапки сайта с логотипом, основной навигацией и бургер-меню
export default function Header() {
	const [open, setOpen] = useState(false)

	// При ресайзе окна — закрывать меню на десктопе
	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth > 860) setOpen(false)
		}
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])

	return (
		<header className='header'>
			<div className='container header-inner'>
				{/* Логотип/название компании (шрифт Myanmar MN) */}
				<Link href='/' className='header-logo'>
					<span className='brand'>REFLA</span>
					<span className='tagline'>ОТРАЖЕНИЕ В ВАШ ДОМ</span>
				</Link>

				{/* Основная навигация для десктопа */}
				<nav className='nav' aria-label='Главная навигация'>
					<Link href='/about/'>О нас</Link>
					{/* <Link href='/examples/'>Примеры работ</Link> */}
					<Link href='/pricing/'>Прайс-лист (смета)</Link>
					<Link href='/contacts/'>Контакты</Link>
				</nav>

				{/* Кнопка бургера для мобильной версии */}
				<button
					className='burger'
					aria-label='Меню'
					onClick={() => setOpen(!open)}
				>
					<svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
						<rect x='3' y='6' width='18' height='2' rx='1' fill='#1F2937' />
						<rect x='3' y='11' width='18' height='2' rx='1' fill='#1F2937' />
						<rect x='3' y='16' width='18' height='2' rx='1' fill='#1F2937' />
					</svg>
				</button>
			</div>

			{/* Выпадающее мобильное меню */}
			<div className={`mobile-menu ${open ? 'open' : ''}`}>
				<div className='container'>
					<Link href='/about/' onClick={() => setOpen(false)}>
						О нас
					</Link>
					{/* <Link href='/examples/' onClick={() => setOpen(false)}>
						Примеры работ
					</Link> */}
					<Link href='/pricing/' onClick={() => setOpen(false)}>
						Прайс-лист (смета)
					</Link>
					<Link href='/contacts/' onClick={() => setOpen(false)}>
						Контакты
					</Link>
					<Link href='/request/' onClick={() => setOpen(false)}>
						<span className='button mobile-button'>Оставить заявку</span>
					</Link>
				</div>
			</div>
		</header>
	)
}
