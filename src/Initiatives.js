import * as React from 'react';
import './Initiatives.css'
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const theme = createTheme({
  palette: {
    yellow: {
      main: '#ffc700'
    },
  },
});

export default function BasicCard() {

  const navigate = useNavigate();

  return (
    <div>
      <h1> Initiatives </h1>
      <p className="desc">We take pride in the freedom our members have to pursue impactful initiatives both immediately and in the long term. Some initiatives have been around for a decade or more, while others come and go as our goals evolve.</p>

      <Grid container columns={{ xs: 1, md: 2 }} paddingX={1}>
        {/*Blog*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Blog</b></p>
              <p className="card-desc">
                Humans of Purdue Experiences (HOPE) showcases the distinct stories and experiences of department students, alumni, and faculty. Our written blog posts, spotlights, and video series help in providing a comprehensive understanding of our collective identity and accomplishments.
              </p>
              <p>
                <ThemeProvider theme={theme}>
                  <Button color="yellow" size="large" variant='contained' href='displayBlog'>View Blog Posts</Button>
                </ThemeProvider>
              </p>
            </div>
          </div>
        </Grid>

        {/*CS 193: Tools*/}
        <Grid xs={1}>
          <div className="initiative-card">
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
        </Grid>

        {/*Club Hub*/}
        <Grid xs={1}>
          <div className="initiative-card">
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
        </Grid>

        {/*Help Room*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Help Room</b></p>
              <p className="card-desc">
                Our Help Room provides additional tutoring CS 180, CS 182, and CS 240. This initiative does not intend to and cannot replace regular office hours for these courses, but students in need of extra support may find it here.
              </p>
              <p>
                <ThemeProvider theme={theme}>
                  <Button color="yellow" size="large" variant='contained' href='/helproom'>More Info & Schedule</Button>
                </ThemeProvider>
              </p>
            </div>
          </div>
        </Grid>

        {/*International Student Resources*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>International Student Resources</b></p>
              <p className="card-desc">
                The goal of this initiative is to provide international students with resources and guidance as they navigate their time at Purdue. The initiative specifically targets career resources, as international students face unique challenges with attaining employment (internships and full time).
              </p>
              <p>
                <ThemeProvider theme={theme}>
                  <Button color="yellow" size="large" variant='contained' href='/internationalstudentresources'>More Info</Button>
                </ThemeProvider>
              </p>
            </div>
          </div>
        </Grid>

        {/*Mentorship*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Mentorship</b></p>
              <p className="card-desc">
                This initiative revolves around helping incoming freshman navigate their way through Purdue CS/DS/AI. This program would be pairing sophomores (students who know most recently what it is like to be a freshman) and incoming freshman in a group setting with 5-6 mentees per mentor. Mentees can be used to ask any advice regarding Purdue CS on a need-basis, making this program low commitment but high impact for both parties.
              </p>
            </div>
          </div>
        </Grid>

        {/*Pen Pals*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Pen Pals</b></p>
              <p className="card-desc">
                The goal of this initiative is to create a close-knit CS/DS/AI community at Purdue beyond the scopes of academics by allowing peers to be able to create meaningful relationships with one another catered to their desires, whether that be someone they want to be their study buddy, project partner, or friend.          </p>
            </div>
          </div>
        </Grid>

        {/*PTP*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Purdue Technical Projects</b></p>
              <p className="card-desc">
                USB provides a space for students to collaborate on and promote their Purdue-related technical projects. This initiative helps students get connected with useful projects, highlights student creativity, and promotes the versatile and interdisciplinary nature of coding.
              </p>
              <p>
                <ThemeProvider theme={theme}>
                  <Button color="yellow" size="large" variant='contained' href='/ptp'>More Info & Featured Projects</Button>
                </ThemeProvider>
              </p>
            </div>
          </div>
        </Grid>

        {/*Research Resources*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Research Resources</b></p>
              <p className="card-desc">
                Although there are many research opportunities available to students at Purdue, getting started with pursuing these opportunities may be difficult or intimidating. This initiative aims to make the proccess easier, from reaching out to professors to presenting your research. We additionally provide a consolidated list of research projects seeking CS/DS/AI students.
              </p>
              <p>
                <ThemeProvider theme={theme}>
                  <Button color="yellow" size="large" variant='contained' href='/research'>More Info</Button>
                </ThemeProvider>
              </p>
            </div>
          </div>
        </Grid>

        {/*Student Forum & Town Hall*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Student Forum & Town Hall</b></p>
              <p className="card-desc">
                We bridge communications between the undergraduate student body and the CS/DS/AI faculty by hosting a Student Forum twice a semester to gather students' feedback and concerns for the CS department. We additionally moderate the department town hall that occurs once a semester and implement changes that benefit the student body.
              </p>
              <p className="card-desc">Dates for these are announced on our Instagram page.</p>
            </div>
          </div>
        </Grid>

        {/*Tutor List*/}
        <Grid xs={1}>
          <div className="initiative-card">
            <div className="initiative-details">
              <p className="card-heading"><b>Tutor List</b></p>
              <p className="card-desc">
                USB maintains a list of available tutors for various CS and related courses at Purdue, from MA 161 to CS 381. The tutors on this list are not vetted by USB - the list is for informational purposes only.
              </p>
              <p>
                <ThemeProvider theme={theme}>
                  <Button color="yellow" size="large" variant='contained' href='https://usb.notion.site/fc8013a0d21a4483982d126cad0c372f?v=c2423acbb3f54dca8e902e84c013aa05'>View Tutors</Button>
                </ThemeProvider>
              </p>
            </div>
          </div>
        </Grid>

      </Grid>

    </div>
  );
}

/* example of card that includes image

      <div className="initiative-card">
        <div className="initiative-image">
          <img src={require('./images/usb_group_2023.webp')} alt="Tutor List" />
        </div>
        <div className="initiative-details">
          <p className="card-heading"><b>Tutor List</b></p>
          <p className="card-desc">
            USB maintains a list of available tutors for various CS and related courses at Purdue, from MA 161 to CS 381. The tutors on this list are not vetted by USB - the list is for informational purposes only.
          </p>
          <p>
            <ThemeProvider theme={theme}>
              <Button color="yellow" size="large" variant='contained' href='https://usb.notion.site/fc8013a0d21a4483982d126cad0c372f?v=c2423acbb3f54dca8e902e84c013aa05'>View Tutors</Button>
            </ThemeProvider>
          </p>
        </div>
      </div>

*/