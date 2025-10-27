// Страница «О нас» — с бейджами, цветными плашками и живыми элементами
export default function About() {
	// «Цифры и факты»
	const stats = [
		{ label: 'Выполненных установок', value: '450 +' },
		{ label: 'Средний срок монтажа', value: '2–3 часа' },
		{ label: 'Гарантия', value: '12 месяцев' },
		{ label: 'Оценка клиентов', value: '4.8 / 5' },
	]

	// «Как мы работаем»
	const steps: Array<[string, string]> = [
		[
			'Заявка и консультация',
			'Обсуждаем задачу, отвечаем на вопросы, подбираем решения.',
		],
		[
			'Бесплатный замер',
			'Приезжаем в удобное время, учитываем геометрию и фурнитуру двери.',
		],
		[
			'Подбор материалов',
			'Зеркало (включая тонированные варианты), кромка, крепления, фурнитура.',
		],
		[
			'Аккуратный монтаж',
			'Чисто и быстро, бережно относимся к отделке и мебели.',
		],
		[
			'Проверка и рекомендации',
			'Проверяем крепление, даём рекомендации по уходу.',
		],
		['Гарантия', 'Предоставляем гарантию на монтаж и материалы.'],
	]

	// «Отзывы»
	const reviews = [
		{
			name: 'Алексей, Санкт-Петербург',
			text: 'Сделали аккуратно и за один день. Визуально прихожая стала просторнее — отлично!',
		},
		{
			name: 'Екатерина, Санкт-Петербург',
			text: 'Помогли выбрать оттенок и кромку, всё смотрится дорого и минималистично. Рекомендую.',
		},
		{
			name: 'Ирина, Санкт-Петербург',
			text: 'Очень чистый монтаж, без суеты и лишних вопросов. Приятно удивили вниманием к деталям.',
		},
		{
			name: 'Дмитрий, Санкт-Петербург',
			text: 'Отличный сервис — от консультации до монтажа. Всё чётко, вежливо, и без лишних хлопот.',
		},
		{
			name: 'Марина, Колпино',
			text: 'Замерщик приехал в тот же день, всё подробно рассказал. Монтаж аккуратный, зеркало как будто всегда было на двери.',
		},
		{
			name: 'Андрей, Гатчина',
			text: 'Заказ выполнили быстро, результат превзошёл ожидания. Теперь прихожая светлая и просторная — очень доволен.',
		},
		{
			name: 'Светлана, Санкт-Петербург',
			text: 'Подобрали идеальный оттенок зеркала под интерьер, всё выглядит очень гармонично. Спасибо за аккуратность!',
		},
		{
			name: 'Игорь, Всеволожск',
			text: 'Работа выполнена качественно и в срок. Видно, что мастера знают своё дело и ценят клиента.',
		},
	]

	return (
		<article className='card about'>
			{/* Заголовок + вводный блок с бейджами */}
			<header className='about__header'>
				<div className='about__headline'>
					<h1 className='about__title'>О нас</h1>
					<div className='about__badges'>
						<span className='about-badge about-badge--trust'>Надёжно</span>
						<span className='about-badge about-badge--clean'>
							Чистый монтаж
						</span>
						<span className='about-badge about-badge--safe'>Безопасно</span>
					</div>
				</div>
				<p className='about__text'>
					<b className='brand-text'>REFLA</b> — команда мастеров, которая
					превращает входную дверь в элегантную и функциональную деталь
					интерьера. Мы работаем с разными типами полотен и покрытий, подбираем
					безопасные крепёжные решения и учитываем особенности вашего
					пространства.
				</p>
				<div className='about__chips'>
					<span className='chip'>Замер бесплатно в СПБ</span>
					<span className='chip'>Точные сроки</span>
					<span className='chip'>Гарантия 12 месяцев</span>
				</div>
			</header>

			{/* Миссия и ценности — с мягкой плашкой */}
			<section className='card about__section about__section--soft'>
				<h2 className='about__section-title title-font'>Миссия и ценности</h2>
				<p className='about__text'>
					Наша миссия — сделать прихожую каждого дома стильной, удобной и
					безопасной. Мы ценим качество, честность и индивидуальный подход.
				</p>
				<div className='about__values'>
					<span className='pill pill--accent'>Аккуратность</span>
					<span className='pill pill--accent2'>Ответственность</span>
					<span className='pill pill--muted'>Открытая смета</span>
				</div>
			</section>

			{/* Цифры и факты — карточки с лентами */}
			<section className='card about__section'>
				<h2 className='about__section-title title-font'>Цифры и факты</h2>
				<div className='grid'>
					{stats.map((s, i) => (
						<div key={i} className='card about__stat about-ribbon'>
							<div className='about__stat-value title-font'>{s.value}</div>
							<div className='about__stat-label'>{s.label}</div>
							{/* декоративная ленточка */}
							<span className='about-ribbon__stripe' aria-hidden />
						</div>
					))}
				</div>
			</section>

			{/* Как мы работаем — «дорожка» шагов */}
			<section className='card about__section'>
				<h2 className='about__section-title title-font'>Как мы работаем</h2>
				<ol className='about-steps'>
					{steps.map(([title, text], i) => (
						<li key={i} className='about-step card'>
							<div className='about-step__head'>
								<span className='about-step__num'>{i + 1}</span>
								<div className='about-step__title title-font'>{title}</div>
							</div>
							<div className='about-step__text'>{text}</div>
						</li>
					))}
				</ol>
			</section>

			{/* Материалы и безопасность — со «галочками» */}
			<section className='card about__section'>
				<h2 className='about__section-title title-font'>
					Материалы и безопасность
				</h2>
				<ul className='about__list about-list'>
					<li>
						Закалённое и тонированное стекло, полировка или фацетная кромка.
					</li>
					<li>
						Надёжные крепления с учётом геометрии двери и расположения
						фурнитуры.
					</li>
					<li>Рекомендации по уходу и безопасной эксплуатации.</li>
				</ul>
			</section>

			{/* Команда / ценности — мини-карточки с акцентной кромкой */}
			<section className='card about__section'>
				<h2 className='about__section-title title-font'>Команда</h2>
				<div className='about__team'>
					<p className='about__text'>
						В нашей команде — мастера со стекольным, мебельным и отделочным
						опытом. Мы ценим аккуратность, работаем с ювелирной точностью и
						внимательно относимся к деталям.
					</p>

					<div className='grid'>
						{['Аккуратность', 'Опыт', 'Коммуникация', 'Безопасность'].map(
							(val, i) => (
								<div key={i} className='card about__value about-card'>
									<div className='about-card__edge' aria-hidden />
									<div className='title-font'>{val}</div>
									<div className='about__text'>
										{val === 'Аккуратность' &&
											'Чистый монтаж без пыли и лишнего шума. Бережно относимся к отделке и мебели.'}
										{val === 'Опыт' &&
											'Работаем с закалённым и тонированным стеклом, фацетом и разными типами полотен.'}
										{val === 'Коммуникация' &&
											'Объясняем варианты, согласуем дизайн и сроки, держим связь на каждом этапе.'}
										{val === 'Безопасность' &&
											'Подбираем надёжные крепления с учётом геометрии двери и расположения фурнитуры.'}
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>

			{/* Отзывы — карточки с цитатной кавычкой */}
			<section className='card about__section'>
				<h2 className='about__section-title title-font'>Отзывы клиентов</h2>
				<div className='grid'>
					{reviews.map((r, i) => (
						<blockquote key={i} className='card about__review about-quote'>
							<p className='about__review-text'>«{r.text}»</p>
							<cite className='about__review-author title-font'>{r.name}</cite>
						</blockquote>
					))}
				</div>
			</section>

			{/* Финальный CTA */}
			<section className='card about__cta'>
				<div>
					<div className='about__cta-title title-font'>
						Готовы обсудить проект?
					</div>
					<div className='about__cta-subtitle'>
						Оставьте заявку — мы предложим оптимальное решение под вашу дверь и
						интерьер.
					</div>
				</div>
				<a className='button' href='/request/'>
					Оставить заявку
				</a>
			</section>
		</article>
	)
}
