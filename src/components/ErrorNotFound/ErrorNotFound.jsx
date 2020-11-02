import React from "react";
import "./ErrorNotFound.css";
import Image from "./detective-dog.jpg";

function ErrorNotFound() {
    return(
        <div id='error'>
            <h1 className="notFoundTitle">Doggonit! This page can't be found</h1>
            <p className="notFoundDesc">It looks like nothing was found at this page or 
            you may not have authorisation to complete this activity.
            Maybe try another link.</p>
            <img src={Image} alt="detective-dog" />
        </div>
    );
}

export default ErrorNotFound;