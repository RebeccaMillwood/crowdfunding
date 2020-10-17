import React from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";


function HomePage() {
    return (
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />
            })}
        </div>
    );
}

// key = index. map has it's own unique identifier, returning each project title in it's own div
export default HomePage;