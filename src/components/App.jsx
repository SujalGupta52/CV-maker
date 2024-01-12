import Editor from "./Editor";
import Preview from "./Preview";
import "../index.css";

export default function App() {
    const isMobile = window.innerWidth < 600;
    return(
        <>
        {isMobile ? <Editor /> : <><Editor /><Preview /></>}
        </>
    )
}