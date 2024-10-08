
import BearStore from './store/BearStore'
import ProductState from './store/ProductState';

function App() {
  const {products,getProducts,delItem}=ProductState();
  const {bears,increase,dec}= BearStore();
 console.log(products)
 return (<div className="main">
         {products  .map((item,idx)=>{
          return(
            <span>
              {idx}
            <li onClick={()=>{delItem(item.id)}}>{item.title}</li>
          </span>
          )
         })}
          <div className="content">some text
          <h1>{bears}</h1>
          <button onClick={increase}> +1</button>
          <button onClick={dec}> -1</button>
          <button onClick={getProducts}>get</button>
      
          </div>
          
  </div>
  )
  
}

export default App
