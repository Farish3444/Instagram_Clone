import React,{useState} from 'react'
import './NewsFeed.css';
import ReAvatar from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/ReuseComps/ReAvatar.jsx'
import InstagrmPic from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Component/Story/NewsFeed/instagramImage.jpeg'
import Avatar from '@material-ui/core/Avatar';
import ReNewsFeed from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/ReuseComps/ReNewsFeed.jsx'
import { toast } from 'react-toastify';



function NewsFeed() {

    const [state, setstate] = useState(<b>Follow</b>);
    
    


    return (
        <React.Fragment>

        <div className="NewsFeed">
        <Avatar alt="Remy Sharp" 
        src={'https://images.hindustantimes.com/tech/img/2021/04/17/960x540/image_-_2021-01-30T131056.370_1611992460978_1611992467840_1618649284491.jpg'}
        style={{marginTop:'1%'}}
        // style={{he}}    
        />
        <b style={{marginLeft:'12%',marginTop:'20px'}}>Allahuakbar</b>
        <div className="dots" style={{marginLeft:'95%',fontSize:'130%'}}>
        <a>
        ...
        </a>    
        </div>
        {/* <hr/> */}
            <img src={InstagrmPic} style={{width:'100%',marginTop:'5%',marginLeft:'1%'}}/>
        </div>
<div className='ReAvatar'>
            <ReAvatar 
            src="data:image/jpeg;base64,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"  
            />
            <p style={{whiteSpace:'nowrap'}}>User-Admin</p>
            
            <b style={{cursor:'pointer'}} onClick={()=>{setstate(<b>Following</b>)}}>{state}</b>
            <p style={{color:'gray',whiteSpace:'nowrap',margin:'20%',marginLeft:'-60%'}}>Suggestions For you</p>
</div>
<div className='Suggests'>
<ReAvatar 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqQ_ggMqsdPl7PyGbSufT7bdf0tU57kJA2w&usqp=CAU'
    style={{backgroundColor:'red',margin:'10%',marginLeft:'5%'}}
/>
<p style={{marginLeft:'24%',marginTop:'-19%'}}>Redux</p>
<b style={{cursor:'pointer',marginLeft:'55%'}} onClick={()=>setstate(<b>Following</b>)}>{state}</b>
<ReAvatar 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGa43WvwqMlvmD75CQ2_EENFPIOKhBTEi0Q&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGa43WvwqMlvmD75CQ2_EENFPIOKhBTEi0Q&usqp=CAU'
    style={{backgroundColor:'red',margin:'10%'}}
/>
<p>Javascript</p>
<b style={{cursor:'pointer',marginLeft:'55%'}} onClick={()=>setstate(<b>Following</b>)}>{state}</b>
<ReAvatar 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrctvcSryYL8M8fNHnohedYgcr3B7NrxfL7Q&usqp=CAU'
    style={{backgroundColor:'red',margin:'10%'}}
/>
<b style={{cursor:'pointer',marginLeft:'55%'}} onClick={()=>setstate(<b>Following</b>)}>{state}</b>
</div>
<p style={{margin:'50%',marginLeft:'84%',marginTop:'-20%',whiteSpace:'nowrap'}}>React JS</p>
<b style={{margin:'50%',marginLeft:'94%',marginTop:'-10%'}}><button href="#">Follow</button></b>
<br/>
<ReNewsFeed 
    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj67NSx8a3ePU_B-5mC2w7CDVQXypJ3aBcvDZLj320udCNZWoaW568d3-Q76rXFMWGigk&usqp=CAU'}
    name='Astrofilah -'
/>
<ReNewsFeed 
    src={'https://i.pcmag.com/imagery/reviews/05CbcW9cP4o0rqbCnVB2OFZ-1..1584707541.jpg'}
    name='Subhanallah'
/>
        </React.Fragment>
    )
}

export default NewsFeed;