import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Route,
    Switch,
    Link,
    NavLink,
    Redirect,
    BrowserRouter,
    useHistory
    } 
  from 'react-router-dom';
import MainStore from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/MainStore.jsx';
import App from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/App.js';


function Login() {

    let history = useHistory();
    function handleHistory(){
       history.push('/MainPage')
    };

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
<NavLink to='/App'>
    <button onClick={formSub}>Button</button>
</NavLink>
           </form>
        </div>
    )
}

export default Login
