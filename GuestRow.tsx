import Guest from "../models/Guest"
export default function GuestRow (item: Guest) {
    return (
        <table>
            <tr>
                <td>item.name</td>
                <td>item.dish</td>
            </tr>
        </table>
    )
}