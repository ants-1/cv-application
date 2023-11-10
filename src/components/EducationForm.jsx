import Header from "./Header";
import { useState } from "react";
import educationIcon from "../assets/education.png";
import menuIcon from "../assets/arrow-down-sign-to-navigate.png";

function EducationForm({ addEducation }) {
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  const headerInfo = {
    headerIcon: educationIcon,
    menuIcon: menuIcon,
  };

  function handleHideSection() {
    setIsSectionHidden(!isSectionHidden);
  }

  return (
    <>
      <form onSubmit={addEducation} className="cv-section">
        <Header
          headerClassName="education"
          headerName="Education"
          iconSrc={headerInfo.headerIcon}
          menuIcon={headerInfo.menuIcon}
          handleHideSection={handleHideSection}
        />
        <div className={`toggle-form ${isSectionHidden ? 'hide' : ''}`}>
          <label>
            <p>Course:</p>
            <input
              type="text"
              placeholder="BSc Computer Science"
              name="course"
              required
            />
          </label>
          <label>
            <p>University:</p>
            <input
              type="text"
              placeholder="University of Programming"
              name="university"
              required
            />
          </label>
          <label>
            <p>Grade:</p>
            <input type="text" placeholder="2:1" name="grade" required />
          </label>
          <label>
            <p>Start Date:</p>
            <input type="date" name="startDate" required />
          </label>
          <label>
            <p>End Date:</p>
            <input type="date" name="endDate" required />
          </label>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}

export default EducationForm;
