import { AnimeCarousel } from '../../containers/AnimeCarousel/AnimeCarousel'
import { Footer } from '../../containers/Footer/Footer'
import { Header } from '../../containers/Header/Header'
import { MainInfo } from '../../containers/MainInfo/MainInfo'
import { Layout } from '../layout'
import classes from './Main.module.css'

export function Main() {
  return (
    <>
      {/* <Header />
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
      <Footer /> */}
      <Layout>
        <div className={classes.home__wrapper}>
          <MainInfo />
          <div className={classes.animeCarousel}>
            <AnimeCarousel
              title="Популярное аниме"
              description="Откройте для себя аниме, которое сейчас захватывает мир! Эти сериалы имеют самые высокие рейтинги и отзывы от фанатов со всего мира."
              buttonText="Посмотреть все"
            />
          </div>
        </div>
      </Layout>
    </>
  )
}
