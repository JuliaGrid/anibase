import { Footer } from '../containers/Footer/Footer'
import { Header } from '../containers/Header/Header'
import classes from './styles.module.css'

export function Layout(props: any) {
  const { children } = props

  return (
    <div className={classes.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
