import React from 'react';
// import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import{
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { useContext } from 'react';

export const UserList = () => {
    // const {users, removeUser} = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4">
              <ListGroupItem className='d-flex'>
                  <strong> User One </strong>
          <div className='ml-auto'>
              <Link className='btn btn-warning mr-1' to={'/edit/${user.id}'}>Edit</Link>
              <Button color='danger' className='margin_btn'>Delete</Button>
          </div>
          </ListGroupItem>  
    
        

        
        

    </ListGroup>
  )
}