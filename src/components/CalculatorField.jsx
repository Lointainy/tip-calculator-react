import { useContext } from 'react'
import { CustomContext } from '../hooks/Context'

//components
import { BillInput } from './BillInput'
import { TipInput } from './TipInput'
import { PeopleInput } from './PeopleInput'

//style
import './CalculatorField.scss'

export const CalculatorField = () => {
  const { state } = useContext(CustomContext)
  return (
    <div className="calculator-field">
      <BillInput bill={state.bill} />
      <TipInput tip={state.tip} />
      <PeopleInput people={state.people} />
    </div>
  )
}
