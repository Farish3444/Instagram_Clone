import Logo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/instagramLogo.png' 
import './HeadPart.css';
import homeLogo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/garage-open.png'
import notifiLogo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/like--v1.png'
import chatLogo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/topic-push-notification.png'
import React from 'react'
import { toast } from 'react-toastify';
import ReAvatar from '../ReuseComps/ReAvatar';
import Rpic from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/one-year-of-react-native.png';
import {
    Route,
    Switch,
    Link,
    Redirect,
    BrowserRouter,
    Router,
    useHistory
    } 
from 'react-router-dom';


function HeaderPart() {

    let history = useHistory();
    function handleHistory(){
        history.push('/ProfilePage')
    }

    return (
        <div className='Head'>
           <img src={Logo} style={{marginLeft:'15%'}}/>
           <input 
               className='HeadInput'
               placeholder=' 🔍 Search'
               style={{textAlign:'center'}}
           />
           <div className='notifications'>
        <img src={homeLogo} style={{width:'10%'}} onClick={()=>toast.success('home Refresing')} />
        <img src={notifiLogo} style={{width:'11%',marginLeft:'15%'}} onClick={()=>{alert('No Notifications')}}/>
        <img src={chatLogo} style={{width:'11%',marginLeft:'15%'}} onClick={()=> toast('checking for messages')}/>
           </div>

        <ReAvatar 
        src={'data:image/jpeg;base64,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'}
        style={{marginLeft:'92.7%',marginBottom:'-3%',marginTop:'-3.3%',cursor:'pointer'}}
        onClick={()=>{history.push("/ProfilePage")}}
        />
           <hr/>
           
        </div>
    )
}

export default HeaderPart;