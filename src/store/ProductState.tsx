import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import axios from 'axios'

const  ProductState = create<any>()(
  devtools(
    persist(
      (set) => ({
        products:[],
        getProducts: async()=>{
            const response = await axios.get('https://dummyjson.com/products?skip=0&limit=200')
           console.log(response.data)
            // set ((state)=>({products: state.products.concat(response.data.products)}))
            // },
            set(state=>(
                {
                    products: state.products.concat(response.data.products)
                

                    
                }
            ))
        },
        delItem: (id)=>{
            console.log(id)
            set((state)=>({ products: state.products.filter(products=>products.id!==id)}))
        }
      
      }),
      { name: 'Products' },
    ),
  ),
)
export default ProductState;





// import axios from "axios";
// const useStore = create(set => ({
//   pokemons: [],
//   getPokemons: async ()=> {
//     const response = await axios.get('')
//     set({ pokemons: response.data })
//   }
// }))