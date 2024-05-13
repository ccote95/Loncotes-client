import { useEffect, useState } from "react"
import { getAvailableMaterial } from "../data/materialsData.js"
import { Button, Table } from "reactstrap"
import { useNavigate } from "react-router-dom"

export default function AvailableMaterials (){
const[materials,setMaterials]=useState([])
const navigate = useNavigate()
useEffect(()=>{
    getAvailableMaterial().then(setMaterials)
},[])

const handleCheckoutClick = (materialId) => {
navigate(`/browse/${materialId}`)
}

    return(
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Browse Available Materials</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {materials.map((m) => (
                        <tr key={`materials-${m.id}`}>
                            <th scope="row">{m.id}</th>
                            <td>{m.materialName}</td>
                            <td><Button onClick={()=>{handleCheckoutClick(m.id)}}>Checkout</Button></td>
                            <td></td>
                            <td></td>

                        </tr>
                        
                    ))}
                </tbody>
            </Table>
        </div>
    )
}