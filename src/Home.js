/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
    const handleClick=(path,str)=>{
        navigate(`/${path}`)
    }
    return (
        <>
        <h1>Story WebBlog</h1>
        <div className='Home'>
            <div id="epic" onClick={()=>handleClick('epicStory')}>
                <img src={require('./images/IndianEpic.webp')} />
                <div>
                    <h3>Indian Epic Stories</h3>
                    <p>An epic is a long book, poem, or film, whose story extends over a long period of time or tells of great events.</p>
                </div>
            </div>

            <div id='tales' onClick={()=>handleClick('fairyTales')}>
                <img src={require('./images/fairyTales.jpeg')} />
                <div>
                    <h3>Fairy Tales</h3>
                    <p>A fairy tale is a short story set in a typically magical realm, with human characters as well as otherworldly beings, like witches and wizards.</p>
                </div>
            </div>

            <div id='shortStories' onClick={()=>handleClick('shortStory')}>
                <img src={require('./images/ShortStory.jpg')} />
                <div>
                    <h3>Short Stories</h3>
                    <p>A short story is a work of prose fiction that can be read in one sitting—usually between 20 minutes to an hour. </p>
                </div>
            </div>

            <div id='humorousStories' onClick={()=>handleClick('humorousStory')}>
                <img src={require('./images/humorous.jpg')} />
                <div>
                    <h3>Humorous Stories</h3>
                    <p>Comedy Story is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter.</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Home;