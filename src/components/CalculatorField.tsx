/* Store */
import { useContext } from 'react'
import { CustomContext } from '../hooks/Context'

/* Components */
import { BillInput, PeopleInput, TipInput } from './'

/* Style */
import './CalculatorField.scss'

const CalculatorField = () => {
  const { state } = useContext(CustomContext)
  return (
    <div className="calculator-field">
      <BillInput bill={state.bill} />
      <TipInput tip={state.tip} />
      <PeopleInput people={state.people} />
    </div>
  )
}

export default CalculatorField
