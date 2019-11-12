import { Link } from 'preact-router/match'

import styles from './app-component.css'

const AppComponent = () => {
  return (
    <div class={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1572945688831-4f9f148906e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
        class={styles.image}
      />
      <img
        src="https://images.unsplash.com/photo-1572904445274-6ddee9318dc9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
        class={styles.image1}
      />
      <a href="#" target="_blank" class={styles.link}>
        Link
      </a>
      <p class={styles.textblock}>Here's a very very long paragraph</p>
      <Link href="/" class={styles.navlink}>
        Page
      </Link>
    </div>
  )
}

export default AppComponent
