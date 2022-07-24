import './PeopleInput.scss'

const PeopleInput = () => {
  return (
    <div className="people">
      <div className="people__title">
        Number of People<span className="error-title">Can’t be zero</span>
      </div>
      <div className="people__input-container" htmlFor="bill">
        <input className="people__input" name="bill" type="number" min="0" placeholder="0" />
        <img src="src/assets/img/CombinedShape.svg" alt="" className="people__input-icon" />
      </div>
    </div>
  )
}

export default PeopleInput
