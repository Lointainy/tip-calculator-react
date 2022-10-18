import { createContext, useEffect, useState } from 'react'

export const CustomContext = createContext()

export const Context = ({ children }) => {
  const [state, setState] = useState({
    bill: '',
    tip: '',
    people: '',
    tipAmount: 0,
    total: 0,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleReset = () => {
    setState({
      ...state,
      bill: '',
      tip: '',
      people: '',
      tipAmount: 0,
      total: 0,
    })
  }

  console.log(state.bill)

  const tipResult = useEffect(() => {
    let x = (state.bill * (state.tip / 100)) / state.people
    setState({
      ...state,
      tipAmount: x > 0 && x != Infinity ? x : 0,
    })
  }, [state.bill, state.tip, state.people])

  const totalResult = useEffect(() => {
    let x = state.bill / state.people + state.tipAmount
    setState({
      ...state,
      total: x > 0 && x != Infinity ? x : 0,
    })
  }, [state.tipAmount])

  const value = {
    state,
    setState,
    handleChange,
    handleReset,
  }

  return <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
}
