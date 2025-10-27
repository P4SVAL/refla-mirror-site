// styles/fonts.ts
import localFont from 'next/font/local'

// Бренд/заголовки (Display Serif)
export const brandFont = localFont({
	src: [
		{
			path: '../public/fonts/dm-serif-display-v16-latin-regular.woff2',
			weight: '400',
			style: 'normal',
		}
	],
	variable: '--font-brand',
	display: 'swap',
	preload: true,
})

// Тело текста (Palatino-альтернатива)
export const bodyFont = localFont({
	src: [
		{
			path: '../public/fonts/TeXGyrePagella-Regular.woff2',
			weight: '400',
			style: 'normal',
		}
	],
	variable: '--font-body',
	display: 'swap',
	preload: true,
})
