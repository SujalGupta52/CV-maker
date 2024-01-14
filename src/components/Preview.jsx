import "../style/preview.css"

export default function Preview({info}) {
    return(
        <div className="preview">
            <div className="page">
                <div className="personal-info">
                    <div className="name">{info.name}</div>
                    <ul className="info">
                        <li>{info.dob}</li>
                        <li>{info.email}</li>
                        <li>{info.phone}</li>
                        <li>{info.address}</li>
                        <li>{info.github}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}