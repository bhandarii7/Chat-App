import React,{useRef} from 'react'
import {Container,Form, FormControl,Button} from 'react-bootstrap'

import {v4 as uuidV4} from 'uuid';


function Login(props) {

    const idRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();

        props.onIdSubmit(idRef.current.value);
        
    }

    const createNewId = ()=>{
        props.onIdSubmit(uuidV4());
    }


    return (
        <Container className='align-items-center d-flex' style={{height:'100vh'}} >
            <Form onSubmit={handleSubmit} className='w-100' >
            <Form.Group className='mb-2'  >
                <Form.Label>Enter Your ID</Form.Label>
                <FormControl type='text' ref={idRef} ></FormControl>
            </Form.Group>
            <Button type="submit" className='me-2 ' >Login</Button>
            <Button onClick={createNewId} variant='secondary' >Create New ID</Button>
            </Form>
        </Container>
    )
}

export default Login;

