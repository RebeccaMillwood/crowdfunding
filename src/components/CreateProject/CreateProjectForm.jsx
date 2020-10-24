import React, { useState } from "react";

function CreateProjectForm() {
    const [projectDetails, setProjectDetails] = useState({
        title: "",
        description: "",
        location: "",
        goal: "",
        image: "",
        open: "",     
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProjectDetails((prevProjectDetails) => ({
            ...prevProjectDetails,
            [id]: value,
        }));
    };

    const postData = async () => {
        const token = window.localStorgae.getItem("token");
        if (!token) {
            window.alert("Not logged in");
            return;
        }
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}/projects/`,
        {
        method: "post",
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
        postData().then((response) => {
            console.log(response);
        });
    };

    return (
        <form>
        <div>
        <label htmlFor="title">Title: </label>
        <input
            type="text"
            id="title"
            placeholder="Project title"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="description">Description: </label>
        <input
            type="text"
            id="description"
            placeholder="Project description"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="location">Location: </label>
        <input
            type="text"
            id="location"
            placeholder="Location"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="goal">Goal: </label>
        <input
            type="text"
            id="goal"
            placeholder="Goal in hours"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="image">Image: </label>
        <input
            type="url"
            id="image"
            placeholder="Image"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="is_open">Is Project Active?: </label>
        <input
            type="text"
            id="is_open"
            placeholder="True/False"
            onChange={handleChange}
        />
        </div>
        <button type="submit" onClick={handleSubmit}>
        Create Project
        </button>
        </form>
    );
}

export default CreateProjectForm;