type stateType = {
  bill: number
  tip: number
  people: number
  tipAmount: number
  total: number
}

export type ContextType = {
  state: stateType
  setState: React.Dispatch<React.SetStateAction<stateType>>
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleReset: () => void
}
