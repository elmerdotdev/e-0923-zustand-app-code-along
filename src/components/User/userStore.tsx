import { create } from 'zustand'

type UserStoreState = {
  firstname: string,
  setFirstname: (newName: string) => void,
  lastname: string,
  age: number
}

export const useUserStore = create<UserStoreState>((set) => ({
  firstname: "Jane",
  setFirstname: (newName) => set(() => ({ firstname: newName })),
  lastname: "Doe",
  age: 24
}))