/* Store */
import { useContext } from 'react'
import { CustomContext } from '../hooks/Context'

/* Icons */
import peopleIcon from '../assets/img/CombinedShape.svg'

//style
import './PeopleInput.scss'

const PeopleInput = ({ people }) => {
  const { handleChange } = useContext(CustomContext)

  return (
    <div className="people">
      <div className="people__title">
        Number of People
        {people !== '' && people == 0 ? <span className="error-title">Can’t be zero</span> : ''}
      </div>
      <div className="people__input-container" htmlFor="bill">
        <input
          value={people}
          onChange={(event) => handleChange(event)}
          className={people !== '' && people == 0 ? 'people__input error-input' : 'people__input'}
          name="people"
          type="number"
          min="0"
          placeholder="0"
        />
        <img src={peopleIcon} alt="" className="people__input-icon" />
      </div>
    </div>
  )
}

export default PeopleInput
