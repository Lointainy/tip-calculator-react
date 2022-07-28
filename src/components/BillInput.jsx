import { useContext } from 'react'
import { CustomContext } from '../hooks/Context'
//style
import './BillInput.scss'

export const BillInput = ({ bill }) => {
  const { handleChange } = useContext(CustomContext)
  return (
    <div className="bill">
      <h1 className="bill__title">
        Bill
        {bill == 0 ? <span className="error-title">Can’t be zero</span> : ''}
      </h1>
      <div className="bill__input-container" htmlFor="bill">
        <input
          value={bill}
          onChange={(event) => handleChange(event)}
          className={bill == 0 ? 'bill__input error-input' : 'bill__input'}
          name="bill"
          type="number"
          min="0"
          placeholder="0"
        />
        <span className="bill__input-icon">$</span>
      </div>
    </div>
  )
}
