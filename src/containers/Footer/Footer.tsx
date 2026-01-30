import { Facebook } from '../../assets/Facebook'
import { Instagram } from '../../assets/Instagram'
import { Twitter } from '../../assets/Twitter'
import { Logo } from '../../components/Logo/Logo'
import classes from './Footer.module.css'

export function Footer() {
  return (
    <footer>
      <section className={classes.footer}>
        <div>
          <Logo />
          <p className={classes.footer__rights}>
            © 2023 AniBase. Все права защищены.
          </p>
        </div>
        <div>
          <h3 className={classes.footer__title}>Navigation</h3>
          <nav>
            <ul className={classes.footer__menu_list}>
              <li className={classes.footer__menu_item}>Главная</li>
              <li className={classes.footer__menu_item}>Поиск</li>
              <li className={classes.footer__menu_item}>Избранное</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Connect</h3>
          <ul className={classes.footer__social_list}>
            <li className={classes.footer__social_item}>
              <Twitter />
            </li>
            <li className={classes.footer__social_item}>
              <Instagram />
            </li>
            <li className={classes.footer__social_item}>
              <Facebook />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
