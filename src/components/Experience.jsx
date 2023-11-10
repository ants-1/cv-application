function Experience({ experience, saveExperience, deleteExperience }) {
    return (
        <div className="cv-experience">
            <h3>Experience</h3>
            {experience.map((exp) => (
                <div key={exp.id} className="experience-info">
                    <div className="experience-job">
                        <span>{exp.job}</span>
                        <span className="remove" onClick={() => deleteExperience(exp.id)}>❌</span>
                    </div>
                    <div className="experience-company">
                        <span>{exp.company}, {exp.location}</span>
                        <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <ul>
                        <li>{exp.description}</li>
                    </ul>
                    {/*<p onClick={(e) => saveExperience(e, exp.id)}>Edit</p>*/}
                </div>
            ))}
        </div>
    );
}

export default Experience;