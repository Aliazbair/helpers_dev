import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar/>

      <div className={styles.container}>
        <main className={styles.main}>
          {/* <Header /> */}
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
