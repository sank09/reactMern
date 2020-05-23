import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import validator from 'validator';
import { useHistory} from "react-router-dom";
import {RegisterCall} from '../../ExternalCall/LoginRegister';

export  default function Register(props) {
  
  let history = useHistory();
  
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [nameError,setNameError]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passError,setPassError]=useState('');

  const handleInputChange=(e,handler)=>{

    handler(e.target.value);
  }
  
  const handleSubmit=async()=>{

    setNameError('');
    setPassError('');
    setEmailError('');


     if (validator.isEmpty(name)) {

      setNameError('Username cannot be blank')

      } else if (validator.isEmpty(email)) {
       
        setEmailError('Email cannot be blank')
      }
      else if(!validator.isEmail(email)){
        setEmailError('Email is not valid')
      } 
      else if(validator.isEmpty(password)){
        setPassError("Password cannot be blank");

      }
      else{
          setNameError('');
          setPassError('');
          setEmailError('');

          const data={name,email,password}        
          const responseData= await RegisterCall(data)

         if(!responseData){
           alert("Something went wrong")          
           return 0;
         }

         if(responseData.success==true){
           alert(responseData.message)
           history.push("/")
         }else{
          alert(responseData.message)
         }

      }
 
  }
  
   return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
    
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form  noValidate>
          <Grid container spacing={2}>

        
          <Grid item xs={12}>
              <TextField
               error={nameError?true:false}
               helperText={nameError}
                variant="outlined"
                required
                fullWidth
                name="firstname"
                label="Name"
                type="text"
                id="firstname"
                autoComplete="current-password"
                onChange={(e)=>{handleInputChange(e,setName)}}
              />
            </Grid>
           
          
            <Grid item xs={12}>
              <TextField
                error={emailError?true:false}
                helperText={emailError}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e)=>{handleInputChange(e,setEmail)}}
              />
            </Grid>
 
                 
            <Grid item xs={12}>
              <TextField
                 error={passError?true:false}
                helperText={passError}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e)=>{handleInputChange(e,setPassword)}}
              />
            </Grid>
         
          </Grid>
          <br />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=>{handleSubmit()}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  )


}

