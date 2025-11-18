import LeadForm from 'components/LeadForm'

// Страница "Оставить заявку": отдельный маршрут с формой
export default function RequestPage() {
  return (
    <div>
      <section className='home home__grid'>
        {/* Заголовок страницы */}
        <div className='card about__section about__section--soft'>
          <h1 className='page-title'>Заявка без калькуляции</h1>
        </div>

        {/* Форма заявки */}
        <LeadForm />

        {/* Подсказка про обработку данных */}
        
      </section>
    </div>
  )
}
