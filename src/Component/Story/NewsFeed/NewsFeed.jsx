import React,{useState} from 'react'
import './NewsFeed.css';
import ReAvatar from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/ReuseComps/ReAvatar.jsx'
import InstagrmPic from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/Component/Story/NewsFeed/instagramImage.jpeg'
import Avatar from '@material-ui/core/Avatar';
import ReNewsFeed from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/ReuseComps/ReNewsFeed.jsx'
import { toast } from 'react-toastify';
import Reactpic from '/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/one-year-of-react-native.png';


function NewsFeed() {

    const [state, setstate] = useState(<b>Follow</b>);
    const [inHover, setHover] = useState(false);
    


    return (
        <React.Fragment>

        <div className="NewsFeed">
        <Avatar alt="Remy Sharp" 

        src={'/Users/apple/Desktop/REACTING/reactProjects/project1/clone-react/src/one-year-of-react-native.png'}
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
            <img src={Reactpic} style={{width:'100%',marginTop:'0%',marginLeft:'-1%'}}
                
            />
        </div>

<ReNewsFeed 
    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj67NSx8a3ePU_B-5mC2w7CDVQXypJ3aBcvDZLj320udCNZWoaW568d3-Q76rXFMWGigk&usqp=CAU'}
    name='Astrofilah'
/>
<ReNewsFeed 
    src={'https://i.pcmag.com/imagery/reviews/05CbcW9cP4o0rqbCnVB2OFZ-1..1584707541.jpg'}
    name='Subhanallah'
/>
        </React.Fragment>
    )
}

export default NewsFeed;