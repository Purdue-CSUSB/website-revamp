// General Imports
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import './Landing.css';

// Importing MUI Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu } from "@mui/base";

const theme = createTheme({
  palette: {
    yellow: {
      main: '#ffc700'
    },
  },
});

// Defined constants
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function Landing() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/wiki');
      };
  return (
    // Container for Hello from USB
    // FIXME: Convert this to a box potentially, add padding.
    /* 
    <Container class="Hello" maxWidth="sm">
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <h1>Hello from USB</h1>
                <p>The Computer Science Undergraduate Board is dedicated to improving the student experience 
                    within Computer and Data Sciences at Purdue - whether by managing CS193, hosting forums for student advocacy, 
                    or maintaining a database of undergrad-tailored resources, USB is continually creating initiatives 
                    that will uphold our values.</p>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Link to = "/initiatives">
                            <Button hover variant="contained">Our Initiatives</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to = "/wiki">
                            <Button hover variant="contained">Read Student Wiki</Button>
                        </Link>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={6}>
                <img src = {require('./images/team2022.png')}/> 
             </Grid>
        </Grid>

    
    </Container>

    */

    <div className = "welcome">
        <div className = "intro">
            <h1>Hello from USB! </h1>
            <h2> Strengthening the Purdue Computing Student Experience since 1999 </h2>
            <ThemeProvider theme={theme}>
                <Stack direction="row" spacing={2} justifyContent = "center" marginTop={-6}>
                    <Button color = "yellow" size = "large" variant="outlined" startIcon={<MenuBookIcon />} 
                    onClick={handleClick}>
                        Read Student Wiki
                    </Button>
                    <Button color = "yellow" size = "large" variant="outlined" startIcon={<TipsAndUpdatesIcon />}>
                        Explore Initiatives
                    </Button>
                </Stack>
            </ThemeProvider>
        </div>
        <div className = "photo">

            <img src = {require('./images/team2022.png')}/> 

        </div>


    </div>


    // TODO: Container for Stay Connected
    // TODO: Container for Meet the Board
    // TODO: Container for About Us
  );
}