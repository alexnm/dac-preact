import styles from './margin.css'

const Margin = () => {
  return (
    <div class={styles.container}>
      <h1 class={styles.heading1}>Test Diffing</h1>
      <button class={styles.button}>Button</button>
      <button disabled="true" class={styles.button1}>
        Does this really work?
      </button>
    </div>
  )
}

export default Margin
