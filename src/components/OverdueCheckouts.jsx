import { useEffect, useState } from "react"
import { getOverDueCheckouts } from "../data/checkoutData.js"
import { Table } from "reactstrap"

export default function OverDue()
{
    const[overDueCheckouts, setOverDueCheckouts]=useState([])

    useEffect(()=>{
        getOverDueCheckouts().then(setOverDueCheckouts)
    },[])
    return(
        <div className="container">
            <div className="sub-menu bg-light">
                <h2>Overdue Checkouts</h2>
            </div>
            <Table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>MaterialId</th>
                    <th>PatronId</th>
                    <th>Patron Name</th>
                    <th>CheckoutDate</th>
                    <th>Late Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {overDueCheckouts.map((o) => (
                        <tr key={`overdueCheckouts- ${o.id}`}>
                            <th>{o.id}</th>
                            <th>{o.materialId}</th>
                            <th>{o.patronId}</th>
                            <th>{o.patron.firstName}</th>
                            <th>{o.checkoutDate}</th>
                            <th>{o.lateFee}</th>
                            <th></th>


                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}