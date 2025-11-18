import LeadForm from 'components/LeadForm'

// Страница "Оставить заявку": отдельный маршрут с формой
export default function RequestPage() {
  return (
    <section className='request'>
      {/* Заголовок страницы */}
      <h1 className='request__title'>Оставить заявку</h1>

      {/* Форма заявки */}
      <LeadForm />

      {/* Подсказка про обработку данных */}
      <div className='helper'>
        * Нажимая «Отправить заявку», вы соглашаетесь с политикой обработки персональных данных.
      </div>
    </section>
  )
}
