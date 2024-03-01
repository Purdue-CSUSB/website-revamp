import { useState, React, Fragment } from 'react';
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
import ReCAPTCHA from "react-google-recaptcha";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');
    const [alert, setAlert] = useState({message: '', type: '', visible: false});

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

    // This is the data for the FAQ sections. Modify this and the FAQ accordions will update automatically
    const accordionData = [
        { title: 'What is USB?', content: 'Established in 1999, The Computer Science Undergraduate Student Board is dedicated to improving the student experience within Computer and Data Sciences at Purdue- whether by managing CS193, hosting forums for student advocacy, or maintaining a database of undergrad-tailored resources, USB is continually creating initiatives that will uphold our values. Check out our initiatives page to see what we\'re up to now!'},
        { title: 'What do USB members do?', content: 'That will be completely up to you! USB prides itself in being driven by student-led initiatives- if a board member has an idea and a plan, they are encouraged to take lead. Initiatives can be small or large, and members are given flexibility to be able to move from project to project if it’s in their best interest.' },
        { title: 'How can I join USB?', content: 'USB opens applications early December and keeps them open until the beginning of Spring semester. If you follow us on social media (such as our Instagram), you\'ll be the first to know when it releases!' },
        { title: 'What\'s the application process like?', content: 'Our interview can be split up into 2 main parts \n -Our general application is released early December and stays open until the beginning of Spring semester. It is made up of personal and behavioral questions about yourself. We’re not looking for the longest response (although details, if important, can definitely add to your application)- we want to see what you’re passionate about. If possible, give us a specific situation that or personal experience relates to the question. \n -Final interview offers will be sent out within the next two weeks. After scheduling your interview, we will invite you to either an in-person or virtual interview. You will be able to sit with two interviewers and answer some more personal and behavioral questions. Again, we want to know about you- sharing personal, specific experiences will allow us to get to know you better! During the second half of your interview you will be given a ‘situation’ question where you’re encouraged to share an idea or initiative you have for the CS department and how you would lead it.\nTraditionally, we have had a third optional event with all candidates that made it to the final round of interviews- in the past, we have invited candidates to bowl with us and have dinner. The purpose of this optional meeting is to be able to meet all candidates in a relaxed setting and to get to know you more personally. Since this event is optional, we do not use it as a definitive way to consider candidates, but it (if anything) gives an excuse to have some fun and free food!' },
        { title: 'What are we looking for?', content: 'USB cares about diversity. The computer science department heavily lacks diversity and we believe that the best way for a student organization to address this is to amplify and elevate the voice of minority groups in tech. We want our board to be representative of the diverse community we are trying to build. \n USB is also looking for passion and great ideas for the CS department. Initiatives are completely maintained and created by USB members, so we want to find individuals who truly care about the work they will do with us. We love to talk with candidates who have genuine interest or a specific experience that is driving their idea- maybe a love for teaching that has given them an idea for a mentorship initiative, or an experience in class that made them realize there was an easier way to hold PSOs.' }
    ];

    const submitHandler = async (e) => {
        /*
        console.log('submit called');
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(message);
        console.log(captchaValue);
        */
        // Prevent the form from submitting without all inputs filled
        e.preventDefault();
        
        try {
            const response = await axios.post('https://formspree.io/f/xrgyypqw', {
                Name: name,
                _replyto: email,
                _subject: subject,
                Message: message,
                'g-recaptcha-response': captchaValue
            });

            
            if (response.data.ok) {
                setAlert({message: 'Form submitted successfully! We\'ll get back to you soon.', type: 'success', visible: true});
                // Clear the form
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setCaptchaValue('');
            } else {
                setAlert({message: 'Form failed to submit. Please try again.', type: 'error', visible: true});
            }


        } catch (error) {
            console.log(error);
        }
        

        // Hide the alert after 5 seconds
        setTimeout(() => setAlert(prevState => ({...prevState, visible: false})), 5000);
    }

    // This function maps the data from the accordionData array to a series of Accordion components.
    function accordionMapper() {
        return accordionData.map((data, index) => {
            return (
                <Accordion 
                    key={index}
                    style={{backgroundColor: '#333'}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                        style={{fontFamily: 'Tahoma', color: 'white', fontWeight: 'bold'}}
                    >
                        {data.title}
                    </AccordionSummary>
                    <AccordionDetails
                        style={{fontFamily: 'Tahoma', color: 'white'}}
                    >
                        {data.content.split('\n').map((line, index) => (
                            <Fragment key={index}>
                                {line}
                                <br /> 
                                <br />
                            </Fragment>
                        ))}
                    </AccordionDetails>
                </Accordion>
            );
        });
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
                            <div id="customAlert" className={`custom-alert ${alert.type} ${alert.visible ? '' : 'hidden'}`}>
                                <h3>{alert.message}</h3>
                            </div> 
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
                                    <ReCAPTCHA
                                        sitekey="6LfbS60ZAAAAAKxxH0OHgi7840WtuGmHxoO8y_HU"
                                        onChange={setCaptchaValue}
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <Button 
                                        type="submit" 
                                        variant="contained"
                                        style={{backgroundColor: '#ffc700', color: '#333'}}
                                        fullWidth
                                    >
                                        Send
                                    </Button>
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
                    <div style={{ paddingBottom: '20px' }}>
                        {accordionMapper()}
                    </div>
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default Contact