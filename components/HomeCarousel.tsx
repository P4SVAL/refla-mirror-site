// components/HomeCarousel.tsx
import * as React from 'react'
import Link from 'next/link'
import { GALLERY_ITEMS } from './Gallery' // ⬅️ берём общие данные

export default function HomeCarousel() {
  // Берём первые 5 работ (можешь поменять количество)
  const SLIDES = React.useMemo(() => GALLERY_ITEMS.slice(0, 5), [])

  const [index, setIndex] = React.useState(0)
  const trackRef = React.useRef<HTMLDivElement>(null)

  const len = SLIDES.length
  const clamp = (i: number) => (i + len) % len
  const go = (i: number) => setIndex(clamp(i))
  const prev = () => go(index - 1)
  const next = () => go(index + 1)

  // Клавиатура
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  // Тач-свайпы
  React.useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let startX = 0
    let diff = 0
    let dragging = false

    const onTouchStart = (e: TouchEvent) => {
      dragging = true
      startX = e.touches[0].clientX
      diff = 0
      el.style.transition = 'none'
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return
      diff = e.touches[0].clientX - startX
      const width = el.clientWidth
      const offset = -index * width + diff
      el.style.transform = `translateX(${offset}px)`
    }
    const onTouchEnd = () => {
      dragging = false
      el.style.transition = ''
      const width = el.clientWidth
      if (Math.abs(diff) > width * 0.15) diff < 0 ? next() : prev()
      else {
        el.style.transform = ''
        el.getBoundingClientRect() // reflow
        el.style.transform = `translateX(${-index * 100}%)`
      }
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [index])

  // Синхронизация transform
  React.useEffect(() => {
    const el = trackRef.current
    if (el) el.style.transform = `translateX(${-index * 100}%)`
  }, [index])

  return (
    <section className='card home-carousel' aria-label='Примеры работ'>
      <div className='home-carousel__viewport'>
        <div className='home-carousel__track' ref={trackRef}>
          {SLIDES.map((s, i) => (
            <figure className='home-carousel__slide' key={i} aria-hidden={i !== index}>
              <img
                className='home-carousel__img'
                src={s.image}
                alt={s.title}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding='async'
              />
              <figcaption className='home-carousel__caption'>
                <div className='home-carousel__caption-title title-font'>{s.title}</div>
                <div className='home-carousel__caption-text muted'>{s.description}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Стрелки */}
        <button
          className='home-carousel__nav home-carousel__nav--prev'
          onClick={prev}
          aria-label='Предыдущая работа'
        >
          ‹
        </button>
        <button
          className='home-carousel__nav home-carousel__nav--next'
          onClick={next}
          aria-label='Следующая работа'
        >
          ›
        </button>
      </div>

      {/* Точки */}
      <div className='home-carousel__dots' role='tablist' aria-label='Слайды'>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role='tab'
            aria-selected={i === index}
            aria-label={`Слайд ${i + 1}`}
            className={`home-carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      {/* Ссылка на полную галерею */}
      <div className='home-carousel__more'>
        <Link href='/examples/'>
          <span className='button button--outline'>Смотреть все примеры</span>
        </Link>
      </div>
    </section>
  )
}
