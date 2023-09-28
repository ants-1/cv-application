import Inputs from "./Inputs";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

function Education() {
  const sectionHeaderInfo = {
    headerIcon: "src/assets/education.png",
    menuIcon: "src/assets/arrow-down-sign-to-navigate.png",
  };
  return (
    <>
      <SectionHeader
        headerClassName="education"
        headerName="Education"
        iconSrc={sectionHeaderInfo.headerIcon}
        menuIcon={sectionHeaderInfo.menuIcon}
      />
      <div className="input-section">
        <Inputs name="course" type="text" id="course" labelText="Course:" />
        <Inputs name="school" type="text" id="school" labelText="School:" />
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
        <Inputs name="city" type="text" id="city" labelText="City:" />
        <Inputs
          name="country"
          type="text"
          id="country"
          labelText="Country (Optional):"
        />
        <Button name="Submit" type="submit" />
      </div>
    </>
  );
}

export default Education;
