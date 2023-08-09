import React, { useEffect } from "react";
import './Wiki.css';
import axios from 'axios';
import { useState } from "react";
import { FlutterDash } from "@mui/icons-material";



//export default class Wiki extends React.Component {

function Wiki() {


    /*

    const state = {
        posts: [],
        setPosts: [],
        search: "",
        filter: ""
    }

    */

   //const componentDidMount = () => {
       // getWikiPost();
   // };

    const [technical, setTechnical] = useState(false);
    const [campus, setCampus] = useState(false);
    const [calendarEvents, setCalendarEvents] = useState(false);
    const [clubs, setClubs] = useState(false);

    let checkBoxes = [technical, campus, calendarEvents, clubs];



    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    

    

   useEffect(() => {
        axios.get('http://localhost:5000/get-wiki-posts')
        .then((response) => {
            //const data = response.data;
            //console.log(data);
            setPosts(response.data);
            console.log(response.data);
            console.log("data received");
        })
        .catch(() => {
            console.log("error receiving data");
        });


    }, []);

    

    const displayWikiPost = (posts) => {

        if (!posts.length) return null;

        if (search != "") {
            const searchResults = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
            return searchResults.map((query, index) => (
            
                <div key = {index} className = "wikipost-display">
                    <h3>{query.title}</h3>
                    <p>{query.description}</p>
                </div>
        ));

        }
        let filteredResults = [];

            checkBoxes.forEach((box, index) => {

                console.log(box + " " + index) ;

                if (box) {
                    if (index === 0) {
                       // console.log("technical");
                        const technical = posts.filter(post => post.category.toLowerCase().includes("technical"));
                        filteredResults.push(...technical);
                    }
                    if (index == 1) {
                        const campus = posts.filter(post => post.category.toLowerCase().includes("campus"))
                        filteredResults.push(...campus);
                       //console.log("campus");
                    }
                    if (index == 2) {
                        const calendar = posts.filter(post => post.category.toLowerCase().includes("calendar events"));
                        filteredResults.push(...calendar);
                        //console.log("calendar events");
                    }
                    else {
                        const clubs = posts.filter(post => post.category.toLowerCase().includes("clubs"));
                        filteredResults.push(...clubs);
                       // console.log("clubs");
                    }
                }

            });

            if (filteredResults.length > 0) {

                return filteredResults.map((query, index) => 
                    
                        <div key = {index} className = "wikipost-display">
                            <h3>{query.title}</h3>
                            <p>{query.description}</p>
                        </div>
                );

            }



            return posts.map((post, index) => (

                <div key = {index} className = "wikipost-display">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </div>

        
            ));

    };

   const searchSpace=(event)=> {
        let keyword = event.target.value;
        setSearch(keyword);
      }



    const checkedBox = (event) => {


        if (event.target.value == "technical") {
            setTechnical(event.target.checked);
        }
        else if (event.target.value == "campus") {
            setCampus(event.target.checked);
        }
        else if (event.target.value == "calendar events") {
            setCalendarEvents(event.target.checked);
        }
        else {
            setClubs(event.target.checked);
        }
    }




    return (
        <div>
            <h1 className = "h1"> <center> Student Wiki </center> </h1>
            <h3 className = "h3">
                <center>
                Contains locally sourced, organic wisdom. Shared by the student body, curated by USB
                </center>
            </h3>


            <input type="text" onChange={searchSpace} />

            <div className = "content">

                <div className = "category-filter">
                    <div className = "category">
                        <p> Technical </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "technical"
                                onChange = {checkedBox}
                            />
                        </label>
                    </div>
                    <div className = "category">
                        <p> Campus </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "campus"
                                onChange = {checkedBox}
                            /> 
                        </label>
                    </div>
                    <div className = "category">
                        <p> Calendar Events </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "calendar events"
                                onChange = {checkedBox}
                            />
                        </label>
                    </div>
                    <div className = "category">
                        <p> Clubs </p> 
                        <label>
                            <input
                                type = "checkbox" defaultChecked = {false}
                                value = "clubs"
                                onChange = {checkedBox}
                            /> 
                        </label>
                    </div>


                </div>

                <div className = "wiki-scroll">
                    {displayWikiPost(posts)}
                </div>

            </div>  

           


            


        </div>
    );

    }

export default Wiki;