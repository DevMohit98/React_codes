import React, { useState } from "react"
import "./App.css"
import Values from 'values.js'
import SingleColor from "./Component/SingleColor"
 const App=()=>{
   const [color,setColor]=useState("");
   const [error,setError]=useState(false)
   const [list,setlist]=useState([]);
   const handleSubmit=(e)=>{
    e.preventDefault();
    try{
      let colors=new Values(color).all(10)
      console.log(colors);
      setlist(colors);
    }
    catch(error ){
      setError(error)
      console.log(error)
    }
   }
   return(
     <>
<section className="container">
  <h3>Color generator</h3>
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="#f15025"
    value={color}
    onChange={(e)=>setColor(e.target.value)}
    className={`${error ?'error': null}`}
    >
    </input>
    <button type="submit" className="btn">submit</button>

  </form>
</section>
<section className="colors">
  {list.map((color,index)=>{
     console.log(color);
    return(   
<SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
    )
  })}

</section>
     </>
   )
 }
 export default App