function EducationForm({ addEducation }) {
  return (
    <>
      <form onSubmit={addEducation}>
        <h3>Education</h3>
        <label>
          <p>Course:</p>
          <input type="text" placeholder="BSc Computer Science" name="course" />
        </label>
        <label>
          <p>University:</p>
          <input type="text" placeholder="University of Programming" name="university" />
        </label>
        <label>
          <p>Grade:</p>
          <input type="text" placeholder="2:1" name="grade" />
        </label>
        <label>
          <p>Start Date:</p>
          <input type="date" name="startDate" />
        </label>
        <label>
          <p>End Date:</p>
          <input type="date" name="endDate" />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default EducationForm;
