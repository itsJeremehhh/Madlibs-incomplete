import React, {useState} from "react";

const MadlibsForm = () => {
    const [noun1, setNoun1] = useState(null)
    const [noun2, setNoun2] = useState(null)
    const [adjective, setAdjective] = useState(null)

    const handleChange = (e) => { //Might need to make a component for an area in which the form is inserted.
        setMadlib(e.target.value)
    }

    return (
        <form>
            <input type="text" id="noun" placeholder="Noun 1" value={noun2} onChange={handleChange}></input>
            <br></br>
            <input type="text" id="noun2" 
            placeholder="Noun 2" value={noun2}></input>
            <br></br>
            <input type="text" id="adjective" placeholder="adjective"></input>
            <br></br>
            <button>Creat Story</button>
        </form>
    )
} 

export default MadlibsForm;