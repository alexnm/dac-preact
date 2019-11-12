import PropTypes from 'prop-types'

import styles from './component1.css'

const Component1 = (props) => {
  return (
    <div class={styles.container}>
      <img src="prop.src" class={styles.image} />
      <img
        src="https://images.unsplash.com/photo-1573382115255-2f139b5f79e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
        class={styles.image1}
      />
    </div>
  )
}

Component1.defaultProps = {
  src: 'https://play.teleporthq.io/static/img/default.png',
  src1: 'https://play.teleporthq.io/static/img/default.png',
}

Component1.propTypes = {
  src: PropTypes.string,
  src1: PropTypes.string,
}

export default Component1
