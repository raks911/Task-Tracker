import React, { useEffect, useState } from 'react';
import { Button, Card,Badge, Accordion } from 'react-bootstrap';
import MainScreen from '../../components/Mainscreen'
import { Link } from 'react-router-dom';
import './MyNotes.css'
import axios from 'axios';

const MyNotes = () => {
    const [tasks,setTasks]=useState([])
    const deleteHandler=(id)=>{
        if(window.confirm("Are you Sure?")){
            
        }
    };
    const fetchNotes = async() => {
        const {data}=await axios.get('http://localhost:5000/notes'); 
        setTasks(data);      
    }
    useEffect(() => {
        fetchNotes();
    },[])
  return (
    <MainScreen title="Tasks To Perform ">
        <Link to='createnote'>
            <Button style={{background:"rgb(238, 238, 93)",color:"black",boxShadow:"0px 0px 0px 0px"}} size="lg">
                Create New Task
            </Button>
            </Link>
            {
                tasks.map(note=>(
                <Card style={{margin:20,background:'transparent',borderColor:'yellow' ,padding:4}}>
                <Card.Header style={{display:"flex"}}>
                    <span 
                    style={{
                        color:"yellow",fontSize:20,
                        flex:1
                    }}>
                        {note.title}
                    </span>
                    <div style={{
                        display:"flex",justifyContent:"space-between"
                    }}>
                        <button className='button-86' href={`/note/${note._id}`}>
                            Edit
                        </button>
                        <button className='button-86' onClick={()=>deleteHandler(note._id)}>
                            Delete
                        </button>
                    </div>
                </Card.Header>
                <Card.Body className='className' >
                    <h4>
                        <Badge bg='secondary' text='dark'>
                            Category-{note.category}
                        </Badge>
                    </h4>
        <blockquote className="blockquote mb-0">
          <p>
            {note.content}
          </p>
          <footer className="blockquote-footer">
            Created-on-date
          </footer>
        </blockquote>
      </Card.Body>
            </Card>
            ))
            }
        
    </MainScreen>
  )
}

export default MyNotes;