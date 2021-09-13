import GuestForm from "./GuestForm"
import { useState } from "react"
import Guest from "../models/Guest"
import GuestRow from "./GuestRow"

export default function () {
    const [guestList, setGuestList] = useState<Guest[]> ([{name: "anu", dish: "pizza"}, {name: "bob", dish: "burger"}])

    function onSubmit (guest: Guest) {
        // copy then modify
        let copiedGuestList = [...guestList]; 
        copiedGuestList.push(guest); 
        setGuestList(copiedGuestList); 
    }

    function clearList () {
        setGuestList([]); 
    }

    return (
        <div className = "GuestList">
            <h1>PotLuck App</h1>
            <button onClick = {clearList}>clear list</button>
            <GuestForm onSubmit = {onSubmit}/>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>brining</td>
                    </tr>
                </thead>
                <tbody>
                    {guestList.map((item,index)=> <GuestRow key={index} name = {item.name} dish={item.dish}/>)}
                </tbody>

            </table>
        </div>
    )
}