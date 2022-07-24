import './TipInput.scss'

const TipInput = () => {
  return (
    <div className="tip">
      <div className="tip__title">Select Tip %</div>
      <div className="tip__list">
        <div className="tip__list-item">
          <input className="tip__item-radio" type="radio" name="tip-percentage" />
          <label className="tip__item-title">1%</label>
        </div>
        <div className="tip__list-item">
          <input className="tip__item-input" type="number" placeholder="custom" min="0" />
        </div>
      </div>
    </div>
  )
}

export default TipInput
