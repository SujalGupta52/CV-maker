import Editor from "./Editor";
import Preview from "./Preview";
import { useState } from "react";

export default function App() {
    const [personalInfo, setPersonalInfo] = useState({name:'', dob: '', email: '', phone: '', address: '', github: ''})
    return(
        <>
        <Editor info={personalInfo} setInfo={setPersonalInfo}/>
        <Preview info={personalInfo}/>
        </>
    )
}