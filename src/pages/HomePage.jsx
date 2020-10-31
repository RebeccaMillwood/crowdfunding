import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";


function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects`).then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        })
    }, []);

    return (
        <div id="info">
            <h1>DogShare</h1>
            <p>DogShare is a platform to connect busy dog owners with a dog-loving, 
                but available individual who can take their precious pooch for a walk.</p>
            <p>The dog-lover creates a portal to list their location and target 
                number of walks to achieve for the month (in hours).</p>
            <p>The dog-owner seeks out a dog-walker in their location and pledges 
                the number of hours their dog is available to be walked for the month.</p>
            <p>Both dog-lover and dog-owner can see the progress of how many hours’ worth of walks 
                have been achieved for the month; dog-owner can see the total number of hours their 
                dog has been walked on an individual level, and dog-lover can see if they meet their 
                target hours of monthly walks.</p>
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />
            })}
        </div>
        </div>
    );
}

// key = index. map has it's own unique identifier, returning each project title in it's own div
export default HomePage;