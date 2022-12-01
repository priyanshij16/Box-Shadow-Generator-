
import { useState } from 'react';
import './App.css';
// box shadow generator app
function App() {
   const [Hori,setHori] = useState(10);
   const [Veri,setVeri] = useState(10);
   const [Blur,setBlur] = useState(10);
   const [Color,setColor] = useState("black");
   const [checkOn,setCheckOn]=useState(false);
   return (
    <div className="App">
    <h2> Box shadow generator App</h2>
   <div className='controls'>
   {/* add range */}
   <label>Horizontal Length </label>
   <input type="range" min="-200" max="200" value={Hori} onChange ={(e)=>setHori (e.target.value) }/>

    <label>Vertical Length </label>
   <input type="range" min="-200" max="200" value={Veri} onChange ={(e)=>setVeri (e.target.value) }/>

    <label>Blur</label>
   <input type="range" min="0" max="200" value={Blur} onChange ={(e)=>setBlur (e.target.value) }/>

   <label>Color</label>
      <input type="color"  value={Color} onChange ={(e)=>setColor (e.target.value) }/>

<div class ="switch">
<label> Outline
<input type="checkbox" checked={checkOn} onChange={ () => setCheckOn (!checkOn)} />
  <span className='lever'></span>
inset
</label>
</div>
   </div>

<div className='output'> 
   <div className='box' style={{ boxShadow: ` ${checkOn?"inset" :" "} ${Hori}px ${Veri}px ${Blur}px ${Color}` }}>
 <p> box-Shadow: {Hori} px {Veri}px  {Blur}px {Color}</p>
   </div>
   </div>
    </div>
  );
}

export default App;
