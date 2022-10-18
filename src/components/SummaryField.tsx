/* Context */
import { useContextState } from '../hooks/Context'

/* Style */
import './SummaryField.scss'

const SummaryField = () => {
  const { state, handleReset } = useContextState()
  return (
    <div className="summary-field">
      <div className="summary-field__amount">
        <div className="summary-field__amount-heading">
          <div className="amount-title">Tip Amount</div>
          <div className="amount-subtitle">/ person</div>
        </div>
        <div className="summary-field__amount-number">${state.tipAmount.toFixed(1)}</div>
      </div>
      <div className="summary-field__total">
        <div className="summary-field__total-heading">
          <div className="total-title">Total</div>
          <div className="total-subtitle">/ person</div>
        </div>
        <div className="summary-field__total-number">${state.total.toFixed(1)}</div>
      </div>
      <button disabled={state.tipAmount <= 0 || state.total <= 0} onClick={handleReset} className="summary-field__btn">
        reset
      </button>
    </div>
  )
}

export default SummaryField
