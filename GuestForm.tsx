import {useState} from "react"; 
import Guest from "../models/Guest";
interface Props {
    onSubmit: (guest: Guest) => void 
}

export default function GuestForm () {
    const [name, setName] = useState<string>(""); 
    const [dish, setDish] = useState<string>(""); 

    return (
          <form className="GuestForm" onSubmit = {(event) => {
              event.preventDefault(); 
              onSubmit({name, dish}); 
              setName("")
              setDish("")
              document.querySelectorAll("input").forEach(input => input.value = ""); 
              document.querySelector("input")?.focus(); 
          }}>
              <label htmlFor="name">Name</label>
              <input required placeholder="name" name="name" id="name" onChange= {(event) => {
                  setName(event.target.value)}}/>
               <label htmlFor="dish">Bringing</label>
               <input required placeholder="dish" name="dish" id="name" onChange= {(event) => {
                  setDish(event.target.value)}}/>
                <input type="submit" />

          </form>  
    )

}
    
//     return (
//         <form className="GuestForm" onSubmit={(event)=>{
//             event.preventDefault(); // don't refresh
//             onsubmit?({name, dish})
//             // clearing the inputs
//             setName("");
//             setDish("");
//             document.querySelectorAll("input").forEach(input => input.value = "");
//             // focus on the first input again. my preference
//             document.querySelector("input")?.focus();
//         }}>
//             <label htmlFor="name">Name</label>
//             <input required placeholder="name" name="name" id="name" onChange={(event) => {
//                 setName(event.target.value);
//             }}/>
//             <label htmlFor="dish">Bringing</label>
//             <input required placeholder="dish" name="dish" id="dish" onChange={(event) => {
//                 setDish(event.target.value);
//             }}/>
//             <input type="submit"/>
//         </form>
//     )
// }