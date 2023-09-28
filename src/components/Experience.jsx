function Experience() {
  return (
    <>
      <div className="experience">
        <img src="src/assets/job-icon.png" alt="General Infomation Icon" />
        <h2>Education</h2>
        <img src="src/assets/arrow-down-sign-to-navigate.png" alt="" />
      </div>
      <div className="input-section">
        <label htmlFor="company-name">
          <p>Company Name:</p>
          <input type="text" name="company-name" id="company-name" />
        </label>
        <label htmlFor="position">
            <p>Position Title:</p>
            <input type="text" name="position" id="position" />
        </label>
        <label htmlFor="description">
            <p>Description:</p>
            <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="start-date">
            <p>Start Date:</p>
            <input type="date" name="start-date" id="start-date" />
        </label>
        <label htmlFor="end-date">
            <p>End Date:</p>
            <input type="date" name="end-date" id="end-date" />
        </label>
      </div>
    </>
  );
}

export default Experience;
