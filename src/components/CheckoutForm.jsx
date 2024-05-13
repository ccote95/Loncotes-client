import { useEffect, useState } from "react"
import { getMaterial } from "../data/materialsData.js"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Input } from "reactstrap"
import { submitNewCheckout } from "../data/checkoutData.js"

export default function CheckoutForm(){
    const[material,setMaterial]=useState({})
    const[givenPatronId, setGivenPatronId]=useState(0)
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        getMaterial(id).then(setMaterial)
    },[])

    const handleSubmitClick = () => {
        const newCheckout = {
            MaterialId: material.id,
            GenreId: material.genreId,
            PatronId: parseInt(givenPatronId)

        }
        submitNewCheckout(newCheckout).then(navigate(`/browse`))
    }
    return(
        <div className="container">
            <h2>Who's Checking out?</h2>
            <label>Patron Id</label>
            <Input type="text" placeholder="Enter a patron Id" onChange={(event) => {setGivenPatronId(event.target.value)}}/>
            <Button onClick={()=>{handleSubmitClick()}}>Submit</Button>
        </div>
    )
}