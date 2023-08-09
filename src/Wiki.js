import React, { useEffect } from "react";
import './Wiki.css';
import axios from 'axios';
import { useState } from "react";



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

    const [checked, setChecked] = useState(false);
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

        setChecked(event.target.checked);
        console.log(posts);
    }


    /* 


    const showFilteredWikis= (posts) => {

        if (!posts.length) return null;
    
        if (this.state.filter != "") {
            console.log("registered");
            const filterResults = this.state.posts.filter(post => post.category.toLowerCase().includes(this.state.filter.toLowerCase()));
            console.log(filterResults);
            return filterResults.map((query, index) => (
            
                <div key = {index} className = "wikipost-display">
                    <h3>{query.title}</h3>
                    <p>{query.description}</p>
                </div>
        ));

        }


        return this.state.posts.map((post, index) => (

            <div key = {index} className = "wikipost-display">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>

    
        ));

    };

    */



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