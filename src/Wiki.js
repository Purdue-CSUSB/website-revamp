import React, { useEffect } from "react";
import './Wiki.css';
import axios from 'axios';
import { useState } from "react";



//export default class Wiki extends React.Component {

function Wiki() {


    const [technical, setTechnical] = useState(false);
    const [campus, setCampus] = useState(false);
    const [calendarEvents, setCalendarEvents] = useState(false);
    const [clubs, setClubs] = useState(false);

    let checkBoxes = [technical, campus, calendarEvents, clubs];



    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    

    

   useEffect(() => {
        axios.get('http://localhost:4000/get-wiki-posts')
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

        let searchResults = []

        if (search != "") {
            searchResults = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
        }

        let currentResults = posts;
        if (searchResults.length > 0) {
            currentResults = searchResults;
        }
        console.log(currentResults);
        let filteredResults = [];
        let someBoxChecked = false;

            checkBoxes.forEach((box, index) => {


                if (box) {
                    someBoxChecked = true;
                    if (index === 0) {
                        const technical = currentResults.filter(post => post.category.toLowerCase().includes("technical"));
                        filteredResults.push(...technical);
                        console.log(filteredResults);
                    }
                    if (index == 1) {
                        const campus = currentResults.filter(post => post.category.toLowerCase().includes("campus"))
                        filteredResults.push(...campus);
                    }
                    if (index == 2) {
                        const calendar = currentResults.filter(post => post.category.toLowerCase().includes("calendar events"));
                        filteredResults.push(...calendar);
                    }
                    else {
                        const clubs = currentResults.filter(post => post.category.toLowerCase().includes("clubs"));
                        filteredResults.push(...clubs);
                    }
                }

            });


            if (filteredResults.length > 0) {
                currentResults = filteredResults;
            }
            else {
                if (someBoxChecked) {
                    currentResults = []
                }
            }


            return currentResults.map((post, index) => (
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


            <input className = "search" type="text" onChange={searchSpace} />

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