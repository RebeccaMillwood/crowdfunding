import React from "react";

function NewUserForm() {
    return (
        <form>
            <div>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                id="username"
                placeholder="Enter a username"
                />
            </div>
            <div>
                <label htmlFor="email">Email address: </label>
                <input
                type="text"
                id="email"
                placeholder="Enter your email address"
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                type="text"
                id="password"
                placeholder="Enter a password"
                />
            </div>
            <div>
                <label htmlFor="first_name">First name: </label>
                <input
                type="text"
                id="first_name"
                placeholder="First name"
                />
            </div>
            <div>
                <label htmlFor="last_name">Last name: </label>
                <input
                type="text"
                id="last_name"
                placeholder="Last name"
                />
            </div>
            <div>
                <label htmlFor="location">Location: </label>
                <input
                type="text"
                id="location"
                placeholder="Location"
                />
            </div>
            <div>
                <label htmlFor="about_me">About me: </label>
                <input
                type="text"
                id="about_me"
                placeholder="Enter details about yourself"
                />
            </div>
            <button type="submit">
                Sign me up!
            </button>
        </form>
    );
}

export default NewUserForm;


