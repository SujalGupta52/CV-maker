import Section from "./Section"

export default function Editor() {
    return (
      <div className="editor">
        <Section />
        <Section />
        <Section />
        <Section />
        <button className="print-btn" onClick={() => print()}>Print</button>
      </div>
    );
}