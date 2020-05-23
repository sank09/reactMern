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
import { withRouter} from "react-router-dom";
import {LoginCall} from '../../ExternalCall/LoginRegister';
import {Auth} from '../../Auth/Auth';


 function Login(props) {
 

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passError,setPassError]=useState('');

  const handleInputChange=(e,handler)=>{

    handler(e.target.value);
  }

  const handleSubmit=async()=>{

    
    setPassError('');
    setEmailError('');


     if (validator.isEmpty(email)) {
       
        setEmailError('Email cannot be blank')
      }
      else if(!validator.isEmail(email)){
        setEmailError('Email is not valid')
      } 
      else if(validator.isEmpty(password)){
        setPassError("Password cannot be blank");

      }
      else{
        
          setPassError('');
          setEmailError('');

          const data={email,password}        
          const responseData= await LoginCall(data)

         if(!responseData){
           alert("Something went wrong")          
           return 0;
         }

         if(responseData.success==true){
           alert(responseData.message)

           Auth.authenticate((isPassed)=>{
             
              if(isPassed){
                localStorage.setItem("username",responseData.data.username)
                props.history.push("/dashboard")
              }
    
            },responseData.data.token)
         
          
           
        
          }else{
         
          alert(responseData.message)
         
        }

      }
 
  }
    
    return (
      <div>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
     
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
       

     
          <Grid container spacing={2}>

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
                autoComplete="email"
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
                autoComplete="current-password"
                onChange={(e)=>{handleInputChange(e,setPassword)}}
              />
            </Grid>
           
          </Grid>
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Login 
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Create new account
              </Link>
            </Grid>
          </Grid>
     
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
        
        
      </div>
    )
  
}


export default withRouter(Login)