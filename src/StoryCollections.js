/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { epicStory,fairyTales,humourStory,shortStory } from "./StoryJson";
import { useLocation, useNavigate } from "react-router-dom";

const StoryCollections = (props) => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        if(location.pathname==='/epicStory'){
            setjson(epicStory)
            setheader('Indian Epic Stories')
        }
        if(location.pathname==='/fairyTales'){
            setjson(fairyTales)
            setheader('Fairy Tales')
        }
        if(location.pathname==='/humourStory'){
            setjson(humourStory)
            setheader('Humorous Story')
        }
        if(location.pathname==='/shortStory'){
            setjson(shortStory)
            setheader('Short Stories')
        }
    })
    const [json,setjson]=useState([])
    const [header,setheader]=useState('')
    
    const handleTab = (str,object) => {
        navigate(`${location.pathname}/${str}`,{state:{obj:object}})
    }
    const handleTabBack=()=>{
        navigate('/')
    }

console.log(location.state);

    return (
        <>
        <button onClick={()=>handleTabBack()} className="back_btn">Back</button>
            <h1 className="coll_head">{header}</h1>
            <div className="storyCollections">
                {json.map((obj) => {
                    return (
                        <div className={`collections`}>
                            <img id={`collimg_${obj.id}`} src={obj.image} onClick={() => handleTab(obj.id,obj)} />
                            <h2 id={`collname_${obj.id}`}>{obj.name}</h2>
                        </div>
                    )
                })}
            </div></>
    )
}

export default StoryCollections