import { useEffect, useState } from "react";
import { deactivatePatron, getPatrons } from "../data/patronData.js";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function PatronList(){
    const [patrons, setPatrons] = useState([])
    useEffect(() => {
        getPatrons().then(setPatrons)
    },[])

  const handleDeactivateClick = (patronId) => {
        const deactivate = {
            isActive: false
        }
        deactivatePatron(deactivate,patronId)
    }
    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) => (
                      <tr key = {`patrons-${p.id}`}>
                            <th scope = "row">{p.id}</th>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.address}</td>
                            <td>{p.email}</td>
                            <td>{p.isActive.toString()}</td>
                            <td>
                                <Link to={`${p.id}`}>Details</Link>
                            </td>
                            <td>
                                {p.isActive ? (
                                    <Button color="warning" value={p.id} onClick={() => {handleDeactivateClick(p.id)}}>Deactivate</Button>

                                ): null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

}