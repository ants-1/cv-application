function Education({ education, saveEducation, deleteEducation }) {

  return (
    <div className="cv-education">
      <h3>Education</h3>
      {education.map((edu) => (
        <div key={edu.id} className="education-info">
          <div className="education-course">
            <p>{edu.course}</p>{" "}
            <p onClick={() => deleteEducation(edu.id)}>❌</p>
          </div>
          <div className="education-uni">
            <span>{edu.university}</span>
            <span>{edu.startDate} - {edu.endDate}</span>
          </div>
          <p>Grade: {edu.grade}</p>
          {/*<p onClick={(e) => saveEducation(e, edu.id)}>Edit</p>*/}
        </div>
      ))}
    </div>
  );
}



export default Education;
