import React, { createContext, useEffect, useState } from 'react'

/* Types */
import { ContextType } from '@/types/context.type'

type ContextProviderProps = {
  children: React.ReactNode
}

const Context = createContext<ContextType>({} as ContextType)

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [state, setState] = useState({
    bill: 0,
    tip: 0,
    people: 0,
    tipAmount: 0,
    total: 0,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleReset = () => {
    setState({
      ...state,
      bill: 0,
      tip: 0,
      people: 0,
      tipAmount: 0,
      total: 0,
    })
  }

  useEffect(() => {
    let x: number = Number((state.bill * (state.tip / 100)) / state.people)
    setState({
      ...state,
      tipAmount: x > 0 && x != Infinity ? x : 0,
    })
  }, [state.bill, state.tip, state.people])

  useEffect(() => {
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

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider
export const useContextState = () => React.useContext(Context)
