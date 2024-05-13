import { useEffect, useState } from "react";
import { getCheckouts, returnACheckout } from "../data/checkoutData.js";
import { Button, Table } from "reactstrap";

export default function CheckoutList(){
    const[checkouts, setCheckouts]=useState([])

    useEffect(() => {
        getCheckouts().then(setCheckouts)
    },[])
    const handleReturn = (id) => {
        returnACheckout(id).then(() => {getCheckouts().then(setCheckouts)})
    }

    return(
        <div className="container">
            <h2>Checkouts</h2>
            <Table>
                <thead>
                    <tr>

                    <th>Id</th>
                    <th>MaterialId</th>
                    <th>PatronId</th>
                    <th>Checkout Date</th>
                    <th>Return Date</th>
                    <tr></tr>
                  
                    </tr>

                </thead>
                <tbody>
                    {checkouts.map((c) => (
                    <tr key={`checkouts-${c.id}`}>
                        <th scope="row">{c.id}</th>
                        <td>{c.materialId}</td>
                        <td>{c.patronId}</td>
                        <td>{c.checkoutDate}</td>
                        <td>
                            {c.returnDate == null ? (
                                <Button onClick={() => {handleReturn(c.id)}}>Return</Button>
                            ): c.returnDate}
                        </td>

                        
                    </tr>

                    ))}
                </tbody>
            </Table>
        </div>
    )
}