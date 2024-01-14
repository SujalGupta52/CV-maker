import PersonalInfo from "./PersonalInfo";
import "../style/editor.css";
import EducationInfo from "./EducationInfo";

export default function Editor({
  personalInfo,
  setPersonalInfo,
  educationInfo,
  setEducationInfo,
}) {
  return (
    <div className="editor">
      <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
      <EducationInfo info={educationInfo} setInfo={setEducationInfo} />
      <button className="print-btn" onClick={() => print()}>
        Print
      </button>
    </div>
  );
}
