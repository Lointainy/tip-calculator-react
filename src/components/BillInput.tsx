/* Context */
import { useContextState } from '../hooks/Context'

/* Style */
import './BillInput.scss'

/* Types */
type Props = {
  bill: number | string
}

const BillInput: React.FC<Props> = ({ bill }) => {
  const { handleChange } = useContextState()
  return (
    <div className="bill">
      <h1 className="bill__title">
        Bill
        {bill == '' || bill == 0 ? <span className="error-title">Can’t be zero</span> : ''}
      </h1>
      <div className="bill__input-container" data-htmlfor="bill">
        <input
          value={bill}
          onChange={(event) => handleChange(event)}
          className={bill !== '' && bill == 0 ? 'bill__input error-input' : 'bill__input'}
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

export default BillInput
