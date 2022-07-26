/* Context */
import { useContextState } from '../hooks/Context'

/* Style */
import './TipInput.scss'

/* Types */
type Props = {
  tip: number | string
}
const TipInput: React.FC<Props> = ({ tip }) => {
  const { handleChange } = useContextState()
  const percentage: number[] = [5, 10, 15, 25, 50]

  return (
    <div className="tip">
      <div className="tip__title">Select Tip %</div>
      <div className="tip__list">
        {percentage.map((percentageValue, index) => {
          return (
            <div key={index} className="tip__list-item">
              <input
                className="tip__item-radio"
                type="radio"
                name="tip"
                id={`radio-percentage-${percentageValue}`}
                value={percentageValue}
                checked={tip === percentageValue}
                onChange={(event) => handleChange(event)}
              />
              <label htmlFor={`radio-percentage-${percentageValue}`} className="tip__item-title">
                {percentageValue}%
              </label>
            </div>
          )
        })}

        <div className="tip__list-item">
          <input
            value={tip}
            onChange={(event) => handleChange(event)}
            className="tip__item-input"
            name="tip"
            type="number"
            placeholder="custom"
            min="0"
          />
        </div>
      </div>
    </div>
  )
}

export default TipInput
