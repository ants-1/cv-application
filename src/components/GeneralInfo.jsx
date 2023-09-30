import Inputs from "./Inputs";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

function GeneralInfo() {
  const sectionHeaderInfo = {
    headerIcon: "src/assets/user.png",
    menuIcon: "src/assets/arrow-down-sign-to-navigate.png",
  };
  return (
    <div className="section">
      <SectionHeader
        headerClassName="general-info"
        headerName="General Information"
        iconSrc={sectionHeaderInfo.headerIcon}
        menuIcon={sectionHeaderInfo.menuIcon}
      />
      <div className="input-section">
        <Inputs
          name="full-name"
          type="text"
          id="full-name"
          labelText="Full Name:"
        />
        <Inputs name="email" type="text" id="email" labelText="Email:" />
        <Inputs
          name="phone-number"
          type="text"
          id="phone-number"
          labelText="Phone Number:"
        />
        <Inputs name="address" type="text" id="address" labelText="Address:" />
      </div>
    </div>
  );
}

export default GeneralInfo;
