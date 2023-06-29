import React from "react";
import '../wiki.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



export class Wiki extends React.Component {

    state = {
        posts: [],
        setPosts: [],
        search: ""
    }

    componentDidMount = () => {
    this.getWikiPost();
    };

    

   getWikiPost = () => {
        axios.get('http://localhost:8080/api')
        .then((response) => {
            const data = response.data;
            this.setState({posts: data });
            console.log(data);
            console.log(this.state.posts);
            console.log("data received");
        })
        .catch(() => {
            console.log("error receiving data");
        });


    };

    displayWikiPost = (posts) => {

        if (!posts.length) return null;

        if (this.state.search != "") {
            const searchResults = posts.filter(post => post.title.toLowerCase().includes(this.state.search.toLowerCase()));
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

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
        console.log(this.state.search);
      }

        

    render() {

    return (
        <div>
            <h1 className = "h1"> <center> Student Wiki </center> </h1>
            <h2 className = "h2">
                <center>
                Contains locally sourced, organic wisdom. Shared by the student body, curated by USB
                </center>
            </h2>

            <input type="text" placeholder="Search" onChange={(e)=>this.searchSpace(e)} />


            <div className = "wiki-scroll">
                {this.displayWikiPost(this.state.posts)}
            </div>


        </div>
    );

    }


}
