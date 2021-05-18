import Logo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/instagramLogo.png' 
import './HeadPart.css';
import homeLogo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/garage-open.png'
import notifiLogo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/like--v1.png'
import chatLogo from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Header/topic-push-notification.png'
import React from 'react'
import { toast } from 'react-toastify';
import ReAvatar from '../ReuseComps/ReAvatar';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';


function HeaderPart() {
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
        <ReAvatar 
        style={{marginLeft:'70%',marginBottom:'10%'}}
        />
           </div>
           <hr/>
           
        </div>
    )
}

export default HeaderPart;
