import React from "react";
import './Wiki.css';
import axios from 'axios';
import FormControl from 'react-bootstrap/FormControl';



export default class Wiki extends React.Component {

    state = {
        posts: [],
        setPosts: [],
        search: "",
        filter: ""
    }

    componentDidMount = () => {
    this.getWikiPost();
    };

    

   getWikiPost = () => {
        axios.get('http://localhost:5000/get-wiki-posts')
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
        <div className = "container">
            <h1 className = "h1"> <center> Student Wiki </center> </h1>
            <h3 className = "h3">
                <center>
                Contains locally sourced, organic wisdom. Shared by the student body, curated by USB
                </center>
            </h3>



            <input type="text" onChange={(e)=>this.searchSpace(e)} />

            <div className = "content">

                <div className = "category-filter">
                    <div className = "category">
                        <p> Technical </p> 
                        <label>
                            <input type = "checkbox" defaultChecked = {false} />
                        </label>
                    </div>
                    <div className = "category">
                        <p> Campus </p> 
                        <label>
                            <input type = "checkbox" defaultChecked = {false} />
                        </label>
                    </div>
                    <div className = "category">
                        <p> Calendar Events </p> 
                        <label>
                            <input type = "checkbox" defaultChecked = {false} />
                        </label>
                    </div>
                    <div className = "category">
                        <p> Clubs </p> 
                        <label>
                            <input type = "checkbox" defaultChecked = {false} />
                        </label>
                    </div>


                </div>

                <div className = "wiki-scroll">
                    {this.displayWikiPost(this.state.posts)}
                </div>

            </div>  

           


            


        </div>
    );

    }


}