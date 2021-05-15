import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';



export default function BasicTable() {
  
   const [state,setstate] = useState([]);

    const getProductData=async()=>{
        try{
            const data = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(data.data)
            setstate(data.data)
        }
        catch(e){
            console.log(e)
        }

    }
    useEffect(()=>{
      getProductData();
    },[])


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>            
            <TableCell align="left" style={{color:'red'}}>name</TableCell>
            <TableCell align="left" style={{color:'red'}}>username</TableCell>
            <TableCell align="left" style={{color:'red'}}>email</TableCell>
            <TableCell align="left" style={{color:'red'}}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {state.map((list)=>{
                return(
                    <TableRow key={list.id}>
                          <TableCell>{list.name}</TableCell>
                          <TableCell>{list.username}</TableCell>
                          <TableCell>{list.email}</TableCell>
                          <TableCell>{list.address.city}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// const [product, setproduct] = useState([]);
//     const [search, setsearch] = useState('');
    
//     const getProductData = async() => {
//         try{
//             const data = await axios.get('https://jsonplaceholder.typicode.com/users')
//             console.log(data.data)
//             setproduct(data.data);
//         }
//         catch(e){
//           console.log(e)
//         }
// useEffect(() => {
//     getProductData();
//   }, []);
        
// .map((item)=>{
    // return(
    //     <TableRow key={item.id}>
    //           <TableCell>{item.id}</TableCell>
    //           <TableCell>{item.name}</TableCell>
    //           <TableCell>{item.username}</TableCell>
    //           <TableCell>{item.email}</TableCell>
    //           {/* code to get data from an nested object in with two datas in a same time */}
    //           <TableCell>lattitude-{item.address.geo.lat} <br/>longitutde-{item.address.geo.lng}</TableCell>
    //           <TableCell>
    //               <Button color='secondary' variant='outlined' onClick={()=>deleteButton(item.id)}>Delete</Button>
    //           </TableCell>                      
    //    </TableRow>
    //       );
    //   })}