function Education() {
  return (
    <>
      <div className="education">
        <img src="src/assets/education.png" alt="General Infomation Icon" />
        <h2>Education</h2>
        <img src="src/assets/arrow-down-sign-to-navigate.png" alt="" />
      </div>
      <div className="input-section">
        <label htmlFor="course">
            <p>Course:</p>
            <input type="text" name="course" id="course" />
        </label>
        <label htmlFor="school">
            <p>School Name:</p>
            <input type="text" name="school" id="school" />
        </label>
        <label htmlFor="start-date">
            <p>Start Date</p>
            <input type="date" name="start-date" id="start-date" />
        </label>
        <label htmlFor="end-date">
            <p>End Date</p>
            <input type="date" name="end-date" id="end-date" />
        </label>
        <label htmlFor="city">
            <p>City:</p>
            <input type="text" name="city" id="city" />
        </label>
        <label htmlFor="country">
            <p>Country (Optional):</p>
            <input type="text" name="country" id="country" />
        </label>
      </div>
    </>
  );
}

export default Education;
