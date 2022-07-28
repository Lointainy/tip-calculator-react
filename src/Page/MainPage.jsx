import { CalculatorField } from '@/components/CalculatorField'
import { SummaryField } from '@/components/SummaryField'
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
