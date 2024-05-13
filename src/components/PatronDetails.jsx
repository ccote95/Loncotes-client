import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatron } from "../data/patronData.js";
import { Button, Table } from "reactstrap";

export default function PatronDetails(){
    const {id} = useParams();
    const navigate = useNavigate()
    const [patron,setPatron] = useState(null)

    useEffect(() => {
        getPatron(id).then(setPatron);
    },[])

    if(!patron)
        {
            return null;
        }

        const handleEditClick = (patronId) => {
            navigate(`/patrons/${patronId}/edit`)
        }
    return (
        <div className="container">
            <h2>Patron Details</h2>
            <Table>
                <tbody>
                    <tr>
                        <th scope ="row">First Name</th>
                        <td>{patron.firstName}</td>
                    </tr>
                    <tr>
                    <th scope = "row">Last Name</th>
                    <td>{patron.lastName}</td>
                    </tr>
                    <tr>
                        <th scope = "row">Address</th>
                        <td>{patron.address}</td>
                    </tr>
                    <tr>
                        <th scope = "row">Email</th>
                        <td>{patron.email}</td>
                    </tr>
                    <tr>
                        <th scope = "row">Active Status</th>
                        <td>{patron.isActive.toString()}</td>
                    </tr>
                    <tr>
                        <th scope = "row">Balance</th>
                        <td>{patron.balance}</td>
                    </tr>
                    <Button color="primary" size="sm" onClick={() => handleEditClick(patron.id)} >Edit</Button>
                </tbody>
            </Table>
        </div>
    )
}