import { Footer } from '../../containers/Footer/Footer'
import { Header } from '../../containers/Header/Header'
import { SearchPanel } from '../../containers/SearchPanel/SearchPanel'
import { Layout } from '../layout'

export function AnimeList() {
  return (
    <>
      {/* <Header />
      <main>
        <SearchPanel />
      </main>
      <Footer /> */}
      <Layout>
        <SearchPanel />
      </Layout>
    </>
  )
}
