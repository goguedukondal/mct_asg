import React from 'react'

const Navbar = (props) => {
   
    const setColor = props.value1.setColor;
    const setAccess=props.value2.setAccess;
     const access=props.value2.access;
    const setFontSize=props.value3.setFontSize;
    const setFontStyle=props.value4.setFontStyle;
 //console.log(props.value1.color);
  return (
    <div className='navcontainer'>
        <select className={access==="Edit Not Allowed"?("button1"):("button")} onClick={(e)=>setAccess(e.target.value)}>
            <option>Edit Allowed</option>
            <option>Edit Not Allowed</option>
        </select>

        <select className={access==="Edit Not Allowed"?("button1"):("button")} onClick={(e)=>setColor(e.target.value)}>
            <option style={{backgroundColor:"Black",color:"white"}}>Black</option>
            <option style={{backgroundColor:"Blue",color:"white"}}>Blue</option>
            <option style={{backgroundColor:"Green",color:"white"}}>Green</option>
        </select>
 
        <select className={access==="Edit Not Allowed"?("button1"):("button")} onClick={(e)=>setFontSize(e.target.value)}>
            <option>16</option>
            <option>14</option>
            <option>12</option>
            <option>18</option>
            <option>20</option>
            <option>22</option>
            <option>6</option>
            <option>8</option>
            <option>2</option>
            <option>10</option>
            <option>11</option>
           
        </select>

        <select className={access==="Edit Not Allowed"?("button1"):("button")} onClick={(e)=>setFontStyle(e.target.value)}>
            <option>Arial</option>
            <option>Roboto Mono</option>
            <option>Monospace</option>
            
        </select>
 
    </div>
  )
}

export default Navbar