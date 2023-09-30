function CVTemplate() {
  return (
    <div className="cv-template">
      <div className="cv-general-info">
        <h1 className="name">Name</h1>
        <p className="email">Email</p>
        <p className="phone-num">Phone</p>
        <p className="address">Address</p>
      </div>
      <div className="cv-education">
        <h2>Education</h2>
      </div>
      <div className="cv-experience">
        <h2>Experience</h2>
      </div>
    </div>
  );
}

export default CVTemplate;
