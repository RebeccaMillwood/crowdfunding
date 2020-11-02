import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";

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
        history.push(`/projects/${id}`);   
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
            </div>
            <button type="submit" onClick={handleSubmit}>
                Edit
            </button>
        </form>
    );
}

export default EditProjectForm;