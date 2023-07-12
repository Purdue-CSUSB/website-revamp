// General Imports
import { Link } from "react-router-dom";
import * as React from 'react';
import './Landing.css';

// Importing MUI Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Defined constants
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Landing() {
  return (
    // Container for Hello from USB
    // FIXME: Convert this to a box potentially, add padding.
    <Container class="Hello" maxWidth="sm">
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src = {require('./images/team2022.png')}/> 
            </Grid>
            <Grid item xs={6}>
                <h1>Hello from USB</h1>
                <p>The Computer Science Undergraduate Board is dedicated to improving the student experience within Computer and Data Sciences at Purdue- whether by managing CS193, hosting forums for student advocacy, or maintaining a database of undergrad-tailored resources, USB is continually creating initiatives that will uphold our values.</p>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                        <Link to = "/initiatives">
                            <Button hover variant="contained">Our Initiatives</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                        <Link to = "/wiki">
                            <Button hover variant="contained">Read Student Wiki</Button>
                        </Link>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    </Container>
    // TODO: Container for Stay Connected
    // TODO: Container for Meet the Board
    // TODO: Container for About Us
  );
}