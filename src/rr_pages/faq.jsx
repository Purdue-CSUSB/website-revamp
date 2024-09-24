import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack'
import StickySideNav from "../StickySideNav";

const accordionData = [
    { title: 'Why should I join a research project?', content: 'A research project can provide you with a lot of experiences and skills. Similar to a job or internship, you will be working with different resources and technologies which you can use to gain experience and add to your resume. As well, you can explore other disciplines at Purdue like Biology, Astronomy, History, and much more!' },
    { title: 'How do I find a research project?', content: 'You can check out our page here to find more about all the possible opportunities available! We have listed the different <a href="orgs-and-programs">research orgs/programs</a> available. If you want to find a project on your own, you can search up professors working in the field in which you want to and email them with your CV/Resume and a message.' },
    { title: 'What is CS research?', content: 'CS Research can vary. It can be theoretical, analytical, or anything you can think of. Since CS is so versatile, it can be applied to any discipline. If you like digging into the theoretical concept of CS, that\'s a route that is available. Or if you like to leverage CS to discover trends, patterns, etc, that\'s also another route available. Depending on your preference, there is something for everyone in CS research' },
    { title: 'What are the different types of research I can be involved in?', content: 'At Purdue, there are a vast amount of openings for all different openings. You can do only coding, you can do hands-on work with tech, or you can do something not related to CS! It’s mainly about finding what kind of research you are interested in. Almost any type of research is available at Purdue.' },
    { title: 'Do I need a lot of experience to join a project?', content: 'Depending on the project, experience level may matter. However, for most projects, a lot of people are looking for motivated students. If you see a project and you believe you have relevant skills, you should definitely apply!' },
    { title: 'How can I present my research?', content: 'Purdue holds Undergraduate Research Conferences every semester for students to present their research. You can showcase your work in a panel or to judges walking by. As well, you can publish your completed Research Paper to the Journal of Purdue Undergraduate Research to make it available to the public.' },
    { title: 'Can I get credits/paid for my Research?', content: 'Yes! Some research projects require you to sign up for 1-3 credits to add to your schedule, and some may be transferable to your plan of study. Talk to your advisor more about whether credits from research can be applied towards your graduation. As well, you can get paid for some research projects. Make sure to read the description of the projects to see if they will pay you.' }
];

// This function maps the data from the accordionData array to a series of Accordion components.
function accordionMapper() {
    return accordionData.map((data, index) => {
        return (
            <Accordion key={index} style={{ backgroundColor: '#333' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                    style={{ fontFamily: 'Tahoma', color: 'white', fontWeight: 'bold' }}
                >
                    {data.title}
                </AccordionSummary>
                <AccordionDetails style={{ fontFamily: 'Tahoma', color: 'white' }}>
                    <span dangerouslySetInnerHTML={{ __html: data.content }} />
                </AccordionDetails>
            </Accordion>
        );
    });
}

function faq() {
    return (
        <div>
            <Stack direction="row">
                <div className="side-content">
                    <StickySideNav />
                </div>
                <div className="main-content">
                    <h4> Frequently Asked Questions</h4>

                    <div>
                        {accordionMapper()}
                    </div>
                </div>
            </Stack>
        </div>
    );


}
export default faq;