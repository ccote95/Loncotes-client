import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { editPatron, getPatron } from "../data/patronData.js";

export default function PatronForm(){
    const {id}=useParams()
    const [patron,setPatron]=useState()
    

    useEffect(() => {
        getPatron(id).then(setPatron)
    },[])

 const handleSubmit = (e) => {
   e.preventDefault()
    const updatePatron = {
        email: patron.email,
        address: patron.address
    };
    setPatron(updatePatron)
    editPatron(patron.id, updatePatron)
 }

    return(
        <div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input name="email" value={patron?.email} onChange={(e) => {
                            const patronCopy = {...patron};
                            patronCopy.email = e.target.value;
                            setPatron(patronCopy);
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Address</Label>
                        <Input name = "address" value={patron?.address} onChange={(e) => {
                            const patronCopy = {...patron};
                            patronCopy.address = e.target.value;
                            setPatron(patronCopy)
                        }}/>
                    </FormGroup>
                    <div>
                        <Button type ="submit" color = "success">Save</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}