import Editor from "./Editor";
import Preview from "./Preview";
import { useState } from "react";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    github: "",
  });
  const [educationInfo, setEducationInfo] = useState([
    {
      id: 1,
      from: '',
      to: '',
      location: "",
      course: "",
      institute: "",
      description: "",
    },
  ]);
  return (
    <>
      <Editor
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <Preview info={personalInfo} />
    </>
  );
}
