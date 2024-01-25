import * as React from 'react';
import './Initiatives.css';
import axios from 'axios';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

function Initiatives() {
  const [initiatives, setInitiatives] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5000/get-initiatives')
      .then((response) => {
        //const data = response.data;
        //console.log(data);
        setInitiatives(response.data);
        console.log(response.data);
        console.log("data received");
      })
      .catch(() => {
        console.log("error receiving data");
      });
  }, []);


  const displayInitiatives = (initiatives) => {
    if (!initiatives.length) return null;

    /*
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Item> CONTENT </Item>
        </Grid>
      ))}
    </Grid>
    */

    return initiatives.map((initiative, index) => (
      <div key={index} className='initiative'>
        <h3>{initiative.name}</h3>
        <p>{initiative.summary}</p>
      </div>
    ))

  }

  return (
    <div>
      <h1 className='h1'> <center> Our Initiatives </center> </h1>
      <h3 className='h3'> <center> Learn about each of our current initiatives </center> </h3>

      <div className='content'>
        {displayInitiatives(initiatives)}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Button> CONTENT </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}


export default Initiatives;