import React, { useEffect } from 'react'
import './LoginScreen.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import MainScreen from '../../components/Mainscreen'
import axios from 'axios';
export const LoginScreen = ({history}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    useEffect(() => {
        const userInfo=localStorage.getItem("userInfo");
        if(userInfo){
            history.push("/mynotes")
        }
    },[history])
    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const config={
                headers:{
                    "Content-type":"application/json"
                }
            };
            setLoading(true)
            const { data }=await axios.post('http://localhost:5000/users/login',{
                email,password,
            },
            config);
            console.log(data);
            localStorage.setItem('userInfo',JSON.stringify(data))
            setLoading(false);
        } catch (error){
            setError(error.response.data.message)
        }
    }
    return (
        <MainScreen title = "Login" >
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" style={{margin:40+'px '+0+'px'}}controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            value={email}
            className="inp" 
            type="email" 
            placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" style={{margin:40+'px '+0+'px'}}controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            value={password}className="inp" type="password" placeholder="Password"
            onChange ={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <button className="button-86" style={{margin:30+'px '+0+'px'}}  type="submit">
            Submit
          </button>
        </Form>
        </MainScreen>)
}

export default LoginScreen;

