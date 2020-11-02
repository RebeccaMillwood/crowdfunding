import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";

function EditProjectForm() {
    const [projectDetails, newProjectDetails] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            newProjectDetails(data);
        });
        // eslint-disable-next-line
    }, []); 

    // useEffect(() => {
    //     newProjectDetails({
    //         title: projectDetails.title,
    //     })
    // }, [projectDetails]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        newProjectDetails((prevProjectDetails) => ({
          ...prevProjectDetails,
          [id]: value,
        }));
      };

    const putData = async () => {
        const token = window.localStorage.getItem("token");
        // if (!token) {
        //     window.alert("Not logged in");
        //     return;
        // }
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`,
        {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(projectDetails),
        });
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        putData().then((response) => {
            console.log(response);
            if (response.detail) {
                history.push(`/${ErrorNotFound}`);
                return;
            }
            history.push(`/projects/${response.id}`);   
        })
        .catch((error) => {
            if (error.status === 403) {
                history.push(`/${ErrorNotFound}`);
            };
        });
    };

    return(
        <form>
            <div>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    id="title"
                    value = {projectDetails.title}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    id="description"
                    value = {projectDetails.description}
                    onChange={handleChange}
                />
                <label htmlFor="location">Location: </label>
                <input
                    type="text"
                    id="location"
                    value = {projectDetails.location}
                    onChange={handleChange}
                />
                <label htmlFor="goal">Goal: </label>
                <input
                    type="text"
                    id="goal"
                    value = {projectDetails.goal}
                    onChange={handleChange}
                />
                <label htmlFor="image">Image: </label>
                <input
                    type="text"
                    id="image"
                    value = {projectDetails.image}
                    onChange={handleChange}
                />
                <label htmlFor="is_open">Is Project Active?: </label>
                <input
                    type="text"
                    id="is_open"
                    value = {projectDetails.is_open}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Edit
            </button>
        </form>
    );
}

export default EditProjectForm;