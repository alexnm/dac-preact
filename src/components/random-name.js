import styles from './random-name.css'

const RandomName = () => {
  return (
    <div class={styles['random-name']}>
      <h1 class={styles.heading1}>Heading Level 1</h1>
      <svg viewBox="0 0 1024 1024" height="24" width="24" fill="#f2f2f2">
        <path d="M682 384h172v470h-172v-470zM170 854v-342h172v342h-172zM426 854v-684h172v684h-172z"></path>
      </svg>
    </div>
  )
}

export default RandomName
