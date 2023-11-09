function ExperienceForm({ addExperience }) {
  return (
    <>
      <form onSubmit={addExperience}>
        <h3>Experience</h3>
        <label>
          <p>Job Title</p>
          <input type="text" name="job" id="job" />
        </label>
        <label>
          <p>Company Name</p>
          <input type="text" name="company" id="company" />
        </label>
        <label>
          <p>Location (Optional)</p>
          <input type="text" name="location" id="location" />
        </label>
        <label>
          <p>Description</p>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </label>
        <label>
          <p>Start Date</p>
          <input type="text" name="startDate" id="startDate" />
        </label>
        <label>
          <p>End Date</p>
          <input type="text" name="endDate" id="endDate" />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ExperienceForm;
