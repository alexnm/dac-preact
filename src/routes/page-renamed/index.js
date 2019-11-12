import Helmet from 'react-helmet'

import Component from '../../components/component'
import RandomName from '../../components/random-name'
import styles from './style.css'

const PageRenamed = () => {
  return (
    <div class={styles.container}>
      <Helmet>
        <title>dac</title>
      </Helmet>
      <Component headingle="What the hell?"></Component>
      <RandomName></RandomName>
      <img
        src="https://images.unsplash.com/photo-1571942662090-0d81d067ca19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
        class={styles.image}
      />
    </div>
  )
}

export default PageRenamed
