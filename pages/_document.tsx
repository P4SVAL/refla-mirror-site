import { Html, Head, Main, NextScript } from 'next/document'

// Кастомный документ для задания языковых атрибутов и метатегов
export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				{/* Мета-описание для поисковых систем */}
				<meta
					name='description'
					content='LOOKIN — установка зеркал на входные двери. Красиво, безопасно, быстро.'
				/>

				{/* Favicon в виде emoji-зеркала */}
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪞</text></svg>'
				/>
			</Head>
			<body>
				{/* Основной контент Next.js */}
				<Main />
				{/* Скрипты Next.js */}
				<NextScript />
			</body>
		</Html>
	)
}
