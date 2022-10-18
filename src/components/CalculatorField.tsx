/* Context */
import { useContextState } from '../hooks/Context'

/* Components */
import { BillInput, PeopleInput, TipInput } from './'

/* Style */
import './CalculatorField.scss'

const CalculatorField: React.FC = () => {
  const {
    state: { bill, tip, people },
  } = useContextState()

  return (
    <div className="calculator-field">
      <BillInput bill={bill} />
      <TipInput tip={tip} />
      <PeopleInput people={people} />
    </div>
  )
}

export default CalculatorField
