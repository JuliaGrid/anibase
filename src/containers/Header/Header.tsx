import classNames from 'classnames'
import { Star } from '../../assets/Star'
import classes from './Header.module.css'
import { Logo } from '../../components/Logo/Logo'

export function Header() {
  return (
    <header className={classes.menu}>
      <div>
        <nav>
          <ul className={classes.menu__list}>
            <li className={classes.menu__item}>
              <Logo />
            </li>
            <li className={classes.menu__item}>Главная</li>
            <li className={classes.menu__item}>Поиск</li>
            <li className={classes.menu__item}>Избранное</li>
          </ul>
        </nav>
      </div>

      <button></button>
    </header>
  )
}
