import BillInput from './BillInput'
import TipInput from './TipInput'
import PeopleInput from './PeopleInput'

import './CalculatorField.scss'

const CalculatorField = () => {
  return (
    <div className="calculator-field">
      <BillInput />
      <TipInput />
      <PeopleInput />
    </div>
  )
}

export default CalculatorField
