import React, { useState , useContext ,useEffect}  from 'react';
import {Link , useParams,useNavigate} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
}from 'reactstrap';

export const EditUser = (props) => {
    const {id} = useParams()
    const Navigate = useNavigate();
    console.log(id)
    const [selectedUser , setSelectedUser] = useState({
        id: '',
        name: ''
    })
    const {users,editUser } = useContext(GlobalContext);
    
 
    useEffect(() =>{
        const userId = id;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [id,users])

const onSubmit = () =>{
   editUser(selectedUser)
   Navigate('/', {replace: true})
}

const onChangeHandle = (e) =>{
  setSelectedUser({...selectedUser , [e.target.name] : e.target.value} )
}

    return (
        // <h1>kfakshdf</h1>
        <Form onSubmit={onSubmit}>
        <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" 
        value={selectedUser.name} 
        onChange={onChangeHandle} 
        placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit"> Edit Name</Button>
        <Link to="/" className='btn btn-danger ml-2'> cancel </Link>

        </Form>
    )
}
