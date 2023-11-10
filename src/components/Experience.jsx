function Experience({ experience, saveExperience, deleteExperience }) {
    return (
        <div className="cv-experience">
            <h3>Experience</h3>
            {experience.map((exp) => (
                <div key={exp.id}>
                    <p>Job Title: {exp.job}</p>
                    <p>Company Name: {exp.company}</p>
                    <p>Location: {exp.location}</p>
                    <p>Description: {exp.description}</p>
                    <p>Start Date: {exp.startDate}</p>
                    <p>End Date: {exp.endDate}</p>
                    <button onClick={(e) => saveExperience(e, exp.id)}>Edit</button>
                    <button onClick={() => deleteExperience(exp.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Experience;