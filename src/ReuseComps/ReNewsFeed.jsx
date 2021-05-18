import React from 'react'
import InstagrmPic from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Component/Story/NewsFeed/instagramImage.jpeg'
import Avatar from '@material-ui/core/Avatar';



function ReNewsFeed({src,name,style}) {
    return (
        
            <div className="NewsFeed">
        <Avatar alt="Remy Sharp" 
        src={'https://images.hindustantimes.com/tech/img/2021/04/17/960x540/image_-_2021-01-30T131056.370_1611992460978_1611992467840_1618649284491.jpg'}       
        />
        <b style={{marginLeft:'12%',marginTop:'20px'}}>{name}</b>
        <div className="dots" style={style}>
        <a>
        ...
        </a>    
        </div>
            <img src={src} style={{width:'100%',marginTop:'5%',marginLeft:'1%'}}/>
        <br/>        
        </div>
    )
}

export default ReNewsFeed;
