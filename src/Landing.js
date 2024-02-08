// General Imports
import { Link, useNavigate } from "react-router-dom";
//import * as React from 'react';
import React, { useState } from 'react';
import './Landing.css';

// Importing MUI Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu } from "@mui/base";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InstagramEmbed } from 'react-social-media-embed'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';



const postData = [ {src: "/banquet.jpg", link:'https://www.instagram.com/p/C0cXh4fJuAf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
                {src:"/helproom.jpg", link:"https://www.instagram.com/p/C2nmK1Qpsc4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
                {src:"/CoC.jpg", link:"https://www.instagram.com/p/C2AUKfNL-Oy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}, 
                {src:"/innovateher.jpg", link:"https://www.instagram.com/p/C0FZzBLJ4Ll/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
                {src:"/2024callout.jpg", link:"https://www.instagram.com/p/C15aRw2JiwP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
                ];





const theme = createTheme({
    palette: {
        yellow: {
            main: '#ffc700'
        },
    },
});

// Defined constants
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    
  };


  function SocialMediaCard({src, link})  {

    const [heartColor, setHeartColor] = useState('gray');
    const [shareColor, setShareColor] = useState('gray');


    const handleFavorite= () => {
        if (heartColor === 'gray')
            setHeartColor('red');
        else{
            setHeartColor('gray')
        }
    };

    const handleShare= () => {
        if (shareColor === 'gray')
            setShareColor('red');
        else{
            setShareColor('gray')
        }
        
        window.open(link);
      };

      return (

            <Card sx={{ height: 400, width: 375}}>
            <img 
                src={src} 
                style={{ 
                    height: '300px', 
                    padding: '25px',
                    borderRadius: '30px'
                }}
            />
            <IconButton onClick={handleFavorite} sx={{marginLeft:'25px', marginTop: -2}}>
                <FavoriteIcon style={{ color: heartColor }} />
            </IconButton>
            <IconButton onClick={handleShare} sx={{ marginTop: -2}}>
                <ShareOutlinedIcon style={{ color: shareColor }} />
            </IconButton>   
        </Card>

        );


  }



export default function Landing() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/wiki');
    };


    return (
        <div>
            <div className="welcome">
                <div className="intro">
                    <h1>Hello from USB! </h1>
                    <h2> Strengthening the Purdue Computing Student Experience since 1999 </h2>
                    <ThemeProvider theme={theme}>
                        <Stack direction="row" spacing={2} justifyContent="center" marginTop={-6}>
                            <Button color="yellow" size="large" variant="outlined" startIcon={<MenuBookIcon />}
                                onClick={handleClick}>
                                Read Student Wiki
                            </Button>
                            <Button color="yellow" size="large" variant="outlined" startIcon={<TipsAndUpdatesIcon />}>
                                Explore Initiatives
                            </Button>
                        </Stack>
                    </ThemeProvider>
                </div>
                <div className="photo">

                    <img src={require('./images/team2022.png')} />

                </div>


            </div>

            <div className = "social">
                <h1 class = "h1Social"> Stay Connected</h1>

                <Slider {...settings}>
                    {postData.map((post) => (
                    <SocialMediaCard src={post.src} link={post.link} />
                    ))}
                </Slider> 

            </div>

            
        </div>

        // TODO: Container for Meet the Board
        // TODO: Container for About Us
    );
}