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
        </div>
        <button type="submit">
            Pledge!
        </button>
        </form>
    );
}

export default PledgeForm;

// pledge form is incomplete - it is not functional.