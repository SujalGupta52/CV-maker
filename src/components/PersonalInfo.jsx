import { useState } from "react";

export default function PersonalInfo({ info, setInfo }) {
  const [isCollapsed, setCollapse] = useState(false);
  return (
    <div className="section">
      <div className="title" onClick={() => setCollapse(!isCollapsed)}>
        Personal Info <div>{isCollapsed ? "▼" : "▲"}</div>
      </div>{" "}
      <div className={`dropdown ${isCollapsed ? "hidden" : ""}`}>
        <div className="personal-info">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="John Doe..."
            id="name"
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            value={info.name}
          />
        </div>
        <div className="personal-info">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            id="dob"
            onChange={(e) => setInfo({ ...info, dob: e.target.value })}
            value={info.dob}
          />
        </div>
        <div className="personal-info">
          <label htmlFor="emailId">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            id="emailId"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            value={info.email}
          />
        </div>
        <div className="personal-info">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            placeholder="+91 987654321"
            id="phone"
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            value={info.phone}
          />
        </div>
        <div className="personal-info">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="123 Grove Street..."
            id="address"
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
            value={info.address}
          />
        </div>
        <div className="personal-info">
          <label htmlFor="github">Github</label>
          <input
            type="text"
            placeholder="https://github.com/JohnDoe"
            id="github"
            onChange={(e) => setInfo({ ...info, github: e.target.value })}
            value={info.github}
          />
        </div>
      </div>
    </div>
  );
}
