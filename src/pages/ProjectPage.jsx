import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectPage.css";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
        // eslint-disable-next-line
    }, []); 


    return (
        <div>
            <h2>{projectData.title}</h2>
            <img src={projectData.image} alt=""/>
            <h3>Project opened: {projectData.date_created}</h3>
            <h3>Description: {projectData.description}</h3>
            <h3>Location: {projectData.location}</h3>
            <h3>Walks needed this month (in hours): {projectData.goal}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <li>
                <Link to={`/edit/${projectData.id}`}>Edit</Link>
            </li>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProjectPage;