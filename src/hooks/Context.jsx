import { useState, createContext, useEffect } from 'react'

export const CustomContext = createContext()

export const Context = (props) => {
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

  const tipResult = useEffect(() => {
    if (state.bill !== '' && state.tip !== '' && state.people !== '' && state.bill / state.tip !== Infinity) {
      setState({
        ...state,
        tipAmount: (state.bill * (state.tip / 100)) / state.people,
      })
    } else
      setState({
        ...state,
        tipAmount: 0,
      })
  }, [state.bill, state.tip, state.people])

  const totalResult = useEffect(() => {
    if (state.bill !== '' && state.tip !== '' && state.people !== '' && state.bill / state.tip !== Infinity) {
      setState({
        ...state,
        total: state.bill / state.people + state.tipAmount,
      })
    } else
      setState({
        ...state,
        total: 0,
      })
  }, [state.tipAmount])

  const value = {
    state,
    setState,
    handleChange,
    handleReset,
  }

  return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>
}
