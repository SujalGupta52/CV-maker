import { useState } from "react";

export default function EducationInfo({ info, setInfo }) {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <div className="section">
      <div className="title" onClick={() => setCollapse(!isCollapsed)}>
        Education <div>{isCollapsed ? "▼" : "▲"}</div>
      </div>
      <div className={`dropdown ${isCollapsed ? "hidden" : ""}`}>
        {processInfo(info, setInfo)}
        <button
          className="add-item"
          onClick={() => {
            const newList = [
              ...info,
              {
                id: info[info.length - 1].id + 1,
                from: "",
                to: "",
                location: "",
                course: "",
                institute: "",
                description: "",
              },
            ];
            setInfo(newList);
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

function processInfo(info, setInfo) {
  return info.map((item) => {
    return (
      <div className="edu-info" key={item.id} id={item.id}>
        <div>
          <label htmlFor="from">From</label>
          <input
            type="text"
            placeholder="1970"
            id="from"
            onChange={(e) => {
              const prevObj = item;
              setInfo(
                info.map((item) => {
                  if (item === prevObj) {
                    return { ...item, from: e.target.value };
                  }
                  return item;
                })
              );
            }}
            value={item.from}
          />
          <label htmlFor="to">To</label>
          <input
            type="text"
            placeholder="1980"
            id="to"
            onChange={(e) => {
              const prevObj = item;
              setInfo(
                info.map((item) => {
                  if (item === prevObj) {
                    return { ...item, to: e.target.value };
                  }
                  return item;
                })
              );
            }}
            value={item.to}
          />
        </div>
        <div>
          <label htmlFor="course">Course</label>
          <input
            type="text"
            placeholder="BTech CSE"
            id="course"
            onChange={(e) => {
              const prevObj = item;
              setInfo(
                info.map((item) => {
                  if (item === prevObj) {
                    return { ...item, course: e.target.value };
                  }
                  return item;
                })
              );
            }}
            value={item.course}
          />
        </div>
        <div>
          <label htmlFor="institute">Institute</label>
          <input
            type="text"
            placeholder="XYZ University"
            id="institute"
            onChange={(e) => {
              const prevObj = item;
              setInfo(
                info.map((item) => {
                  if (item === prevObj) {
                    return { ...item, institute: e.target.value };
                  }
                  return item;
                })
              );
            }}
            value={item.institute}
          />
        </div>
        <div>
          <label htmlFor="description">Additional Info</label>
          <textarea
            placeholder="Scored 9.9 CGPA"
            id="description"
            onChange={(e) => {
              const prevObj = item;
              setInfo(
                info.map((item) => {
                  if (item === prevObj) {
                    return { ...item, description: e.target.value };
                  }
                  return item;
                })
              );
            }}
            value={item.description}
          />
        </div>
      </div>
    );
  });
}
