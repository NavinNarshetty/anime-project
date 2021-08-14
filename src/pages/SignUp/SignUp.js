import React, { useContext, useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useHttp from "../../hooks/useHttp";
import { enviornment } from '../../enviornment/enviornment';
import AuthContext from "../../store/auth-context";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [isLogin , setIsLogin] = useState(false)
  const authCtxt = useContext(AuthContext);
  const emailRef = useRef()
  const passwordRef = useRef()

  const toggleSignUp =()=>{
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler =(event)=>{
      event.preventDefault()
      console.log(emailRef.current.value, passwordRef.current.value)
      let endpoint =''
      if(isLogin){  
          endpoint="signInWithPassword?key="
    }else{
          endpoint = "signUp?key="
      }
      fetch(`${enviornment.authUrl}${endpoint}${enviornment.projectKey}`,{
        method:'POST',
        body:JSON.stringify({
            email:emailRef.current.value,
            password:passwordRef.current.value,
            returnSecureToken:true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp=>{
        if(resp.ok){
            return resp.json()
        }else{
            return resp.json().catch((err)=>{
                console.log("error",err)
            })
        }
    })
    .then((data)=>{
        if(isLogin){
            authCtxt.login(data.idToken)
        }
    })
  }

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogin ? 'Sign in' : 'Sign up'}
        </Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isLogin ? 'Sign in' : 'Sign up'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link  variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
             { <Link   variant="body2" onClick={toggleSignUp}>
                {!isLogin && "Already have an account Login"}
                {isLogin && "Dont Have an account Signup"}
              </Link>}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}