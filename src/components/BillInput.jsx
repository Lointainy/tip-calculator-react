import './BillInput.scss'

const BillInput = () => {
  return (
    <div className="bill">
      <h1 className="bill__title">
        Bill <span className="error-title">Can’t be zero</span>
      </h1>
      <div className="bill__input-container" htmlFor="bill">
        <input
        className="bill__input"
        name="bill"
        type="number"
        min="0"
        placeholder="0" />
        <span className="bill__input-icon">$</span>
      </div>
    </div>
  )
}

export default BillInput
