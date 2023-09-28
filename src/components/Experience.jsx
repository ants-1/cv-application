import Inputs from "./Inputs";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

function Experience() {
  const sectionHeaderInfo = {
    headerIcon: "src/assets/job-icon.png",
    menuIcon: "src/assets/arrow-down-sign-to-navigate.png",
  };
  return (
    <>
      <SectionHeader
        headerClassName="experience"
        headerName="Experience"
        iconSrc={sectionHeaderInfo.headerIcon}
        menuIcon={sectionHeaderInfo.menuIcon}
      />
      <div className="input-section">
        <Inputs
          name="company-name"
          type="text"
          id="company-name"
          labelText="Company Name:"
        />
        <Inputs
          name="position"
          type="text"
          id="position"
          labelText="Position Title:"
        />
        <Inputs
          name="description"
          type="text"
          id="description"
          labelText="Description: "
        />
        <Inputs
          name="start-date"
          type="date"
          id="start-date"
          labelText="Start Date:"
        />
        <Inputs
          name="end-date"
          type="date"
          id="end-date"
          labelText="End Date:"
        />
        <Button name="Submit" type="type" />
      </div>
    </>
  );
}

export default Experience;
