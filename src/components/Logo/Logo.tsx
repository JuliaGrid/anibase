import { Link } from 'react-router-dom'
import { Star } from '../../assets/Star'
import classes from './Logo.module.css'

export function Logo() {
  return (
    <Link to="/">
      <div className={classes.logo}>
        <div className={classes.logo__container}>
          <Star fill="white" />
        </div>
        <a>AniBase</a>
      </div>
    </Link>
  )
}
