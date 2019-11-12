import { Router } from 'preact-router'

import Page from '../routes/page/index'
import PageRenamed from '../routes/page-renamed/index'

const App = () => {
  return (
    <Router>
      <Page path="/" />
      <PageRenamed path="/page-renamed" />
    </Router>
  )
}

export default App
