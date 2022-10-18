/* Context */
import ContextProvider from './hooks/Context'

/* Page */
import { MainPage } from './Page/MainPage'

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="App">
        <MainPage />
      </div>
    </ContextProvider>
  )
}
