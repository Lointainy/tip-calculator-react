/* Store */
import { Context } from './hooks/Context'

/* Page */
import { MainPage } from './Page/MainPage'

export const App = () => {
  return (
    <Context>
      <div className="App">
        <MainPage />
      </div>
    </Context>
  )
}
