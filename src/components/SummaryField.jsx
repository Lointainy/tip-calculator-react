import './SummaryField.scss'

const SummaryField = () => {
  return (
    <div className="summary-field">
      <div className="summary-field__amount">
        <div className="summary-field__amount-heading">
          <div className="amount-title">Tip Amount</div>
          <div className="amount-subtitle">/ person</div>
        </div>
        <div className="summary-field__amount-number">$0.0</div>
      </div>
      <div className="summary-field__total">
        <div className="summary-field__total-heading">
          <div className="total-title">Total</div>
          <div className="total-subtitle">/ person</div>
        </div>
        <div className="summary-field__total-number">$0.0</div>
      </div>
      <button className="summary-field__btn">reset</button>
    </div>
  )
}

export default SummaryField
