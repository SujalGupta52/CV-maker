import PersonalInfo from "./PersonalInfo";
import "../style/editor.css"

export default function Editor({info, setInfo}) {
    return (
      <div className="editor">
        <PersonalInfo info={info} setInfo= {setInfo}/>
        <button className="print-btn" onClick={() => print()}>Print</button>
      </div>
    );
}