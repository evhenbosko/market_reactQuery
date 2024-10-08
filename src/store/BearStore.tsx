import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: ()=> void
  dec:()=>void
}

const  BearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 25,
        increase: () => set((state) => ({ bears: state.bears + 1 })),
        dec:()=>set((state)=>({bears:state.bears-1}))
      }),
      { name: 'bearStore' },
    ),
  ),
)
export default BearStore;