import { useMemo, useState } from 'react'

const API_ENDPOINT = 'https://refla.ru/api/lead.php' // ваш prod API
const SECRET = 'REFLA_FORM_2025' // должен совпадать с SITE_FORM_SECRET в api/lead.php

export default function LeadForm() {
	const [name, setName] = useState('')
	const [contact, setContact] = useState('')
	const [address, setAddress] = useState('')
	const [comment, setComment] = useState('')

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [hp, setHp] = useState('') // honeypot

	const contactValid = useMemo(() => {
		const v = contact.trim()
		if (!v) return false
		const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
		const isPhone = /^[+0-9()\-\s]{6,}$/.test(v)
		return isEmail || isPhone
	}, [contact])

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setSuccess(null)
		setError(null)

		if (!name.trim() || !contactValid || !address.trim()) {
			setError('Проверьте имя, контакт (телефон/e-mail) и адрес.')
			return
		}
		if (hp.trim()) {
			setError('Ошибка отправки.')
			return
		}

		setLoading(true)
		const controller = new AbortController()
		const t = setTimeout(() => controller.abort(), 15000)

		try {
			const resp = await fetch(API_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					secret: SECRET,
					name: name.trim(),
					contact: contact.trim(),
					address: address.trim(),
					comment: comment.trim(),
				}),
				signal: controller.signal,
			})
			const data = await resp.json().catch(() => null)

			if (resp.ok && data?.ok) {
				setSuccess('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
				setName('')
				setContact('')
				setAddress('')
				setComment('')
			} else {
				setError(
					data?.error || `Ошибка отправки (${resp.status}). Попробуйте позже.`
				)
			}
		} catch (err: any) {
			setError(
				err?.name === 'AbortError' ? 'Таймаут запроса.' : 'Сетевая ошибка.'
			)
		} finally {
			clearTimeout(t)
			setLoading(false)
		}
	}

	return (
		<form onSubmit={onSubmit} className='card leadform' noValidate>
			{/* honeypot */}
			<div
				style={{
					position: 'absolute',
					left: -9999,
					width: 1,
					height: 1,
					overflow: 'hidden',
				}}
			>
				<label>
					Не заполняйте это поле
					<input
						tabIndex={-1}
						autoComplete='off'
						value={hp}
						onChange={e => setHp(e.target.value)}
					/>
				</label>
			</div>

			<div className='leadform-grid'>
				<div>
					<label className='label' htmlFor='name'>
						Ваше имя *
					</label>
					<input
						className='input'
						id='name'
						required
						placeholder='Иван'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>

				<div>
					<label className='label' htmlFor='contact'>
						Контакт (телефон или e-mail) *
					</label>
					<input
						className='input'
						id='contact'
						required
						placeholder='+7 900 000-00-00'
						value={contact}
						onChange={e => setContact(e.target.value)}
					/>
					{!contactValid && contact.trim() !== '' && (
						<div className='error' style={{ marginTop: 6 }}>
							Укажите телефон или e-mail.
						</div>
					)}
					<div className='helper'>
						Мы используем контакт только для связи по заявке.
					</div>
				</div>

				<div>
					<label className='label' htmlFor='address'>
						Адрес установки *
					</label>
					<input
						className='input'
						id='address'
						required
						placeholder='г. Санкт-Петербург, ул. Пример, д. 1'
						value={address}
						onChange={e => setAddress(e.target.value)}
					/>
				</div>

				<div>
					<label className='label' htmlFor='comment'>
						Комментарий (необязательно)
					</label>
					<textarea
						className='textarea'
						id='comment'
						rows={4}
						placeholder='Опишите пожелания...'
						value={comment}
						onChange={e => setComment(e.target.value)}
					/>
				</div>

				<div className='leadform-actions'>
					<button className='button' type='submit' disabled={loading}>
						{loading ? 'Отправка...' : 'Отправить заявку'}
					</button>
					<a
						className='button telegram-button'
						href='https://t.me/refla_bot?start=lead'
						target='_blank'
						rel='noreferrer'
					>
						Оформить заявку в Telegram
					</a>
				</div>

				{success && <div className='success'>{success}</div>}
				{error && <div className='error'>{error}</div>}
			</div>
		</form>
	)
}