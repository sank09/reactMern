import React,{useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Auth} from '../../Auth/Auth';
import { withRouter} from "react-router-dom";

function Dashboard(props) {

  const [username,setUsername]=useState('');

  useEffect(()=>{
    
    setUsername(localStorage.getItem("username"))

  });

  const handleClick=()=>{

    Auth.signout(()=>{
        props.history.push("/");

    })

  }

  return (
    <div>
       <Container component="main" maxWidth="xs">


       <Typography component="h1" variant="h5">
          Hello {username}
        </Typography>
        <br/>
        <Grid container spacing={2}>


        <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={()=>{handleClick()}}
        >
          Sign Out
        </Button>


        </Grid>

       </Container>

    
   
    </div>
  )
}
export default withRouter(Dashboard)