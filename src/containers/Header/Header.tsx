import classes from './Header.module.css'
import { Logo } from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className={classes.menu}>
      <div>
        <nav>
          <ul className={classes.menu__list}>
            <li className={classes.menu__item}>
              <Logo />
            </li>
            <li className={classes.menu__item}>
              <Link to="/">Главная</Link>
            </li>
            <li className={classes.menu__item}>
              <Link to="/animeList">Список аниме</Link>
            </li>
            <li className={classes.menu__item}>Избранное</li>
          </ul>
        </nav>
      </div>

      <button></button>
    </header>
  )
}
