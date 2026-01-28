import classes from './MainInfo.module.css'
import Selection from '../../assets/Selection.jpg'

export function MainInfo() {
  return (
    <section className={classes.mainInfo}>
      <img src={Selection} className={classes.mainInfo__img} />
      <div>
        <h1 className={classes.mainInfo__title}>Добро пожаловать в AniBase!</h1>
        <article className={classes.mainInfo__description}>
          AniBase — ваш всеобъемлющий путеводитель по миру аниме. Откройте для
          себя новые сериалы, следите за популярными релизами и управляйте своим
          списком избранного с легкостью. Мы используем Jikan API для
          предоставления актуальных данных.
        </article>
        <div className={classes.mainInfo__buttons}>
          <button className={classes.mainInfo__button_list}>
            Список аниме
          </button>
          <button className={classes.mainInfo__button_favorite}>
            Избранное
          </button>
        </div>
      </div>
    </section>
  )
}
