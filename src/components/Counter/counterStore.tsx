import { create } from 'zustand'

type CounterStoreState = {
  count: number,
  increment: () => void,
  decrement: () => void,
  incrementBy: (value: number) => void,
  decrementBy: (value: number) => void,
  username: string
}

export const useCounterStore = create<CounterStoreState>((set) => ({
  count: 0, // initial value of count
  increment: () => set((state) => ({ count: state.count + 1 })), // adds 1 to count state
  decrement: () => set((state) => ({ count: state.count - 1 })), // subtracts 1 from count state
  incrementBy: (value) => {
    set((state) => ({ count: state.count + value }))
  },
  decrementBy: (value) => {
    set((state) => ({ count: state.count - value }))
  },
  username: 'John Smith'
}))