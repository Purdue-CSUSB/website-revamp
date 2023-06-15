import React from "react";
import './Wiki.css';
import axios from 'axios';


export default class Wiki extends React.Component {

    state = {
        posts: []
    }

    componentDidMount = () => {
    this.getWikiPost();
    };

   getWikiPost = () => {
        axios.get('http://localhost:5000/get-wiki-posts')
        .then((response) => {
            const data = response.data;
            this.setState({posts: data });
            console.log(this.state.posts);
            console.log("data received");
        })
        .catch(() => {
            console.log("error receiving data");
        });


    };
    displayWikiPost = (posts) => {

        if (!posts.length) return null;

        return posts.map((post, index) => (
            <div key = {index} className = "wikipost-display">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>
        ));
    };


    render() {

    return (
        <>
        <h1 className = "h1"> <center> Student Wiki </center> </h1>
        <h2 className = "h2">
            <center>
            Contains locally sourced, organic wisdom. Shared by the student body, curated by USB
            </center>
        </h2>

        <div>
            {this.displayWikiPost(this.state.posts)}
        </div>


        </>
    );

    }


}