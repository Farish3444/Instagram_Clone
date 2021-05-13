import React from 'react'
import './NewsFeed.css';
import InstagrmPic from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Component/Story/NewsFeed/instagramImage.jpeg'
import Avatar from '@material-ui/core/Avatar';

function NewsFeed() {
    return (
        <div className="NewsFeed">
        <Avatar alt="Remy Sharp" 
        src={'https://images.hindustantimes.com/tech/img/2021/04/17/960x540/image_-_2021-01-30T131056.370_1611992460978_1611992467840_1618649284491.jpg'}
        // style={{he}}    
        />
        <div classNane="dots" style={{marginLeft:'90%',fontSize:'130%'}}>
        <a>
        ...
        </a>    
        </div>
        <b style={{marginLeft:'15%',marginTop:'5%'}}>Allahuakbar</b>
            <img src={InstagrmPic} style={{width:'100%',marginTop:'10%'}}/>
        </div>
    )
}

export default NewsFeed;
