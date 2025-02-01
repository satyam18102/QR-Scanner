import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
 export default function App(){
  return(
    <>
      <Link to={"/scanner"}><Button variant="contained">Generate QR</Button></Link>
      <Link to={"/scan"}><Button variant="contained">Scan QR</Button></Link>
    </>
  )
 }