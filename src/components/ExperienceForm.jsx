import Header from "./Header";
import { useState } from "react";
import jobIcon from "../assets/job-icon.png";
import menuIcon from "../assets/arrow-down-sign-to-navigate.png";


function ExperienceForm({ addExperience }) {
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  const headerInfo = {
    headerIcon: jobIcon,
    menuIcon: menuIcon,
  };

  function handleHideSection() {
    setIsSectionHidden(!isSectionHidden);
  }

  return (
    <>
      <form onSubmit={addExperience} className="cv-section">
        <Header
          headerClassName="experience"
          headerName="Experience"
          iconSrc={headerInfo.headerIcon}
          menuIcon={headerInfo.menuIcon}
          handleHideSection={handleHideSection}
        />
        <div className={`toggle-form ${isSectionHidden ? 'hide' : ''}`}>
          <label>
            <p>Job Title</p>
            <input type="text" name="job" id="job" required />
          </label>
          <label>
            <p>Company Name</p>
            <input type="text" name="company" id="company" required />
          </label>
          <label>
            <p>Location (Optional)</p>
            <input type="text" name="location" id="location" required />
          </label>
          <label>
            <p>Description</p>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              required
            ></textarea>
          </label>
          <label>
            <p>Start Date</p>
            <input type="text" name="startDate" id="startDate" required />
          </label>
          <label>
            <p>End Date</p>
            <input type="text" name="endDate" id="endDate" required />
          </label>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}

export default ExperienceForm;
