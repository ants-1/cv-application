function Education({ education, saveEducation }) {
  return (
    <div className="cv-education">
      <h3>Education</h3>
      {education.map((edu) => (
        <div key={edu.id}>
          <p>Course: {edu.course}</p>
          <p>University: {edu.university}</p>
          <p>Grade: {edu.grade}</p>
          <p>
            Start Date: {edu.startDate}, End Date: {edu.endDate}
          </p>
          <button onClick={() => saveEducation(edu.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Education;
