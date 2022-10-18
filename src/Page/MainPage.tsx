/* Components */
import { CalculatorField, SummaryField } from '@/components/'

/* Style */
import './MainPage.scss'

export const MainPage = () => {
  return (
    <div className="main">
      <div className="logo">
        spli
        <br />
        tter
      </div>
      <div className="main-content">
        <CalculatorField />
        <SummaryField />
      </div>
    </div>
  )
}
