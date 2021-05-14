import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



function Login() {

    const [state, setstate] = useState({username:'',password:''});

    const ChangeIt=(e)=>{
        setstate({...state,username: e.target.value})
        // console.log(state)
    }
    const ChangeIt2=(e)=>{
        setstate({...state,password: e.target.value})
        // console.log(state)
    }
    
    const formSub=(e)=>{
        e.preventDefault();
        console.log(state);
    }

    return (
        <div>
           <form >
               <TextField 
                   type='text'
                   id="filled-size-small"
                   variant="outlined"
                   size="small"
                   placeholder='Enter Username'
                   value={state.username}
                   onChange={ChangeIt}
               />
               <br/>
               <br/>
               <TextField 
                   type='password'
                   id="filled-size-small"
                   variant="outlined"
                   size="small"
                   placeholder='Enter Password'
                   value={state.password}
                   onChange={ChangeIt2}
               />
               <br/>
               <button onClick={formSub}>Button</button>
           </form>
        </div>
    )
}

export default Login
