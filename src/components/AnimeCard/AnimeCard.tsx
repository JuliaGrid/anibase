import animeCard from '../../assets/AnimeCard.png'
import { Calendar } from '../../assets/Calendar'
import { Star } from '../../assets/Star'
import classes from './AnimeCard.module.css'
import classNames from 'classnames'

interface IAnimeCard {
  src?: string
  title?: string
  year?: number
  score?: number
  isCarouselCard?: boolean
}

export function AnimeCard(props: IAnimeCard) {
  const { src, title, year, score, isCarouselCard } = props

  return (
    <div className={classes.animeCard}>
      <img src={src ?? animeCard} />
      <div
        className={classNames(classes.animeCard__wrapper, {
          noSwiping: isCarouselCard,
        })}
      >
        <h3>{title ? title : 'Title'}</h3>
        {/* <p className={classes.animeCard__description}>xvdsvsdf</p> */}
        <div className={classes.animeCard__mainInfo}>
          <div className={classes.animeCard__raiting}>
            <Star fill="#FACC15" width={16} height={16} />
            <p className={classes.animeCard__score}>{score ? score : 0}</p>
          </div>
          <p>{year ? year : 0}</p>
          {/* <Calendar fill="#308CE8" width={16} height={16} /> */}
        </div>
      </div>
    </div>
  )
}
