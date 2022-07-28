import { useContext } from 'react'
import { CustomContext } from '../hooks/Context'
//style
import './PeopleInput.scss'

export const PeopleInput = ({ people }) => {
  const { handleChange } = useContext(CustomContext)

  return (
    <div className="people">
      <div className="people__title">
        Number of People
        {people == 0 ? <span className="error-title">Can’t be zero</span> : ''}
      </div>
      <div className="people__input-container" htmlFor="bill">
        <input
          value={people}
          onChange={(event) => handleChange(event)}
          className="people__input"
          name="people"
          type="number"
          min="0"
          placeholder="0"
        />
        <img src="src/assets/img/CombinedShape.svg" alt="" className="people__input-icon" />
      </div>
    </div>
  )
}
