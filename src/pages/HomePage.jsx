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
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />
            })}
        </div>
    );
}

// key = index. map has it's own unique identifier, returning each project title in it's own div
export default HomePage;