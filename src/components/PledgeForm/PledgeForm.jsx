import React from "react";


function PledgeForm() {
    return (
        <form>
        <div>
            <label htmlFor="amount">How many hours can you spare?: </label>
            <input
                type="text"
                id="amount"
                placeholder="Time in hours"
            />
            <label htmlFor="comment">Comment: </label>
            <input
                type="text"
                id="comment"
                placeholder="Comment"
            />
            <label htmlFor="anonymous">Anonymous? </label>
            <input
                type="text"
                id="anonymous"
                placeholder="True/Flase"
            />
        </div>
        <button type="submit">
            Pledge my time!
        </button>
        </form>
    );
}

export default PledgeForm;

// pledge form is incomplete - it is not functional.