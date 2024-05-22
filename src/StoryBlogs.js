import React, { useState } from "react";
import { createBrowserRouter, useLocation, useNavigate } from "react-router-dom";

const StoryBlogs = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { state: { obj } } = location
    const { pathname } = location
    const [page2, setpage2] = useState(false)

    const path = pathname.split('/')

    const handleTabBack = () => {
        navigate(`/${path[1]}`)
    }
    return (

        <div className='StoryBlogs'>
            <button onClick={() => handleTabBack()} className="back_btn">Back</button>
            <h1 id='blog_name'>{obj.name}</h1>
            <div className="description"><p>{obj.description1}</p>
                <p>{obj.description2}</p>
                <p>{obj.description3}
                </p>
            </div>
        </div>
    )
}

export default StoryBlogs;