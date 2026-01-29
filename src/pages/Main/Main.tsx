import { AnimeCarousel } from '../../containers/AnimeCarousel/AnimeCarousel'
import { Header } from '../../containers/Header/Header'
import { MainInfo } from '../../containers/MainInfo/MainInfo'
import classes from './Main.module.css'

export function Main() {
  return (
    <>
      <Header />
      <main>
        <MainInfo />
        <div className={classes.animeCarousel}>
          <AnimeCarousel
            title="Популярное аниме"
            description="Откройте для себя аниме, которое сейчас захватывает мир! Эти сериалы имеют самые высокие рейтинги и отзывы от фанатов со всего мира."
            buttonText="Посмотреть все"
          />
        </div>
      </main>
    </>
  )
}
