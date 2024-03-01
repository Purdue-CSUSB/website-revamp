import React from "react";
import './ClubHub.css';

function ClubHub() {



    return (
        
        
        <div> 
            

            <h1 class = 'club-hub'> Club Hub </h1>
            <p className="desc">The Club Hub initiative convenes leaders from various CS organizations to exchange advice and pool resources. By fostering collaboration among these groups, the Hub aims to strengthen the CS community and provide valuable opportunities for students to engage and network.</p>
            <div className="container">
            <div className="left-ch">
            <div className="tidbit-ch">
                    <p className="tidbit-heading"><b>Callout of Callouts</b>
                    <p className="tidbit-desc">The Callout of Callouts event, held biannually by USB, serves as a collaborative platform for CS, DS, and AI clubs at Purdue University. This joint callout event aims to streamline the process for students to explore and engage with various student organizations within these fields, fostering a community and facilitating connections that enhance students' academic and professional journeys. Through this unique CS Club Fair, we provide students with valuable insights, resources, and connections to support their interests and aspirations in computer science, data science, and artificial intelligence.</p>
                    </p>
                </div>
                
            </div>
            <div className="right-ch">
            <div className="ch">
                    <img src = {require('./images/clubhub.png')}/> 
                </div>
            </div>
            </div>
            <br></br>
            <br></br>

            <h1 class = 'club-hub'> Clubs at Purdue </h1>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/gwcpurdue.png')} alt="Girls Who Code" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Girls Who Code</b></p>
                     <p className="tidbit-desc-club">
                     We are dedicated to closing the gender gap in technology and computer science through K-12 outreach at the middle and high schools in the Greater West Lafayette area and surrounding cities. Our outreach events consist of: meet + greet panels with students to establish a relationship and ensure familiarity, coding workshops where we help students understand a certain language, show them how they can get involved in programming, and create a project.

                        </p>
                     </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Email" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/gwc.purdue/"><b>@gwc.purdue</b></a>
                        <a href="mailto:purdue.girlswhocode@gmail.com"><b>purdue.girlswhocode@gmail.com</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/mlp.png')} alt="MLP" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>ML @ Purdue</b></p>
                     <p className="tidbit-desc-club">ML@Purdue is the central club for AI/ML career growth for Purdue students. ML@Purdue supports careers in industry, research, and entrepreneurial ventures through projects and various events. The club serves to connect Purdue students to AI/ML leaders in and out of Purdue.</p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                         <img src={require('./images/linkedin.webp')} alt="Linkedin" />
                        <img src={require('./images/email.png')} alt="Email" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/mlpurdue/"><b>@mlpurdue</b></a>
                        <a href="https://www.linkedin.com/company/ml-purdue/"><b>ML@Purdue</b></a>
                        <a href="mailto:aiml@purdue.edu"><b>aiml@purdue.edu</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/dataception.png')} alt="Dataception" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Dataception</b></p>
                     <p className="tidbit-desc-club">Dataception is a Data Science and Data Visualization club that teaches you concepts from both majors by guiding you through your own projects. These projects will either be published on our website or it will be submitted to the Undergraduate Research Symposium.

</p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/gwc.purdue/"><b>@dataception.purdue</b></a>
                        
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/purduehackers.jpeg')} alt="Purdue Hackers" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Purdue Hackers</b></p>
                     <p className="tidbit-desc-club">The Callout of Callouts event, held biannually by USB, serves as a collaborative platform for CS, DS, and AI clubs at Purdue University. This joint callout event aims to streamline the process for students to explore and engage with various student organizations within these fields, fostering a community and facilitating connections that enhance students' academic and professional journeys. Through this unique CS Club Fair, we provide students with valuable insights, resources, and connections to support their interests and aspirations in computer science, data science, and artificial intelligence.</p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Email" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/purduehackers/"><b>@purduehackers</b></a>
                        <a href="mailto:purduehackers@gmail.com"><b>purduehackers@gmail.com</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/cswn.png')} alt="CSWN" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Computer Science Women's Network</b></p>
                     <p className="tidbit-desc-club">
                     CSWN is an organization as Purdue University consisting of people who are dedicated to helping women and non-binary people navigate CS/DS and the tech industry. We want to encourage those in CS/DS to stay in the field and prosper!
                     </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Email" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/gwc.purdue/"><b>@cswnpurdue</b></a>
                        <a href="mailto:cswnpurdue@gmail.com"><b>cswnpurdue@gmail.com</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/boilermake.png')} alt="Boilermake" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Boilermake</b></p>
                     <p className="tidbit-desc-club">BoilerMake hosts Purdue’s largest hackathon over the course of MLK weekend. We see over 500 hackers and around 10 sponsors participate in this 36 hour long event giving everyone the chance to work on a project, network, and get free swag! In addition to this, you can apply to join the BM exec team. We have 5 sub teams, design, ux, dev, spons, and comm, that tackle different aspects of organizing the hackathon.</p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Email" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/boilermake/"><b>@boilermake</b></a>
                        <a href="mailto:team@boilermake.org"><b>team@boilermake.org</b></a>
                     </div>
                </div>
            </div>

            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/acm.png')} alt="ACM" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Association for Computing Machinery</b></p>
                     <p className="tidbit-desc-club">
                     ACM is the umbrella organization for Special Interest Groups (known as SIGs) who specialize in an area of computer science, like mobile applications, artificial intelligence, game development, high performance computing, multimedia, operating systems, security, and more. You are welcome to join the national organization (there are some cool benefits that you can look up), but to be a part of Purdue's Chapter of ACM, all you need to do is show up to a SIG's meeting. As long as you show up to meetings, you're a part of the group.
                    </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Email" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/acmpurdue/"><b>@acmpurdue</b></a>
                        <a href="mailto:acm@cs.purdue.edu"><b>acm@cs.purdue.edu</b></a>
                     </div>
                </div>
            </div>

            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/boilerblockchain.jpeg')} alt="BB" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Boiler Blockchain</b></p>
                     <p className="tidbit-desc-club">
                     Boiler Blockchain is building a blockchain community at Purdue University. We give students the opportunity to gain hands-on experience with blockchain technology. Through general education, skills development, and thought leadership, we are cultivating the next generation of leaders in the blockchain space.
                     </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/linkedin.webp')} alt="Linkedin" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/boilerblockchain/"><b>@boilerblockchain</b></a>
                        <a href="https://www.linkedin.com/company/boilerblockchain/"><b>Boiler Blockchain</b></a>
                     </div>
                </div>
            </div>

            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/ctf.png')} alt="CTF" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Capture the Flag (b01lers)</b></p>
                     <p className="tidbit-desc-club">
                     We are constantly learning and applying practical skills in web security, system security, reverse engineering, cryptography, and forensics to compete against other schools and teams in Capture The Flag competitions.                     </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/b01lers/"><b>@b01lers</b></a>
                        <a href="mailto:ctf@purdue.edu"><b>ctf@purdue.edu</b></a>
                     </div>
                </div>
            </div>

            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/gsb.png')} alt="GSB" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Graduate Student Association (GSA)</b></p>
                     <p className="tidbit-desc-club">
                     The computer science graduate student association (csgsa or gsa) provides graduate students with social, academic, and professional opportunities to improve their career at purdue and afterwards. The elected computer science graduate student board serves as the leadership of the gsa, and acts as a liaison between the students and department/university leadership.                    </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/purduecsgsb/"><b>@purduecsgsb</b></a>
                        <a href="mailto:csgsb@purdue.edu"><b>csgsb@purdue.edu</b></a>
                     </div>
                </div>
            </div>

            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/htf.png')} alt="HTF" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Hack the Future</b></p>
                     <p className="tidbit-desc-club">
                         Hack the Future at Purdue aims to develop software and technology-related projects for nonprofits focused on improving the community. This organization will foster a group of developers and designers passionate about using their technological skills and knowledge to help those around them. Hack the Future also seeks to create a social and friendly atmosphere among its active members and teams, as well as host open events for anyone to come and learn, hack, and have fun!
                     </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/purduecsgsb/"><b>@hackhefuturepurdue</b></a>
                        <a href="mailto:htfpurdue@gmail.com"><b>htfpurdue@gmail.com</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/gdsc.webp')} alt="GDSC" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Google Developer Student Club</b></p>
                     <p className="tidbit-desc-club">
                     We are the official Purdue Chapter for GDSC, a community for students interested in Google developer technologies! We host weekly workshops on a topic related to Google technologies. Members participate in the Google Solution Challenge and develop a software project for one or more of the United Nations 17 Sustainable Development Goals

                     </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/gdscpurdue/"><b>@gdscpurdue</b></a>
                        <a href="mailto:gdscpurdue@gmail.com"><b>gdscpurdue@gmail.com</b></a>
                     </div>
                </div>
            </div>



            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/arc.jpeg')} alt="ARC" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Autonomous Robotics Club of Purdue</b></p>
                     <p className="tidbit-desc-club">
                     The Autonomous Robotics Club's mission is to openly explore challenging problems within the field of autonomous robotics. Through ARC, students of any background can collaborate with an active community of shared knowledge to help create a real-world impact.
                     </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/purdue.arc/"><b>@purdue.arc</b></a>
                        <a href="mailto:autonomy@purdue.edu"><b>autonomy@purdue.edu</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/launchpad.jpeg')} alt="HTF" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>LaunchPad</b></p>
                     <p className="tidbit-desc-club">
                     LaunchPad is a community of students dedicated to learning, building, and growing together. We provide a one-on-one, semester-long mentorship program to help freshmen students hit the ground running. We pair each incoming student with a talented upperclassman who will introduce them to the CS/DS community at Purdue and guide them in creating a technical project of their choosing. Throughout the semester, we host events to foster a sense of community and to build technical skills. Our goal is to ensure that every incoming student is equipped with the knowledge and connections they’ll need to get the most out of their time at Purdue.
                      </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                         <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="https://www.instagram.com/launchpadpurdue/"><b>@launchpadpurdue</b></a>
                        <a href="mailto:launchpadpurdue@gmail.com"><b>launchpadpurdue@gmail.com</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/plug.png')} alt="PLUG" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Purdue Linux Users Group</b></p>
                     <p className="tidbit-desc-club">
                     We are a Purdue organization that supports Linux, open source software, and Unix-like environments like Mac OSX and BSD.
                      </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="mailto:president@purduelug.org"><b>president@purduelug.org</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/upe.png')} alt="UPE" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Upsilon Pi Epsilon</b></p>
                     <p className="tidbit-desc-club">
                     Upsilon Pi Epsilon is an honor society which was founded in 1967 to recognize scholarship and professionalism in the Computing Sciences. In the 28 years since then, over 120 institutions of higher education around the world have established UPE chapters. It is the only international honor society in the Computing Sciences. 
                      </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                        <a href="mailto:upe@cs.purdue.edu"><b>upe@cs.purdue.edu</b></a>
                     </div>
                </div>
            </div>


            <div className="tidbit-club">
                <div className="left-club">
                    <div className = "club-logo">
                     <img src={require('./images/club_logos/wdc.jpeg')} alt="UPE" />
                     </div>
                </div>
                <div className="right-club">
                     <p className="tidbit-heading-club"><b>Web Dev Club</b></p>
                     <p className="tidbit-desc-club">
                     The purpose of the club is to introduce web fundamentals to anyone who would like to learn. Web fundamentals include HTML & CSS as well as JavaScript. This is not an exclusive club for CS majors as it is open to anyone and everyone.
                      </p>
                </div>
                <div className="contact-club">
                    <div className="social-media">
                    <img src={require('./images/instagram.webp')} alt="Instagram" />
                        <img src={require('./images/email.png')} alt="Mail" />
                    </div>
                    <div className="social-media-text">
                    <a href="https://www.instagram.com/purduewebdevclub/"><b>@purduewebdevclub</b></a>
                        <a href="mailto:wdc@purdue.edu"><b>wdc@purdue.edu</b></a>
                     </div>
                </div>
            </div>


        
        </div>
        
    );


}
export default ClubHub;