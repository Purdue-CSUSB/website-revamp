import { useState, useEffect, React } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './Contact.css';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Contact() {
    return (
       <Container maxWidth="md">
            <h1 className="header">
                What's on your mind?
            </h1>
            
        </Container>
    );
}

export default Contact