import { useState, useEffect, React } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './Contact.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // This theme changes the "required" asterisk to red in the form
    const theme = createTheme({
        components: {
            MuiFormLabel: {
                styleOverrides: {
                    asterisk: {
                        color: 'red',
                    },
                },
            },
        },
    });

    const submitHandler = async (e) => {
        console.log('submit called');
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(message);
        e.preventDefault(); // what does this do

        try {
            const response = await axios.post('https://formspree.io/FORM_ID_HERE', {
                name: name,
                email: email,
                subject: subject,
                message: message
            });
            if (response.data.ok) {
                alert('Message sent');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <h1 className="header">
                    What's on your mind?
                </h1>
                <p className="text">
                    You can also send us an email at <a href="mailto:usb@cs.purdue.edu"> usb@cs.purdue.edu</a>
                </p>
                <p className="text2">
                    <small>Note: </small>
                    To report concerns in an official capacity, please go to the <a href="https://my.cs.purdue.edu/undergraduate/concern"> CS Concern Form</a>
                </p>
                <Card>
                    <CardContent>
                        <Box component="form" onSubmit={submitHandler}>
                            <Grid container spacing={2}>
                                <Grid xs={12} sm={6}>
                                    <TextField
                                        label="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Purdue Pete"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <TextField
                                        type="email"
                                        label="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="pete@purdue.edu"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <TextField
                                        label="Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder="What's the gist?"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <TextField
                                        label="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        multiline
                                        rows={5}
                                        placeholder="Questions, comments, concerns, suggestions &mdash; put 'em here!"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid xs={6}>
                                    <FormControlLabel
                                        required
                                        control={<Checkbox />}
                                        label="I acknowledge that my message is not guaranteed to be private and may be subject to Indiana mandatory reporting laws."
                                        sx={{
                                            '& .MuiTypography-root': {
                                                fontFamily: 'Tahoma',
                                                fontSize: '9px',
                                                textTransform: 'uppercase'
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <Button type="submit" variant="contained">Send</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
            <Container maxWidth="xl" style={{ background: '#ffc700' }}>
                <Container maxWidth="md">
                    <h1 className="faq">
                        Frequently Asked Questions
                    </h1>
                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                How can I join USB?
                            </AccordionSummary>
                            <AccordionDetails>
                                This is a description
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                What's the application process like?
                            </AccordionSummary>
                            <AccordionDetails>
                                This is a description
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                What do USB members do?
                            </AccordionSummary>
                            <AccordionDetails>
                                This is a description
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                            >
                                What are we looking for?
                            </AccordionSummary>
                            <AccordionDetails>
                            USB cares about diversity. The computer science department heavily lacks diversity and we believe that the best way for a student organization to address this is to amplify and elevate the voice of minority groups in tech. We want our board to be representative of the diverse community we are trying to build.
                            <br></br>
                            <br></br>
                            USB is also looking for passion and great ideas for the CS department. Initiatives are completely maintained and created by USB members, so we want to find individuals who truly care about the work they will do with us. We love to talk with candidates who have genuine interest or a specific experience that is driving their idea- maybe a love for teaching that has given them an idea for a mentorship initiative, or an experience in class that made them realize there was an easier way to hold PSOs.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default Contact