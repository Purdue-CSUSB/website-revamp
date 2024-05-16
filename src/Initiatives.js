import * as React from 'react';
import './Initiatives.css'
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    yellow: {
      main: '#ffc700'
    },
  },
});

export default function BasicCard() {

  const navigate = useNavigate();

  const handleClickWiki = () => {
    navigate('/wiki');
  };

  return (
    <div>
      <h1> Initiatives </h1>
      <p className="desc">We take pride in the freedom our members have to pursue impactful initiatives both immediately and in the long term. Some initiatives have been around for a decade or more, while others come and go as our goals evolve.</p>

      <div className="initiative-card">
        <div className="initiative-image">
        <img src={require('./images/instagram.webp')} alt="Girls Who Code" />
        </div>

        <div className="initiative-details">
          <p className="card-heading"><b>CS 193: Tools</b></p>
          <p className="card-desc">
          In this course organized and tought by our members, we teach essential software engineering tools and more to students beginning their CS/DS/AI journey at Purdue University. Topics include Linux, GitHub, Shell, and more. 
          </p>
          <p>
          <ThemeProvider theme={theme}>
            <Button color="yellow" size="large" variant='contained' href='https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202010&subj_code_in=CS&crse_numb_in=19300'>Course Page</Button>
          </ThemeProvider>
          </p>
        </div>
      </div>

      <div className="initiative-card">
        <div className="initiative-image">
        <img src={require('./images/instagram.webp')} alt="Girls Who Code" />
        </div>

        <div className="initiative-details">
          <p className="card-heading"><b>Club Hub</b></p>
          <p className="card-desc">
            Club Hub aims to connect the different computing related clubs and organizations within Purdue's CS department and at Purdue as a whole. At the beginning of each semester, this initiative facilitates a CS Club Fair (previously known as Callout of Callouts) for students to find out about these different organizations and how to get involved.
          </p>
          <p>
          <ThemeProvider theme={theme}>
            <Button color="yellow" size="large" variant='contained' href='/clubhub'>More Info & Participating Clubs</Button>
          </ThemeProvider>
          </p>
        </div>
      </div>



      <div className="initiative-card">
        <div className="initiative-image">
          <img src={require('./images/instagram.webp')} alt="Girls Who Code" />
        </div>

        <div className="initiative-details">
          <p className="card-heading"><b>Club Hub</b></p>
          <p className="card-desc">
            Club Hub aims to connect the different computing related clubs and organizations within Purdue's CS department and at Purdue as a whole. At the beginning of each semester, this initiative facilitates a CS Club Fair for students to find out about these different organizations and how to get involved.

          </p>
          <p>
          <ThemeProvider theme={theme}>
            <Button color="yellow" size="large" variant='contained' href='/clubhub'>Club Hub</Button>
          </ThemeProvider>
          </p>
        </div>
      </div>
    </div>
  );
}