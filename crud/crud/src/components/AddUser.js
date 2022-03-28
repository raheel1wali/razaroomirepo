import React, {useState ,useContext} from 'react';
import {Link,useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
}from 'reactstrap';


export const AddUser = () => {
    const [name,setName ] = useState("");
    const  { addUser } = useContext(GlobalContext);
    const Navigate = useNavigate();

const onSubmit = (e) =>{
    e.preventDefault()
    

    const newUser = {
        id: uuid(),
        name
    }
    addUser(newUser);
    Navigate('/', {replace: true})

}

const onChangeHandle = (e) =>{

    setName(e.target.value);
    
    // return
}

    return (
        // console.log(name),
        <Form onSubmit={onSubmit}>
        <FormGroup>
        <Label>Name</Label>
        <Input type="text"
         value={name}
        //  onChange={(e) => setName(e.target.value)}
          onChange={onChangeHandle} 
        //   placeholder="Enter Name"
          ></Input>
        </FormGroup>
        <Button type="submit"> Submit</Button>
        <Link to="/" className='btn btn-danger ml-2'> cancel </Link>

        </Form>
    )
}
