import { Link } from 'preact-router/match'
import Helmet from 'react-helmet'

import RandomName from '../../components/random-name'
import styles from './style.css'

const Page = () => {
  return (
    <div class={styles.page}>
      <Helmet>
        <title>dac</title>
      </Helmet>
      <RandomName></RandomName>
      <Link href="/page-renamed" class={styles.navlink}>
        Go there
      </Link>
      <div class={styles.container}>
        <h1 class={styles.heading1}>Heading Level 1</h1>
        <p class={styles.textblock}>Paragraph</p>
      </div>
      <div class={styles.container1}></div>
    </div>
  )
}

export default Page
